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
          position: [0, 0, 7], // Move camera back for mobile
          fov: 65, // Wider field of view for mobile
        });
      } else if (isTablet) {
        setCameraSettings({
          position: [0, 0, 6], // Slightly back for tablet
          fov: 55, // Moderate field of view for tablet
        });
      } else {
        setCameraSettings({
          position: [0, 0, 5], // Original desktop position
          fov: 50, // Original desktop field of view
        });
      }
    };

    updateCameraSettings();
    window.addEventListener('resize', updateCameraSettings);
    return () => window.removeEventListener('resize', updateCameraSettings);
  }, []);

  return cameraSettings;
};

// 3D Developer Scene Component
const DeveloperScene = () => {
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

  // No animations - static scene

  // Scale factor for mobile devices
  const mobileScale = isMobile ? 0.9 : 1;

  // Static laptop/computer setup without animations
  const Laptop = () => (
    <group position={[0, -0.3, 0]} scale={mobileScale}>
        {/* Laptop base with gradient effect */}
        <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <boxGeometry args={[2.5, 1.8, 0.1]} />
          <meshStandardMaterial color="#2a2a2a" metalness={0.8} roughness={0.2} />
        </mesh>

        {/* Laptop screen with bezels */}
        <mesh position={[0, 0.9, -0.9]} rotation={[-Math.PI / 8, 0, 0]}>
          <boxGeometry args={[2.3, 1.5, 0.05]} />
          <meshStandardMaterial color="#1a1a1a" metalness={0.9} roughness={0.1} />
        </mesh>

        {/* Animated screen content */}
        <mesh position={[0, 0.92, -0.87]} rotation={[-Math.PI / 8, 0, 0]}>
          <boxGeometry args={[2.1, 1.3, 0.01]} />
          <meshStandardMaterial color="#0a0a0a" emissive="#1e3a8a" emissiveIntensity={0.4} />
        </mesh>

        {/* Animated typing cursor */}
        <Float speed={3} floatIntensity={0.1}>
          <mesh position={[0.3, 0.85, -0.86]} rotation={[-Math.PI / 8, 0, 0]}>
            <boxGeometry args={[0.02, 0.08, 0.01]} />
            <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={1} />
          </mesh>
        </Float>

        {/* Dynamic code lines with different colors */}
        <Float speed={2} floatIntensity={0.02}>
          <mesh position={[-0.7, 1.1, -0.86]} rotation={[-Math.PI / 8, 0, 0]}>
            <boxGeometry args={[0.8, 0.04, 0.01]} />
            <meshStandardMaterial color="#60a5fa" emissive="#60a5fa" emissiveIntensity={0.7} />
          </mesh>
        </Float>

        <Float speed={1.5} floatIntensity={0.03}>
          <mesh position={[-0.5, 0.95, -0.86]} rotation={[-Math.PI / 8, 0, 0]}>
            <boxGeometry args={[1.2, 0.04, 0.01]} />
            <meshStandardMaterial color="#34d399" emissive="#34d399" emissiveIntensity={0.7} />
          </mesh>
        </Float>

        <Float speed={2.5} floatIntensity={0.02}>
          <mesh position={[-0.3, 0.8, -0.86]} rotation={[-Math.PI / 8, 0, 0]}>
            <boxGeometry args={[0.6, 0.04, 0.01]} />
            <meshStandardMaterial color="#f59e0b" emissive="#f59e0b" emissiveIntensity={0.7} />
          </mesh>
        </Float>

        {/* Coffee cup next to laptop */}
        <Float speed={0.8} floatIntensity={0.1}>
          <group position={[1.8, 0.2, 0.5]}>
            <mesh position={[0, 0, 0]}>
              <cylinderGeometry args={[0.15, 0.12, 0.3]} />
              <meshStandardMaterial color="#8B4513" metalness={0.3} roughness={0.7} />
            </mesh>
            <mesh position={[0, 0.18, 0]}>
              <cylinderGeometry args={[0.14, 0.14, 0.02]} />
              <meshStandardMaterial color="#654321" emissive="#2D1810" emissiveIntensity={0.3} />
            </mesh>
          </group>
        </Float>

        {/* Wireless mouse */}
        <Float speed={1.2} floatIntensity={0.08}>
          <mesh position={[1.2, 0.05, 0.8]} rotation={[0, 0.3, 0]}>
            <boxGeometry args={[0.25, 0.08, 0.4]} />
            <meshStandardMaterial color="#333333" metalness={0.6} roughness={0.4} />
          </mesh>
        </Float>
      </group>
    </Float>
  );

  // Enhanced tech orb with pulsing effect
  const TechOrb = ({ position, color, scale = [1, 1, 1], speed = 1, pulseIntensity = 0.5 }) => (
    <Float speed={speed} rotationIntensity={0.4} floatIntensity={0.6}>
      <mesh position={position} scale={scale}>
        <sphereGeometry args={[0.12, 20, 20]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={pulseIntensity + Math.sin(Date.now() * 0.005) * 0.2}
          metalness={0.4}
          roughness={0.3}
          transparent
          opacity={0.9}
        />
      </mesh>
    </Float>
  );

  // Enhanced tech icon with floating animation
  const TechIcon = ({ position, color, scale = [0.4, 0.4, 0.4], speed = 1 }) => (
    <Float speed={speed} rotationIntensity={0.3} floatIntensity={0.4}>
      <mesh position={position} scale={scale}>
        <planeGeometry args={[1, 1]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.3} transparent opacity={0.9} />
        {/* Add a glowing border effect */}
        <mesh position={[0, 0, -0.01]} scale={[1.2, 1.2, 1]}>
          <planeGeometry args={[1, 1]} />
          <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.8} transparent opacity={0.3} />
        </mesh>
      </mesh>
    </Float>
  );

  // Abstract geometric shapes with rotation
  const GeometricShape = ({ position, rotation, color, shape = 'octahedron' }) => (
    <Float speed={0.5} rotationIntensity={0.2} floatIntensity={0.1}>
      <mesh position={position} rotation={rotation}>
        {shape === 'octahedron' && <octahedronGeometry args={[0.3]} />}
        {shape === 'dodecahedron' && <dodecahedronGeometry args={[0.25]} />}
        {shape === 'icosahedron' && <icosahedronGeometry args={[0.3]} />}
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.3}
          metalness={0.7}
          roughness={0.3}
          transparent
          opacity={0.8}
        />
      </mesh>
    </Float>
  );

  // Enhanced data streams with animation
  const DataStream = ({ position, rotation, color = '#60a5fa' }) => (
    <Float speed={2.5} rotationIntensity={0.3} floatIntensity={0.4}>
      <group position={position} rotation={rotation}>
        <mesh>
          <cylinderGeometry args={[0.02, 0.02, 1.8]} />
          <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.8} transparent opacity={0.8} />
        </mesh>
        {/* Data packets moving along the stream */}
        <Float speed={4} floatIntensity={0.5}>
          <mesh position={[0, 0.5, 0]}>
            <sphereGeometry args={[0.05]} />
            <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={1} />
          </mesh>
        </Float>
      </group>
    </Float>
  );

  return (
    <group ref={groupRef} scale={mobileScale}>
      {/* Optimized lighting setup */}
      <ambientLight intensity={0.6} />
      <pointLight position={[5, 5, 5]} intensity={1} color="#60a5fa" />
      <pointLight position={[-5, 3, -5]} intensity={0.8} color="#8b5cf6" />
      {/* Essential rim lighting */}
      <directionalLight position={[2, 5, 2]} intensity={0.5} color="#ffffff" />
      {/* Main laptop setup */}
      <Laptop />
      {/* Essential tech orbs - reduced for performance */}
      <TechOrb position={[-2.5, 1, 1]} color="#61dafb" scale={[0.7, 0.7, 0.7]} speed={0.8} pulseIntensity={0.4} />
      <TechOrb position={[2.5, 0.5, 0.5]} color="#f97316" scale={[0.6, 0.6, 0.6]} speed={0.6} pulseIntensity={0.3} />
      <TechOrb position={[-1.8, -0.5, 2]} color="#10b981" scale={[0.5, 0.5, 0.5]} speed={0.7} pulseIntensity={0.3} />
      {/* Essential tech icons only */}
      <TechIcon position={[-3, 2, 1]} color="#f7df1e" speed={0.6} /> {/* JavaScript */}
      <TechIcon position={[3, 1.5, -1]} color="#61dafb" speed={0.8} /> {/* React */}
      <TechIcon position={[-2, -1, 2]} color="#000000" speed={0.7} /> {/* Next.js */}
      <TechIcon position={[2.5, 0, 2]} color="#3178c6" speed={0.6} /> {/* TypeScript */}
      {/* Simplified geometric shapes */}
      <GeometricShape position={[-3, 0, -1]} rotation={[0.5, 0.5, 0]} color="#60a5fa" shape="octahedron" />
      <GeometricShape position={[3, 1, 1]} rotation={[1, 0.3, 0.7]} color="#34d399" shape="dodecahedron" />
      {/* Reduced data streams */}
      <DataStream position={[-1.5, 1, 0]} rotation={[0, 0, Math.PI / 6]} color="#60a5fa" />
      <DataStream position={[1.5, 0.5, 0.5]} rotation={[0, 0, -Math.PI / 4]} color="#34d399" />
      {/* Minimal background particles - reduced from 25 to 8 */}
      <group>
        {Array.from({ length: 8 }).map((_, i) => (
          <TechOrb
            key={i}
            position={[(Math.random() - 0.5) * 8, (Math.random() - 0.5) * 6, (Math.random() - 0.5) * 6 - 2]}
            color={['#60a5fa', '#34d399', '#f59e0b', '#8b5cf6'][Math.floor(Math.random() * 4)]}
            scale={[0.12, 0.12, 0.12]}
            speed={0.3 + Math.random() * 0.3}
            pulseIntensity={0.2}
          />
        ))}
      </group>
    </group>
  );
};

