import { PerspectiveCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { useMediaQuery } from 'react-responsive';
import { calculateSizes } from '../constants/index.js';

import Target from '../components/Target.jsx';
import ReactLogo from '../components/ReactLogo.jsx';
import Cube from '../components/Cube.jsx';
import HeroCamera from '../components/HeroCamera.jsx';
import Button from '../components/Button.jsx';
import CanvasLoader from '../components/Loading.jsx';
import StaticDeveloper from '../components/StaticDeveloper.jsx';

const Hero = () => {
  // Use media queries to determine screen size
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  // No animations - static developer

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
          Hi, I am Aditya <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">Developer and Problem Solver</p>
      </div>

      <div className="w-full h-full absolute inset-0">
        <Canvas
          className="w-full h-full"
          dpr={[1, 2]} // Restored original DPR
          performance={{ min: 0.5 }} // Restored original performance threshold
          frameloop="demand" // Restored original frameloop
        >
          <Suspense fallback={<CanvasLoader />}>
            {/* To control the camera */}
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />

            <HeroCamera isMobile={isMobile}>
              <Target position={sizes.targetPosition} />
              <ReactLogo position={sizes.reactLogoPosition} />
              <Cube position={sizes.cubePosition} />
            </HeroCamera>

            {/* Static developer character in the center */}
            <StaticDeveloper position={[0, -3, 0]} scale={3.2} />

            {/* Optimized lighting with reduced intensity */}
            <ambientLight intensity={1.2} />
            <directionalLight position={[10, 10, 10]} intensity={1} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1.2} />

            {/* Reduced additional lighting for better performance */}
            <directionalLight position={[-5, 5, 5]} intensity={0.8} />
            <pointLight position={[0, 2, 3]} intensity={1} color="#ffffff" />
            <pointLight position={[3, 0, 2]} intensity={0.6} color="#add8e6" />
          </Suspense>
        </Canvas>
      </div>

      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <a
          href="#contact"
          className="w-fit"
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
          <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
