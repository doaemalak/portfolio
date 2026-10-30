/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        // Light mode palette
        primary:    '#0F172A',
        secondary:  '#1E293B',
        surface:    '#FFFFFF',
        bg:         '#F8FAFC',
        muted:      '#64748B',
        border:     '#E2E8F0',
        // Dark mode palette
        dark: {
          bg:      '#0A0F1E',
          surface: '#111827',
          card:    '#1A2235',
          border:  '#1F2D45',
          muted:   '#6B7280',
        },
        accent:      '#2563EB',
        accentHover: '#1D4ED8',
        accentLight: '#EFF6FF',
        success:     '#059669',
        navy:        '#0F172A',
      },
      animation: {
        'fade-in':    'fadeIn 0.6s ease-out both',
        'slide-up':   'slideUp 0.6s ease-out both',
        'slide-in':   'slideIn 0.6s ease-out both',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn:  { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        slideUp: { '0%': { transform: 'translateY(16px)', opacity: '0' }, '100%': { transform: 'translateY(0)', opacity: '1' } },
        slideIn: { '0%': { transform: 'translateX(-16px)', opacity: '0' }, '100%': { transform: 'translateX(0)', opacity: '1' } },
      },
    },
  },
  plugins: [],
}
