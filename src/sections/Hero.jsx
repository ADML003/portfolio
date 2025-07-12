import { PerspectiveCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense, useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { calculateSizes } from '../constants/index.js';

import Target from '../components/Target.jsx';
import ReactLogo from '../components/ReactLogo.jsx';
import Cube from '../components/Cube.jsx';
import HeroCamera from '../components/HeroCamera.jsx';
import Button from '../components/Button.jsx';
import CanvasLoader from '../components/Loading.jsx';
import InteractiveDeveloper from '../components/InteractiveDeveloper.jsx';

const Hero = () => {
  // Use media queries to determine screen size
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  // Animation cycling for the developer
  const [currentAnimation, setCurrentAnimation] = useState('idle');

  useEffect(() => {
    const animations = ['idle', 'victory', 'clapping', 'salute'];
    const interval = setInterval(() => {
      setCurrentAnimation((prev) => {
        const currentIndex = animations.indexOf(prev);
        const nextIndex = (currentIndex + 1) % animations.length;
        const newAnimation = animations[nextIndex];
        return newAnimation;
      });
    }, 5000); // Change animation every 5 seconds

    return () => clearInterval(interval);
  }, []);

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
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            {/* To control the camera */}
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />

            <HeroCamera isMobile={isMobile}>
              <Target position={sizes.targetPosition} />
              <ReactLogo position={sizes.reactLogoPosition} />
              <Cube position={sizes.cubePosition} />
            </HeroCamera>

            {/* Developer character in the center */}
            <InteractiveDeveloper position={[0, -3, 0]} scale={3.2} animationName={currentAnimation} />

            <ambientLight intensity={1.5} />
            <directionalLight position={[10, 10, 10]} intensity={1.2} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1.5} />

            {/* Additional lighting specifically for the developer character */}
            <directionalLight position={[-5, 5, 5]} intensity={1} />
            <pointLight position={[0, 2, 3]} intensity={1.2} color="#ffffff" />
            <pointLight position={[3, 0, 2]} intensity={0.8} color="#add8e6" />
            <pointLight position={[-3, 1, 2]} intensity={0.6} color="#ffffff" />
          </Suspense>
        </Canvas>
      </div>

      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <a href="#about" className="w-fit">
          <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
