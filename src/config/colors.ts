// Centralized color configuration for the portfolio
// Change these values to update colors across the entire website

export const colors = {
  // Primary accent color - used for highlights, buttons, links, etc.
  primary: {
    light: '#0ea5e9', // Sky blue for light theme
    dark: '#38bdf8',  // Lighter sky blue for dark theme
  },
  
  // Secondary accent color - used for hover states, gradients
  secondary: {
    light: '#0284c7', // Darker sky blue
    dark: '#7dd3fc',  // Lighter sky blue
  },
  
  // Background colors
  background: {
    light: '#ffffff',
    dark: '#000000',
  },
  
  // Card/Section backgrounds
  card: {
    light: 'rgba(255, 255, 255, 0.95)',
    dark: 'rgba(17, 24, 39, 0.8)',
  },
  
  // Text colors
  text: {
    primary: {
      light: '#111827', // gray-900
      dark: '#ffffff',
    },
    secondary: {
      light: '#4b5563', // gray-600
      dark: '#d1d5db', // gray-300
    },
    muted: {
      light: '#6b7280', // gray-500
      dark: '#9ca3af', // gray-400
    },
  },
  
  // Border colors
  border: {
    light: '#e5e7eb', // gray-200
    dark: '#374151',  // gray-700
  },
  
  // Gradient for timeline and accents
  gradient: {
    light: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 50%, #0369a1 100%)',
    dark: 'linear-gradient(135deg, #38bdf8 0%, #0ea5e9 50%, #0284c7 100%)',
  },
};

// Tailwind class mappings
export const colorClasses = {
  // Primary accent classes
  primary: {
    text: {
      light: 'text-sky-500',
      dark: 'text-sky-400',
    },
    bg: {
      light: 'bg-sky-500',
      dark: 'bg-sky-400',
    },
    border: {
      light: 'border-sky-500',
      dark: 'border-sky-400',
    },
    hover: {
      light: 'hover:bg-sky-600',
      dark: 'hover:bg-sky-500',
    },
  },
  
  // Background tints for badges, tags, etc.
  accent: {
    bg: {
      light: 'bg-sky-100',
      dark: 'bg-sky-900/30',
    },
    text: {
      light: 'text-sky-700',
      dark: 'text-sky-300',
    },
    border: {
      light: 'border-sky-300',
      dark: 'border-sky-700',
    },
  },
};

export default colors;
