// ============================================
// THEME CONFIGURATION (TypeScript)
// Developer Portfolio - Centralized Colors
// ============================================
// 
// This file provides type-safe theme values for components.
// For CSS, use the custom properties in globals.css
// ============================================

export const colors = {
  // Light Theme Colors (Emerald/Teal)
  light: {
    // Backgrounds
    background: '#f8fdf8',
    backgroundSecondary: '#ffffff',
    cardBg: 'rgba(255, 255, 255, 0.95)',
    
    // Primary accent - Emerald
    primary: '#10b981',
    primaryLight: '#34d399',
    primaryDark: '#059669',
    
    // Secondary accent - Cyan
    secondary: '#06b6d4',
    
    // Text
    textPrimary: '#111827',
    textSecondary: '#4b5563',
    textMuted: '#6b7280',
    
    // Borders
    borderColor: '#d1fae5',
    borderHover: '#10b981',
    
    // Gradients
    gradientFrom: '#10b981',
    gradientVia: '#14b8a6',
    gradientTo: '#06b6d4',
    
    // Effects
    glowColor: 'rgba(16, 185, 129, 0.4)',
    shadowColor: 'rgba(16, 185, 129, 0.25)',
    
    // Grid
    gridColor: 'rgba(16, 185, 129, 0.08)',
  },
  
  // Dark Theme Colors (Cyber Blue/Sky)
  dark: {
    // Backgrounds
    background: '#0a0f1a',
    backgroundSecondary: '#1e293b',
    cardBg: 'rgba(15, 23, 42, 0.85)',
    
    // Primary accent - Sky Blue
    primary: '#38bdf8',
    primaryLight: '#7dd3fc',
    primaryDark: '#0ea5e9',
    
    // Secondary accent - Purple
    secondary: '#a78bfa',
    
    // Text
    textPrimary: '#ffffff',
    textSecondary: '#d1d5db',
    textMuted: '#9ca3af',
    
    // Borders
    borderColor: '#1e3a5f',
    borderHover: '#38bdf8',
    
    // Gradients
    gradientFrom: '#38bdf8',
    gradientVia: '#22d3ee',
    gradientTo: '#2dd4bf',
    
    // Effects
    glowColor: 'rgba(56, 189, 248, 0.5)',
    shadowColor: 'rgba(14, 165, 233, 0.35)',
    
    // Grid
    gridColor: 'rgba(56, 189, 248, 0.06)',
  },
};

// Breakpoints
export const breakpoints = {
  xs: '480px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};

// Spacing scale
export const spacing = {
  0: '0',
  1: '0.25rem',
  2: '0.5rem',
  3: '0.75rem',
  4: '1rem',
  5: '1.25rem',
  6: '1.5rem',
  8: '2rem',
  10: '2.5rem',
  12: '3rem',
  16: '4rem',
  20: '5rem',
  24: '6rem',
};

// Font sizes
export const fontSizes = {
  xs: '0.75rem',
  sm: '0.875rem',
  base: '1rem',
  lg: '1.125rem',
  xl: '1.25rem',
  '2xl': '1.5rem',
  '3xl': '1.875rem',
  '4xl': '2.25rem',
  '5xl': '3rem',
  '6xl': '3.75rem',
  '7xl': '4.5rem',
};

// Animation durations
export const durations = {
  fast: '150ms',
  normal: '300ms',
  slow: '500ms',
  slower: '800ms',
};

// Border radius
export const radius = {
  sm: '0.25rem',
  md: '0.375rem',
  lg: '0.5rem',
  xl: '0.75rem',
  '2xl': '1rem',
  '3xl': '1.5rem',
  full: '9999px',
};

// Z-index scale
export const zIndex = {
  base: 0,
  dropdown: 10,
  sticky: 20,
  fixed: 30,
  modalBackdrop: 40,
  modal: 50,
  popover: 60,
  tooltip: 70,
};

// Helper function to get theme colors
export const getThemeColors = (isDark: boolean) => {
  return isDark ? colors.dark : colors.light;
};

// Tailwind-compatible class names for common patterns
export const themeClasses = {
  light: {
    text: 'text-gray-900',
    textSecondary: 'text-gray-600',
    background: 'bg-white',
    border: 'border-emerald-200',
    accent: 'text-emerald-600',
    accentBg: 'bg-emerald-500',
  },
  dark: {
    text: 'text-white',
    textSecondary: 'text-gray-300',
    background: 'bg-slate-900',
    border: 'border-sky-500/30',
    accent: 'text-sky-400',
    accentBg: 'bg-sky-500',
  },
};

export default colors;
