// Simple tech icon mapping
const icons = {
  'React.js': '/assets/react.svg',
  React: '/assets/react.svg',
  'Next.js': '/assets/react.svg',
  TypeScript: '/assets/typescript.png',
  JavaScript: '/assets/react.svg',
  TailwindCSS: '/assets/tailwindcss.png',
  'Tailwind CSS': '/assets/tailwindcss.png',
  'Node.js': '/assets/terminal.png',
  MongoDB: '/assets/terminal.png',
  'Express.js': '/assets/terminal.png',
  Figma: '/assets/figma.svg',
  Framer: '/assets/framer.svg',
  'Framer Motion': '/assets/framer.png',
  WordPress: '/assets/terminal.png',
  'Custom Plugins': '/assets/terminal.png',
  'Google Maps API': '/assets/terminal.png',
  'WhatsApp Business API': '/assets/terminal.png',
  'Payment Gateways': '/assets/terminal.png',
  Cloudinary: '/assets/terminal.png',
  'Image Processing': '/assets/terminal.png',
  'Web Development': '/assets/react.svg',
  SEO: '/assets/terminal.png',
  Git: '/assets/github.svg',
  GitHub: '/assets/github.svg',
};

export function getTechIcon(techName) {
  return icons[techName] || '/assets/terminal.png';
}
