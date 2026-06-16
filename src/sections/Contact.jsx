import emailjs from '@emailjs/browser';
import { useRef, useState, useEffect } from 'react';
import useAlert from '../hooks/useAlert.js';

const Contact = () => {
  const formRef = useRef();
  const sectionRef = useRef(null);
  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('[data-reveal]').forEach((el, i) => {
              setTimeout(() => el.classList.add('revealed'), i * 80);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: 'Aditya',
          from_email: form.email,
          to_email: 'reach.adml@gmail.com',
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(() => {
        setLoading(false);
        showAlert({ show: true, text: 'Message sent! I\'ll get back to you soon.', type: 'success' });
        setTimeout(() => {
          hideAlert(false);
          setForm({ name: '', email: '', message: '' });
        }, 3000);
      })
      .catch((error) => {
        setLoading(false);
        console.error('EmailJS Error:', error);
        showAlert({ show: true, text: 'Something went wrong. Email me directly.', type: 'danger' });
      });
  };

  return (
    <section id="contact" className="section" ref={sectionRef}>
      <div className="container">
        {/* Alert */}
        {alert.show && (
          <div className="alert-container">
            <div className={`alert alert-${alert.type}`}>{alert.text}</div>
          </div>
        )}

        <p className="section-label" data-reveal>
          <span style={{ opacity: 0.4 }}>05</span> Contact
        </p>

        <h2 className="section-title" data-reveal data-reveal-delay="1">
          Let's work together
        </h2>

        <p className="contact-bio" data-reveal data-reveal-delay="2">
          Whether you need a full-stack web app, want to collaborate on something interesting,
          or just want to say hi — my inbox is open.
        </p>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="contact-form"
          data-reveal
          data-reveal-delay="3"
        >
          <div className="form-group">
            <label className="form-label" htmlFor="contact-name">Name</label>
            <input
              id="contact-name"
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="form-input"
              placeholder="John Doe"
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="contact-email">Email</label>
            <input
              id="contact-email"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="form-input"
              placeholder="john@example.com"
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="contact-message">Message</label>
            <textarea
              id="contact-message"
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              className="form-textarea"
              placeholder="What's on your mind?"
            />
          </div>

          <button type="submit" className="form-submit" disabled={loading}>
            {loading ? (
              <>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M21 12a9 9 0 11-6.219-8.56" style={{ animation: 'spin 1s linear infinite' }}/>
                </svg>
                Sending...
              </>
            ) : (
              <>
                Send message
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>
                </svg>
              </>
            )}
          </button>
        </form>

        {/* Alternative contact */}
        <div className="contact-alt" data-reveal data-reveal-delay="4">
          <span className="contact-alt-label">Or reach me directly:</span>
          <a href="mailto:reach.adml@gmail.com" className="contact-alt-link">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
            </svg>
            reach.adml@gmail.com
          </a>
          <a
            href="https://github.com/ADML003"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-alt-link"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            github.com/ADML003
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
