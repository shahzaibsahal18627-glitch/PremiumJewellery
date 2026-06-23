export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        espresso: '#1a1410',
        obsidian: '#0d0a08',
        terracotta: '#b85c31',
        burnt: '#8b4513',
        champagne: '#e8d4a8',
        ivory: '#f5f1eb',
        gold: '#d4af37',
        jet: '#111111'
      },
      backgroundImage: {
        'silk-wave': 'url("data:image/svg+xml,%3Csvg width="100" height="100" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="wave"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="3" result="noise" /%3E%3CfeDisplacementMap in="SourceGraphic" in2="noise" scale="10" /%3E%3C/filter%3E%3Crect width="100" height="100" fill="%231a1410" filter="url(%23wave)" /%3E%3C/svg%3E")',
      },
      boxShadow: {
        soft: '0 20px 60px rgba(17, 17, 17, 0.12)',
        luxury: '0 25px 50px -12px rgba(0, 0, 0, 0.4)',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      }
    }
  },
  plugins: [],
};
