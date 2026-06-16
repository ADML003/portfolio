import { useEffect, useRef } from 'react';
import Globe from 'react-globe.gl';

const About = () => {
  const sectionRef = useRef(null);
  const globeRef = useRef(null);

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

  return (
    <section id="about" className="section" ref={sectionRef}>
      <div className="container">
        <p className="section-label" data-reveal>
          <span style={{ opacity: 0.4 }}>01</span> About
        </p>

        <div className="about-layout">
          {/* Left — text */}
          <div>
            <p className="about-bio" data-reveal data-reveal-delay="1">
              I'm <strong>Aditya Malhotra</strong> — an <strong>AI Full-Stack Developer</strong> based
              in New Delhi, India. I build intelligent web products end-to-end: from LLM integrations
              and APIs to the interfaces people interact with every day.
            </p>

            <p className="about-bio" data-reveal data-reveal-delay="2">
              I've shipped AI SaaS platforms, smart travel apps, and real-time dashboards — both
              independently and during internships. I care deeply about clean architecture,
              performance, and products that actually solve something.
              Currently <strong>open to full-time opportunities</strong>.
            </p>

            <div className="about-highlights" data-reveal data-reveal-delay="3">
              <div className="about-highlight">
                <span className="about-highlight-icon">🤖</span>
                <p className="about-highlight-text">
                  <strong>AI Engineer</strong> — LLM integrations, generative image AI, intelligent automation
                </p>
              </div>
              <div className="about-highlight">
                <span className="about-highlight-icon">⚡</span>
                <p className="about-highlight-text">
                  <strong>Full-Stack</strong> — React, Next.js, Node, MongoDB, REST APIs end-to-end
                </p>
              </div>
              <div className="about-highlight">
                <span className="about-highlight-icon">🚀</span>
                <p className="about-highlight-text">
                  <strong>Builder mindset</strong> — 5+ live projects, 2 internships, always shipping
                </p>
              </div>
            </div>
          </div>

          {/* Right — globe */}
          <div data-reveal data-reveal-delay="2">
            <div className="globe-wrapper">
              <Globe
                height={280}
                width={360}
                backgroundColor="rgba(0,0,0,0)"
                backgroundImageOpacity={0}
                showAtmosphere={true}
                atmosphereColor="#1a1a2e"
                atmosphereAltitude={0.12}
                showGraticules={false}
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                enablePointerInteraction={false}
                pointsData={[{ lat: 28.6139, lng: 77.209, size: 0.8, color: '#4ade80' }]}
                pointAltitude={0.01}
                pointColor="color"
                pointRadius="size"
                labelsData={[{ lat: 28.6139, lng: 77.209, text: 'New Delhi', color: '#4ade80', size: 0.6 }]}
                labelText="text"
                labelColor="color"
                labelSize="size"
                labelDotRadius={0.3}
                labelAltitude={0.015}
                ref={(globe) => {
                  if (globe) {
                    globe.controls().autoRotate = true;
                    globe.controls().autoRotateSpeed = 0.8;
                    globe.controls().enableZoom = false;
                    globe.pointOfView({ lat: 20, lng: 80, altitude: 2.2 }, 1500);
                  }
                }}
              />
              <div className="globe-label">
                Based in New Delhi · Open to remote worldwide
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
