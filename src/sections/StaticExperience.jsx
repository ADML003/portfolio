import { useRef, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

// Hook to detect screen size
const useResponsiveCamera = () => {
  const [cameraSettings, setCameraSettings] = useState({
    position: [0, 0, 5],
    fov: 50,
  });

  useEffect(() => {
    const updateCameraSettings = () => {
      const isMobile = window.innerWidth < 768;
      const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;

      if (isMobile) {
        setCameraSettings({
          position: [0, 0, 7],
          fov: 65,
        });
      } else if (isTablet) {
        setCameraSettings({
          position: [0, 0, 6],
          fov: 55,
        });
      } else {
        setCameraSettings({
          position: [0, 0, 5],
          fov: 50,
        });
      }
    };

    updateCameraSettings();
    window.addEventListener('resize', updateCameraSettings);
    return () => window.removeEventListener('resize', updateCameraSettings);
  }, []);

  return cameraSettings;
};

// Static 3D Scene Component (no animations)
const StaticDeveloperScene = () => {
  const groupRef = useRef();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const mobileScale = isMobile ? 0.9 : 1;

  // Static laptop without animations
  const Laptop = () => (
    <group position={[0, -0.3, 0]} scale={mobileScale}>
      {/* Laptop base */}
      <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <boxGeometry args={[2.5, 1.8, 0.1]} />
        <meshStandardMaterial color="#2a2a2a" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Laptop screen */}
      <mesh position={[0, 0.9, -0.9]} rotation={[-Math.PI / 8, 0, 0]}>
        <boxGeometry args={[2.3, 1.5, 0.05]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.9} roughness={0.1} />
      </mesh>

      {/* Screen content */}
      <mesh position={[0, 0.92, -0.87]} rotation={[-Math.PI / 8, 0, 0]}>
        <boxGeometry args={[2.1, 1.3, 0.01]} />
        <meshStandardMaterial color="#0a0a0a" emissive="#1e3a8a" emissiveIntensity={0.4} />
      </mesh>

      {/* Coffee cup */}
      <group position={[1.8, 0.2, 0.5]}>
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.15, 0.12, 0.3]} />
          <meshStandardMaterial color="#8B4513" metalness={0.3} roughness={0.7} />
        </mesh>
      </group>

      {/* Mouse */}
      <mesh position={[1.2, 0.05, 0.8]} rotation={[0, 0.3, 0]}>
        <boxGeometry args={[0.25, 0.08, 0.4]} />
        <meshStandardMaterial color="#333333" metalness={0.6} roughness={0.4} />
      </mesh>
    </group>
  );

  // Static tech orbs
  const TechOrb = ({ position, color, scale = [1, 1, 1] }) => (
    <mesh position={position} scale={scale}>
      <sphereGeometry args={[0.12, 20, 20]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.3}
        metalness={0.8}
        roughness={0.2}
        transparent
        opacity={0.9}
      />
    </mesh>
  );

  return (
    <group ref={groupRef} scale={mobileScale}>
      {/* Static lighting */}
      <ambientLight intensity={0.6} />
      <pointLight position={[5, 5, 5]} intensity={1} color="#60a5fa" />
      <pointLight position={[-5, 3, -5]} intensity={0.8} color="#8b5cf6" />
      <directionalLight position={[2, 5, 2]} intensity={0.5} color="#ffffff" />

      {/* Main laptop setup */}
      <Laptop />

      {/* Static tech orbs */}
      <TechOrb position={[-2.5, 1, 1]} color="#61dafb" scale={[0.7, 0.7, 0.7]} />
      <TechOrb position={[2.5, 0.5, 0.5]} color="#f97316" scale={[0.6, 0.6, 0.6]} />
      <TechOrb position={[-1.8, -0.5, 2]} color="#10b981" scale={[0.5, 0.5, 0.5]} />
    </group>
  );
};

const WorkExperience = () => {
  const cameraSettings = useResponsiveCamera();

  const experiences = [
    {
      id: 1,
      name: 'Framer',
      pos: 'Lead Frontend Developer',
      duration: '2022 - Present',
      title:
        'Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.',
      icon: '/assets/framer.svg',
      animation: 'victory',
    },
    {
      id: 2,
      name: 'Figma',
      pos: 'Web Developer',
      duration: '2020 - 2022',
      title:
        'Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.',
      icon: '/assets/figma.svg',
      animation: 'clapping',
    },
    {
      id: 3,
      name: 'Notion',
      pos: 'Junior Web Developer',
      duration: '2019 - 2020',
      title:
        'Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.',
      icon: '/assets/notion.svg',
      animation: 'salute',
    },
  ];

  return (
    <section className="c-space my-20" id="work">
      <div className="w-full text-white-600">
        <p className="head-text">My Work Experience</p>

        <div className="work-container">
          <div className="work-canvas">
            <div className="h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-black-300/50 to-black-500/30 backdrop-blur-lg">
              <Canvas camera={{ position: cameraSettings.position, fov: cameraSettings.fov }}>
                <StaticDeveloperScene />
                <OrbitControls
                  enableZoom={false}
                  enablePan={false}
                  maxPolarAngle={Math.PI / 2}
                  minPolarAngle={Math.PI / 2}
                />
              </Canvas>
            </div>
          </div>

          <div className="work-content">
            <div className="sm:py-10 py-5 sm:px-5 px-2.5">
              {experiences.map((item) => (
                <div key={item.id} className="work-content_container group">
                  <div className="flex flex-col h-full justify-start items-center py-2">
                    <div className="work-content_logo">
                      <img className="w-full h-full" src={item.icon} alt="" />
                    </div>

                    <div className="work-content_bar" />
                  </div>

                  <div className="sm:p-5 px-2.5 py-5">
                    <p className="font-bold text-white-800">{item.name}</p>
                    <p className="text-sm mb-5">
                      {item.pos} -- <span>{item.duration}</span>
                    </p>
                    <p className="group-hover:text-white transition-all ease-in-out duration-500">{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