const WorkExperience = () => {
  const cameraSettings = useResponsiveCamera();

  const experiences = [
    {
      id: 1,
      company: 'BGS (Beas Green Solutions)',
      companyDetail: 'Manufacturing Company - beasgreen.com',
      position: 'Web Development Intern',
      location: 'Remote',
      period: 'Jun 2025 – Jul 2025',
      duration: '2 months',
      type: 'Internship',
      achievements: [
        'Built and deployed beasgreen.com - a comprehensive manufacturing company website showcasing bricks, concrete furniture, and blocks production.',
        'Developed Pix Pro, an advanced image transformation tool to enhance product photography for marketing materials and hoardings.',
        'Integrated Google Maps API for location services and WhatsApp Business API for seamless customer communication.',
        'Optimized website performance and user experience resulting in improved customer engagement and lead generation.',
      ],
      technologies: [
        'WordPress',
        'Google Maps API',
        'WhatsApp Business API',
        'React.js',
        'Next.js',
        'Node.js',
        'MongoDB',
        'Cloudinary',
        'Image Processing',
      ],
      color: '#10b981',
    },
    {
      id: 2,
      company: 'AWRA – An Apparel Brand',
      companyDetail: '(owned by DIGATO OPC LIMITED)',
      position: 'Web Development Intern',
      location: 'Gurugram, Haryana',
      period: 'Jun 2024 – Aug 2024',
      duration: '3 months',
      type: 'Internship',
      achievements: [
        "Developed and deployed AWRA's official website using WordPress & custom plugins, enhancing user experience and functionality by 30%.",
        'Integrated secure payment gateways and optimized the site for SEO, enhancing brand visibility and driving user engagement.',
      ],
      technologies: ['WordPress', 'Custom Plugins', 'Next.js', 'MongoDB', 'Payment Gateways', 'Web Development'],
      color: '#3b82f6',
    },
  ];

  return (
    <section className="c-space my-20" id="work">
      <div className="w-full text-white-600">
        <div className="text-center mb-16">
          <h2 className="head-text">💼 Professional Experience</h2>
          <p className="text-gray_gradient text-lg mt-4 max-w-2xl mx-auto">
            My journey in web development and the impact I&apos;ve made in real-world projects
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-black-300/50 to-black-500/30 backdrop-blur-lg">
              <Canvas camera={{ position: cameraSettings.position, fov: cameraSettings.fov }}>
                <DeveloperScene />
                <OrbitControls
                  enableZoom={false}
                  enablePan={false}
                  autoRotate
                  autoRotateSpeed={1}
                  maxPolarAngle={Math.PI / 2}
                  minPolarAngle={Math.PI / 2}
                />
              </Canvas>
            </div>
          </div>

          <div className="space-y-6 lg:space-y-8 order-1 lg:order-2">
            {experiences.map((exp) => (
              <div key={exp.id} className="group relative">
                <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-purple-500 to-transparent"></div>
                <div className="absolute left-0 top-6 w-3 h-3 bg-blue-500 rounded-full transform -translate-x-1/2 group-hover:scale-125 transition-transform duration-300"></div>

                <div className="ml-8 p-6 rounded-xl bg-gradient-to-br from-black-300/50 to-black-500/30 backdrop-blur-lg border border-white/10 hover:border-blue-500/30 transition-all duration-300 group-hover:transform group-hover:scale-[1.02]">
                  <div className="flex flex-col md:flex-row justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{exp.position}</h3>
                      <h4 className="text-lg text-blue-400 font-semibold">{exp.company}</h4>
                      {exp.companyDetail && <p className="text-sm text-gray-400 mt-1">{exp.companyDetail}</p>}
                      <p className="text-sm text-gray-500 mt-1">
                        📍 {exp.location} • ⏰ {exp.duration}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium">
                        {exp.type}
                      </span>
                      <p className="text-gray-400 text-sm mt-1">{exp.period}</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <span>🎯</span>
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-300 text-sm">
                          <span className="text-green-400 mt-1 flex-shrink-0">✓</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <span>🛠️</span>
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gradient-to-r from-gray-800 to-gray-700 text-gray-200 rounded-lg text-xs font-medium hover:from-blue-800 hover:to-purple-800 transition-all duration-300">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className="group relative">
              <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 to-transparent opacity-50"></div>
              <div className="absolute left-0 top-6 w-3 h-3 bg-blue-500 rounded-full transform -translate-x-1/2"></div>

              <div className="ml-8 p-6 rounded-xl bg-gradient-to-br from-blue-900/20 to-purple-900/20 backdrop-blur-lg border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300">
                <h3 className="text-lg font-bold text-white mb-2">� Completed Journey</h3>
                <p className="text-gray-300 text-sm mb-3">
                  Successfully completed innovative solutions at BGS while expanding expertise in modern web technologies
                  and image processing.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">Internship</span>
                  <span className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs">Growth Achieved</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
