import { useState } from 'react';
import Globe from 'react-globe.gl';
import Button from '../components/Button.jsx';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('reach.adml@gmail.com');
    setHasCopied(true);
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };
  return (
    <section className="c-space my-20" id="about">
      {' '}
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        {' '}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <div className="w-full sm:h-[276px] h-fit flex flex-col justify-center items-center bg-gradient-to-br from-indigo-900/30 via-purple-900/30 to-pink-900/30 rounded-3xl border border-indigo-500/20 relative overflow-hidden">
              {/* Static Background Pattern */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-400/10 via-purple-400/10 to-pink-400/10"></div>
                <div className="absolute top-4 left-4 w-16 h-16 border border-blue-300/30 rounded-full"></div>
                <div className="absolute bottom-8 right-6 w-12 h-12 border border-purple-300/30 rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 border border-pink-300/20 rounded-full"></div>
              </div>

              {/* Main Content */}
              <div className="relative z-10 text-center p-6">
                {/* Elegant Avatar */}
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center border border-white/20 shadow-xl">
                  <span className="text-2xl font-bold text-white">AM</span>
                </div>

                {/* Creative Role Display */}
                <div className="mb-6">
                  <div className="px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-400/20 rounded-xl backdrop-blur-sm">
                    <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-sm font-semibold">
                      ✨ Code Architect & Innovation Engineer
                    </span>
                  </div>
                </div>

                {/* Static Status */}
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-white/80 text-sm">Open to opportunities</span>
                </div>
              </div>

              {/* Static Floating Elements */}
              <div className="absolute top-8 right-8 w-1 h-1 bg-white/20 rounded-full"></div>
              <div className="absolute bottom-8 left-8 w-1.5 h-1.5 bg-white/30 rounded-full"></div>
              <div className="absolute top-1/3 right-8 text-pink-300/40 text-xs font-mono">( )</div>
            </div>
            <div>
              <p className="grid-headtext">Hi, I&apos;m Aditya Malhotra</p>
              <p className="grid-subtext">
                A passionate Full Stack Developer with expertise in modern web technologies, creating dynamic and
                responsive applications that solve real-world problems.
              </p>
            </div>
          </div>
        </div>{' '}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <div className="w-full sm:h-[276px] h-fit flex flex-col justify-center items-center bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20 rounded-3xl border border-blue-500/20 relative overflow-hidden group">
              {/* Static Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10"></div>

              {/* Tech Icons Grid - Static Version */}
              <div className="relative z-10 grid grid-cols-4 gap-3 p-4">
                {[
                  { name: 'React', icon: '⚛️', color: 'text-cyan-400' },
                  { name: 'JS', icon: '🟨', color: 'text-yellow-400' },
                  { name: 'Node', icon: '🟢', color: 'text-green-400' },
                  { name: 'TS', icon: '🔷', color: 'text-blue-400' },
                  { name: 'Next', icon: '▲', color: 'text-white' },
                  { name: 'Python', icon: '🐍', color: 'text-yellow-500' },
                  { name: 'AWS', icon: '☁️', color: 'text-orange-400' },
                  { name: 'Git', icon: '📦', color: 'text-red-400' },
                ].map((tech) => (
                  <div
                    key={tech.name}
                    className={`flex flex-col items-center justify-center w-12 h-12 rounded-lg bg-black-200/50 border border-white/10 hover:border-white/30 hover:bg-black-100/70 hover:scale-110 transition-all duration-300 cursor-pointer ${tech.color}`}>
                    <span className="text-lg">{tech.icon}</span>
                  </div>
                ))}
              </div>

              {/* Subtle Static Elements */}
              <div className="absolute top-4 left-4 w-2 h-2 bg-blue-400/60 rounded-full opacity-60"></div>
              <div className="absolute top-8 right-6 w-1 h-1 bg-purple-400/50 rounded-full opacity-50"></div>
              <div className="absolute bottom-6 left-8 w-1.5 h-1.5 bg-pink-400/70 rounded-full opacity-70"></div>
              <div className="absolute bottom-4 right-4 w-1 h-1 bg-cyan-300/40 rounded-full opacity-40"></div>
            </div>
            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I specialize in a variety of languages, frameworks, and tools that allow me to build robust and scalable
                applications
              </p>
            </div>
          </div>
        </div>{' '}
        <div className="col-span-1 xl:row-span-4">
          {' '}
          <div className="grid-container">
            {' '}
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center globe-container">
              {' '}
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                // Auto-rotation
                enablePointerInteraction={true}
                animateIn={true}
                waitForGlobeReady={true}
                // Blinking points for India location
                pointsData={[
                  {
                    lat: 28.6139,
                    lng: 77.209,
                    size: 1.0,
                    color: '#22c55e',
                    name: 'New Delhi, India',
                  },
                ]}
                pointAltitude={0.015}
                pointColor="color"
                pointRadius="size"
                // HTML elements for clean blinking effect
                htmlElementsData={[
                  {
                    lat: 28.6139,
                    lng: 77.209,
                    html: `
                      <div style="position: relative; display: flex; align-items: center; justify-content: center;">
                        <span style="
                          position: absolute;
                          display: inline-flex;
                          height: 12px;
                          width: 12px;
                          border-radius: 50%;
                          background-color: rgb(74 222 128);
                          opacity: 0.75;
                          animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
                        "></span>
                        <span style="
                          position: relative;
                          display: inline-flex;
                          height: 12px;
                          width: 12px;
                          border-radius: 50%;
                          background-color: rgb(34 197 94);
                          box-shadow: 0 0 8px rgb(34 197 94);
                        "></span>
                      </div>
                    `,
                    altitude: 0.02,
                  },
                ]}
                // Labels for text
                labelsData={[
                  {
                    lat: 28.6139,
                    lng: 77.209,
                    text: 'India 🇮🇳',
                    color: '#22c55e',
                    size: 1.0,
                  },
                ]}
                labelText="text"
                labelColor="color"
                labelSize="size"
                labelDotRadius={0.3}
                labelAltitude={0.025}
                // Auto-rotation settings (faster)
                ref={(globe) => {
                  if (globe) {
                    globe.controls().autoRotate = true;
                    globe.controls().autoRotateSpeed = 1.2; // Increased from 0.5 to 1.2
                    globe.controls().enableZoom = false;
                    globe.pointOfView({ lat: 20, lng: 80, altitude: 2.5 }, 2000);
                  }
                }}
              />{' '}
            </div>{' '}
            <div>
              {' '}
              <p className="grid-headtext">I&apos;m very flexible with time zone communications & locations</p>{' '}
              <p className="grid-subtext">I&apos;m based in India and open to remote work worldwide.</p>{' '}
              <a
                href="#contact"
                className="block w-full mt-10"
                onClick={(e) => {
                  e.preventDefault();
                  const target = document.querySelector('#contact');
                  if (target) {
                    target.scrollIntoView({
                      behavior: 'smooth',
                      block: 'start',
                    });
                  }
                }}>
                <Button name="Contact Me" isBeam containerClass="w-full" />
              </a>{' '}
            </div>{' '}
          </div>{' '}
        </div>{' '}
        <div className="xl:col-span-2 xl:row-span-3">
          {' '}
          <div className="grid-container">
            {' '}
            <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />{' '}
            <div>
              {' '}
              <p className="grid-headtext">My Passion for Coding</p>{' '}
              <p className="grid-subtext">
                {' '}
                I love solving problems and building things through code. Programming isn&apos;t just my
                profession—it&apos;s my passion. I enjoy exploring new technologies, and enhancing my skills.{' '}
              </p>{' '}
            </div>{' '}
          </div>{' '}
        </div>{' '}
        <div className="xl:col-span-1 xl:row-span-2">
          {' '}
          <div className="grid-container">
            {' '}
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />{' '}
            <div className="space-y-2">
              {' '}
              <p className="grid-subtext text-center">Contact me</p>{' '}
              <div className="copy-container" onClick={handleCopy}>
                {' '}
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />{' '}
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">reach.adml@gmail.com</p>{' '}
              </div>{' '}
            </div>{' '}
          </div>{' '}
        </div>{' '}
      </div>{' '}
    </section>
  );
};
export default About;
