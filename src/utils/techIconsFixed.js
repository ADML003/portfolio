// Technology icons mapping with reliable sources
export const techIcons = {
  // Frontend Frameworks & Libraries
  'React.js': '/assets/react.svg',
  React: '/assets/react.svg',
  'Next.js': '/assets/react.svg', // Using React icon as fallback
  TypeScript: '/assets/typescript.png',
  JavaScript: '/assets/react.svg', // Using React icon as fallback
  TailwindCSS: '/assets/tailwindcss.png',
  'Tailwind CSS': '/assets/tailwindcss.png',

  // Backend & Databases
  'Node.js': '/assets/terminal.png',
  MongoDB: '/assets/terminal.png',
  'Express.js': '/assets/terminal.png',

  // Design Tools
  Figma: '/assets/figma.svg',
  Framer: '/assets/framer.svg',
  'Framer Motion': '/assets/framer.png',

  // CMS & Platforms
  WordPress: '/assets/terminal.png',
  'Custom Plugins': '/assets/terminal.png',

  // APIs & Services
  'Google Maps API': '/assets/terminal.png',
  'WhatsApp Business API': '/assets/terminal.png',
  'Payment Gateways': '/assets/terminal.png',
  Cloudinary: '/assets/terminal.png',
  'Image Processing': '/assets/terminal.png',

  // General Development
  'Web Development': '/assets/react.svg',
  SEO: '/assets/terminal.png',

  // Version Control
  Git: '/assets/github.svg',
  GitHub: '/assets/github.svg',
};

// Get icon for technology with fallback
export const getTechIcon = (techName) => {
  const icon = techIcons[techName];
  if (icon) {
    return icon;
  }

  // If no specific icon found, return terminal as fallback
  return '/assets/terminal.png';
};

// Simple inline SVG icons for technologies that don't have assets
export const getTechSVG = (techName) => {
  switch (techName) {
    case 'Node.js':
      return (
        <svg className="w-4 h-4" fill="#339933" viewBox="0 0 24 24">
          <path d="M12 0L2 6v12l10 6 10-6V6L12 0z" />
        </svg>
      );
    case 'MongoDB':
      return (
        <svg className="w-4 h-4" fill="#47A248" viewBox="0 0 24 24">
          <path d="M12 2l1 6.5 4 3.5-1 7.5L12 22l-4-2.5L7 12l4-3.5L12 2z" />
        </svg>
      );
    case 'WordPress':
      return (
        <svg className="w-4 h-4" fill="#21759B" viewBox="0 0 24 24">
          <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z" />
        </svg>
      );
    case 'Google Maps API':
      return (
        <svg className="w-4 h-4" fill="#DB4437" viewBox="0 0 24 24">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
        </svg>
      );
    case 'WhatsApp Business API':
      return (
        <svg className="w-4 h-4" fill="#25D366" viewBox="0 0 24 24">
          <path d="M12 2C17.523 2 22 6.477 22 12s-4.477 10-10 10c-1.484 0-2.897-.328-4.15-.92L2 22l1-5.85C2.327 14.897 2 13.484 2 12 2 6.477 6.477 2 12 2z" />
        </svg>
      );
    case 'Payment Gateways':
      return (
        <svg className="w-4 h-4" fill="#2E86C1" viewBox="0 0 24 24">
          <path d="M3 5h14c2 0 4 2 4 4v10H3V5zm4 4v6h4V9H7zm6 0v6h4V9h-4z" />
        </svg>
      );
    case 'Cloudinary':
      return (
        <svg className="w-4 h-4" fill="#3449BD" viewBox="0 0 24 24">
          <path d="M6 10c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1zm12 0c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1zm-6-4c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1z" />
        </svg>
      );
    case 'Next.js':
      return (
        <svg className="w-4 h-4" fill="#000000" viewBox="0 0 24 24">
          <path d="M12 2l1.09 6.26L20 9l-6.91 6.74L12 22l-1.09-6.26L4 9l6.91-6.74L12 2z" />
        </svg>
      );
    default:
      return null;
  }
};
