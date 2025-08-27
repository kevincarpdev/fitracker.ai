/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./hooks/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand colors
        primary: {
          50: '#F0F0FF',
          100: '#E0E0FF',
          200: '#C1C1FF',
          300: '#A2A2FF',
          400: '#8383FF',
          500: '#7946B4', // Secondary brand color
          600: '#6A3FA0',
          700: '#5B388C',
          800: '#4C3178',
          900: '#3D2A64',
          950: '#160B61', // Primary brand color
        },
        secondary: {
          50: '#F8F5FF',
          100: '#F0EBFF',
          200: '#E1D7FF',
          300: '#D2C3FF',
          400: '#C3AFFF',
          500: '#7946B4', // Secondary brand color
          600: '#6A3FA0',
          700: '#5B388C',
          800: '#4C3178',
          900: '#3D2A64',
          950: '#160B61', // Primary brand color
        },
        // Functional colors
        protein: '#FF7F50',
        carbs: '#20B2AA',
        fat: '#FFD700',
        success: '#4ECDC4',
        error: '#FF6B6B',
        info: '#45B7D1',
        background: '#F8FAFC',
        card: '#FFFFFF',
        text: '#1F2937',
        textLight: '#6B7280',
        border: '#E5E7EB',
        // Gray scale
        gray: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
    },
  },
  plugins: [],
}
