import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';

// 3D Developer Scene Component
const DeveloperScene = () => {
  const groupRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.05;
    }
  });

  // Enhanced laptop/computer setup with animated elements
  const Laptop = () => (
    <Float speed={1} rotationIntensity={0.1} floatIntensity={0.05}>
      <group position={[0, -0.3, 0]}>
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

  // Enhanced tech orbs with pulsing effect
  const TechOrb = ({ position, color, scale, speed = 1, pulseIntensity = 0.3 }) => (
    <Float speed={speed} rotationIntensity={0.3} floatIntensity={0.2}>
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

  // Tech Icon Component - renders floating tech logos
  const TechIcon = ({ position, color, scale = [0.4, 0.4, 0.4], speed = 1 }) => (
    <Float speed={speed} rotationIntensity={0.4} floatIntensity={0.3}>
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
    <group ref={groupRef}>
      {/* Enhanced lighting with color cycling */}
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 5, 5]} intensity={1.2} color="#60a5fa" />
      <pointLight position={[-5, 3, -5]} intensity={1} color="#8b5cf6" />
      <pointLight position={[0, 8, 0]} intensity={0.8} color="#34d399" />
      <pointLight position={[3, -2, 3]} intensity={0.6} color="#f59e0b" />
      {/* Subtle rim lighting */}
      <directionalLight position={[2, 5, 2]} intensity={0.7} color="#ffffff" />
      {/* Main laptop setup */}
      <Laptop />
      {/* Enhanced tech orbs with varied sizes and animations */}
      <TechOrb position={[-2.5, 1, 1]} color="#61dafb" scale={[1, 1, 1]} speed={1.2} pulseIntensity={0.5} />
      <TechOrb position={[2.5, 0.5, 0.5]} color="#f97316" scale={[0.7, 0.7, 0.7]} speed={0.8} pulseIntensity={0.4} />
      <TechOrb position={[-1.8, -0.5, 2]} color="#10b981" scale={[0.8, 0.8, 0.8]} speed={1.5} pulseIntensity={0.6} />
      <TechOrb position={[2, 1.5, -1]} color="#8b5cf6" scale={[0.6, 0.6, 0.6]} speed={1.1} pulseIntensity={0.3} />
      <TechOrb position={[0, 2.5, 1.5]} color="#ef4444" scale={[0.5, 0.5, 0.5]} speed={0.9} pulseIntensity={0.4} />
      {/* Floating tech icons instead of holographic rings */}
      <TechIcon position={[-3, 2, 1]} color="#f7df1e" speed={0.8} /> {/* JavaScript */}
      <TechIcon position={[3, 1.5, -1]} color="#61dafb" speed={1.2} /> {/* React */}
      <TechIcon position={[-2, -1, 2]} color="#000000" speed={0.9} /> {/* Next.js */}
      <TechIcon position={[2.5, 0, 2]} color="#00add8" speed={1.1} /> {/* Go */}
      <TechIcon position={[-1.5, 3, 0]} color="#3178c6" speed={0.7} /> {/* TypeScript */}
      <TechIcon position={[1, -2, 1.5]} color="#339933" speed={1.3} /> {/* Node.js */}
      <TechIcon position={[-3.5, 0.5, -0.5]} color="#3776ab" speed={0.6} /> {/* Python */}
      <TechIcon position={[3.5, -0.5, 0.5]} color="#06b6d4" scale={[0.3, 0.3, 0.3]} speed={1.4} /> {/* Tailwind */}
      <TechIcon position={[0, 3.5, -1]} color="#47a248" scale={[0.35, 0.35, 0.35]} speed={0.8} /> {/* MongoDB */}
      <TechIcon position={[-2.5, -2, -1]} color="#ff6c37" scale={[0.3, 0.3, 0.3]} speed={1.2} /> {/* Postman */}
      {/* Enhanced geometric shapes */}
      <GeometricShape position={[-3, 0, -1]} rotation={[0.5, 0.5, 0]} color="#60a5fa" shape="octahedron" />
      <GeometricShape position={[3, 1, 1]} rotation={[1, 0.3, 0.7]} color="#34d399" shape="dodecahedron" />
      <GeometricShape position={[1, -1, -2]} rotation={[0.2, 1.2, 0.3]} color="#f59e0b" shape="icosahedron" />
      {/* Enhanced data streams with different colors */}
      <DataStream position={[-1.5, 1, 0]} rotation={[0, 0, Math.PI / 6]} color="#60a5fa" />
      <DataStream position={[1.5, 0.5, 0.5]} rotation={[0, 0, -Math.PI / 4]} color="#34d399" />
      <DataStream position={[0, 1.8, -0.5]} rotation={[Math.PI / 3, 0, 0]} color="#8b5cf6" />
      <DataStream position={[-0.8, -0.5, 1]} rotation={[0, Math.PI / 4, Math.PI / 3]} color="#f59e0b" />
      {/* Background particle system with varied colors and sizes */}
      <group>
        {Array.from({ length: 25 }).map((_, i) => (
          <TechOrb
            key={i}
            position={[(Math.random() - 0.5) * 10, (Math.random() - 0.5) * 8, (Math.random() - 0.5) * 8 - 4]}
            color={
              ['#60a5fa', '#34d399', '#f59e0b', '#8b5cf6', '#ef4444', '#06b6d4', '#84cc16'][
                Math.floor(Math.random() * 7)
              ]
            }
            scale={[0.15 + Math.random() * 0.15, 0.15 + Math.random() * 0.15, 0.15 + Math.random() * 0.15]}
            speed={0.2 + Math.random() * 0.6}
            pulseIntensity={0.2 + Math.random() * 0.3}
          />
        ))}
      </group>
    </group>
  );
};

