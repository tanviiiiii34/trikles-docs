/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      },
      boxShadow: {
        glow: '0 24px 80px rgba(15, 23, 42, 0.18)',
        panel: '0 18px 50px rgba(15, 23, 42, 0.12)'
      },
      maxWidth: {
        layout: '1560px'
      },
      colors: {
        surface: 'var(--surface)',
        'surface-strong': 'var(--surface-strong)',
        foreground: 'var(--foreground)',
        muted: 'var(--muted)',
        border: 'var(--border)',
        primary: 'var(--primary)',
        'primary-soft': 'var(--primary-soft)',
        accent: 'var(--accent)'
      }
    }
  },
  plugins: []
};
