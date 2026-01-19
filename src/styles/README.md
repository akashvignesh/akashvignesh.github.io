# SCSS Architecture

This folder contains the organized SCSS styles for the portfolio website.

## Folder Structure

```
src/styles/
├── abstracts/          # Variables, mixins, functions, animations
│   ├── _variables.scss # Color schemes, breakpoints, spacing, typography
│   ├── _mixins.scss    # Reusable style patterns (flex, cards, buttons)
│   ├── _animations.scss # Keyframes & animation utility classes
│   └── _index.scss     # Forward file for abstracts
│
├── base/               # Reset, typography, base styles
│   ├── _reset.scss     # CSS reset, custom properties, base element styles
│   ├── _typography.scss # Text styles, gradient text, hover effects
│   ├── _scrollbar.scss # Custom scrollbar for light/dark themes
│   └── _index.scss     # Forward file for base
│
├── components/         # Reusable UI components
│   ├── _buttons.scss   # Button variants (primary, outline, ghost, social)
│   ├── _cards.scss     # Card variants (base, hover, 3D, glass, project, etc.)
│   ├── _badges.scss    # Tags & badges (status, tech, skill, period, filter)
│   ├── _forms.scss     # Form elements (inputs, textarea, labels)
│   ├── _navigation.scss # Top nav, nav links, mobile menu
│   └── _index.scss     # Forward file for components
│
├── pages/              # Page-specific styles
│   ├── _home.scss      # Hero section styles
│   └── _index.scss     # Forward file for pages
│
├── utilities/          # Utility classes
│   ├── _icons.scss     # Devicon styling, icon sizes, hover effects
│   ├── _effects.scss   # Glass effect, glows, shadows, gradients
│   └── _index.scss     # Forward file for utilities
│
├── main.scss           # Main entry point - imports everything
└── README.md           # This file
```

## Theme System

The project uses CSS custom properties for theming:

### Light Theme (Default)
- Primary: Emerald (#10b981)
- Secondary: Cyan (#06b6d4)
- Background: #f8fdf8

### Dark Theme (.dark class)
- Primary: Sky Blue (#38bdf8)
- Secondary: Purple (#a78bfa)
- Background: #0a0f1a

## Usage

### Adding New Styles

1. **New Component**: Create `_component-name.scss` in `/components/` and add to `_index.scss`
2. **New Page Styles**: Create `_page-name.scss` in `/pages/` and add to `_index.scss`
3. **New Animation**: Add keyframes and utility class in `/abstracts/_animations.scss`

### Using Mixins

```scss
@use '../abstracts' as *;

.my-component {
  @include flex-center;
  @include card-base;
  @include respond-to(md) {
    // Styles for md and up
  }
}
```

### Using Variables

```scss
@use '../abstracts' as *;

.my-element {
  color: map-get($light, primary);
  font-size: map-get($font-sizes, lg);
  padding: map-get($spacing, 4);
}
```

## Animation Classes

| Class | Description |
|-------|-------------|
| `.animate-float` | Gentle floating motion |
| `.animate-fade-in` | Fade in effect |
| `.animate-slide-up` | Slide up entrance |
| `.animate-scale-in` | Scale up entrance |
| `.animate-glow-pulse` | Pulsing glow effect |
| `.animate-spin-slow` | Slow rotation |
| `.blob` | Morphing blob shape |
| `.stagger-1` to `.stagger-10` | Animation delays |

## Responsive Breakpoints

| Name | Width |
|------|-------|
| xs | 480px |
| sm | 640px |
| md | 768px |
| lg | 1024px |
| xl | 1280px |
| 2xl | 1536px |