// Floating Astronaut Coder Component
const FloatingAstronaut = ({ isVisible }) => {
  const astronautRef = useRef();

  useFrame((state) => {
    if (astronautRef.current) {
      // Gentle floating animation
      astronautRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.3;
      astronautRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  const AstronautBody = () => (
    <group ref={astronautRef}>
      {/* Astronaut Helmet */}
      <Float speed={0.8} rotationIntensity={0.2} floatIntensity={0.1}>
        <mesh position={[0, 1.5, 0]}>
          <sphereGeometry args={[0.4, 20, 20]} />
          <meshStandardMaterial color="#f0f0f0" metalness={0.8} roughness={0.2} transparent opacity={0.9} />
        </mesh>

        {/* Helmet visor */}
        <mesh position={[0, 1.5, 0.35]}>
          <sphereGeometry args={[0.38, 20, 20]} />
          <meshStandardMaterial color="#1a1a2e" metalness={0.9} roughness={0.1} transparent opacity={0.8} />
        </mesh>

        {/* Reflection on visor */}
        <mesh position={[0.1, 1.6, 0.36]}>
          <sphereGeometry args={[0.08, 8, 8]} />
          <meshStandardMaterial color="#60a5fa" emissive="#60a5fa" emissiveIntensity={0.8} transparent opacity={0.6} />
        </mesh>
      </Float>

      {/* Astronaut Body */}
      <Float speed={0.6} rotationIntensity={0.1} floatIntensity={0.08}>
        <mesh position={[0, 0.5, 0]}>
          <cylinderGeometry args={[0.35, 0.4, 1.2]} />
          <meshStandardMaterial color="#e0e0e0" metalness={0.3} roughness={0.7} />
        </mesh>

        {/* Chest control panel */}
        <mesh position={[0, 0.8, 0.36]}>
          <boxGeometry args={[0.25, 0.15, 0.05]} />
          <meshStandardMaterial color="#2a2a2a" emissive="#00ff00" emissiveIntensity={0.3} />
        </mesh>

        {/* Arms */}
        <mesh position={[-0.5, 0.3, 0]} rotation={[0, 0, Math.PI / 6]}>
          <cylinderGeometry args={[0.12, 0.15, 0.8]} />
          <meshStandardMaterial color="#e0e0e0" metalness={0.3} roughness={0.7} />
        </mesh>
        <mesh position={[0.5, 0.3, 0]} rotation={[0, 0, -Math.PI / 6]}>
          <cylinderGeometry args={[0.12, 0.15, 0.8]} />
          <meshStandardMaterial color="#e0e0e0" metalness={0.3} roughness={0.7} />
        </mesh>

        {/* Legs */}
        <mesh position={[-0.15, -0.4, 0]}>
          <cylinderGeometry args={[0.13, 0.16, 0.9]} />
          <meshStandardMaterial color="#e0e0e0" metalness={0.3} roughness={0.7} />
        </mesh>
        <mesh position={[0.15, -0.4, 0]}>
          <cylinderGeometry args={[0.13, 0.16, 0.9]} />
          <meshStandardMaterial color="#e0e0e0" metalness={0.3} roughness={0.7} />
        </mesh>
      </Float>

      {/* Floating laptop next to astronaut */}
      <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.2}>
        <group position={[1.2, 0.8, 0]} rotation={[0, -Math.PI / 4, 0]}>
          <mesh>
            <boxGeometry args={[0.8, 0.5, 0.05]} />
            <meshStandardMaterial color="#2a2a2a" metalness={0.7} roughness={0.3} />
          </mesh>
          <mesh position={[0, 0, 0.03]}>
            <boxGeometry args={[0.75, 0.45, 0.01]} />
            <meshStandardMaterial color="#0a0a0a" emissive="#1e3a8a" emissiveIntensity={0.5} />
          </mesh>
          {/* Code lines on laptop screen */}
          <mesh position={[-0.2, 0.1, 0.04]}>
            <boxGeometry args={[0.3, 0.02, 0.01]} />
            <meshStandardMaterial color="#60a5fa" emissive="#60a5fa" emissiveIntensity={0.8} />
          </mesh>
          <mesh position={[-0.1, 0.05, 0.04]}>
            <boxGeometry args={[0.4, 0.02, 0.01]} />
            <meshStandardMaterial color="#34d399" emissive="#34d399" emissiveIntensity={0.8} />
          </mesh>
        </group>
      </Float>

      {/* Floating code symbols around astronaut */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.4}>
        <group position={[-1.5, 1.2, 0.5]}>
          <mesh>
            <boxGeometry args={[0.15, 0.15, 0.02]} />
            <meshStandardMaterial
              color="#f59e0b"
              emissive="#f59e0b"
              emissiveIntensity={0.8}
              transparent
              opacity={0.9}
            />
          </mesh>
        </group>
      </Float>

      <Float speed={1.8} rotationIntensity={0.4} floatIntensity={0.3}>
        <group position={[1.8, 1.8, -0.3]}>
          <mesh>
            <octahedronGeometry args={[0.12]} />
            <meshStandardMaterial
              color="#8b5cf6"
              emissive="#8b5cf6"
              emissiveIntensity={0.6}
              transparent
              opacity={0.8}
            />
          </mesh>
        </group>
      </Float>

      <Float speed={2.2} rotationIntensity={0.6} floatIntensity={0.5}>
        <group position={[-0.8, 2.2, 0.8]}>
          <mesh>
            <sphereGeometry args={[0.08, 8, 8]} />
            <meshStandardMaterial color="#ef4444" emissive="#ef4444" emissiveIntensity={1} transparent opacity={0.7} />
          </mesh>
        </group>
      </Float>
    </group>
  );

  return (
    <div
      className={`fixed top-1/2 right-8 transform -translate-y-1/2 w-48 h-48 z-20 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
      }`}
      style={{ pointerEvents: 'none' }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[3, 3, 3]} intensity={1} color="#60a5fa" />
        <pointLight position={[-3, 2, -2]} intensity={0.8} color="#8b5cf6" />
        <directionalLight position={[0, 5, 2]} intensity={0.7} color="#ffffff" />

        <AstronautBody />
      </Canvas>
    </div>
  );
};

const WorkExperience = () => {
  const [showAstronaut, setShowAstronaut] = useState(false);
  const sectionRef = useRef();

  useEffect(() => {
    const currentSection = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowAstronaut(true);
        } else {
          setShowAstronaut(false);
        }
      },
      { threshold: 0.3 },
    );

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);
  const experiences = [
    {
      id: 1,
      company: 'BGS (Beas Green Solutions)',
      companyDetail: 'Manufacturing Company - beasgreen.com',
      position: 'Web Development Intern',
      location: 'Remote',
      period: 'Jun 2025 – Present',
      duration: 'Currently doing',
      type: 'Current Internship',
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
    <>
      <FloatingAstronaut isVisible={showAstronaut} />
      <section className="c-space my-20" id="work" ref={sectionRef}>
        <div className="w-full text-white-600">
          <div className="text-center mb-16">
            <h2 className="head-text">💼 Professional Experience</h2>
            <p className="text-gray_gradient text-lg mt-4 max-w-2xl mx-auto">
              My journey in web development and the impact I&apos;ve made in real-world projects
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="h-[500px] rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-black-300/50 to-black-500/30 backdrop-blur-lg">
                <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
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

              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
                <div className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-semibold shadow-lg">
                  ✨ Developer Workspace
                </div>
              </div>
            </div>

            <div className="space-y-8">
              {experiences.map((exp) => (
                <div key={exp.id} className="group relative">
                  <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-purple-500 to-transparent"></div>
                  <div className="absolute left-0 top-6 w-3 h-3 bg-blue-500 rounded-full transform -translate-x-1/2 group-hover:scale-125 transition-transform duration-300"></div>

                  <div className="ml-8 p-6 rounded-xl bg-gradient-to-br from-black-300/50 to-black-500/30 backdrop-blur-lg border border-white/10 hover:border-blue-500/30 transition-all duration-300 group-hover:transform group-hover:scale-[1.02]">
                    <div className="flex flex-wrap items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-1">{exp.company}</h3>
                        <p className="text-gray-400 text-sm mb-2">{exp.companyDetail}</p>
                        <p className="text-blue-400 font-semibold">{exp.position}</p>
                        <p className="text-gray-300 text-sm">{exp.location}</p>
                      </div>
                      <div className="text-right">
                        <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium">
                          {exp.type}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex items-center gap-2 text-gray-300">
                        <span>🗓️</span>
                        <span className="font-medium">{exp.period}</span>
                        <span className="text-gray-500">•</span>
                        <span className="text-gray-400">{exp.duration}</span>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                        <span>🎯</span>
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-gray-300 text-sm leading-relaxed pl-4 relative">
                            <span className="absolute left-0 top-2 w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
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
                <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-green-500 to-transparent opacity-50"></div>
                <div className="absolute left-0 top-6 w-3 h-3 bg-green-500 rounded-full transform -translate-x-1/2 animate-pulse"></div>

                <div className="ml-8 p-6 rounded-xl bg-gradient-to-br from-green-900/20 to-blue-900/20 backdrop-blur-lg border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
                  <h3 className="text-lg font-bold text-white mb-2">🌱 Currently Building</h3>
                  <p className="text-gray-300 text-sm mb-3">
                    Actively developing innovative solutions at BGS while expanding expertise in modern web technologies
                    and image processing.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-green-500/20 text-green-300 rounded text-xs">Active Development</span>
                    <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">Learning & Growing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkExperience;
