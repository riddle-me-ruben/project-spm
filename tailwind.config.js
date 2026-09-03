export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f4f9',
          100: '#dce6f0',
          200: '#b3c8dd',
          300: '#84a5c4',
          400: '#5580a8',
          500: '#376189',
          600: '#264a6e',
          700: '#1b3856',
          800: '#122740',
          900: '#0a1830',
          950: '#050f1e',
        },
        accent: {
          50: '#fff4ec',
          100: '#ffe4cc',
          200: '#ffc699',
          300: '#ffa15f',
          400: '#ff8a3d',
          500: '#f2740f',
          600: '#d9600a',
          700: '#b34c09',
          800: '#8f3d0d',
          900: '#75330f',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 2px 0 rgba(10, 24, 48, 0.06), 0 1px 3px 1px rgba(10, 24, 48, 0.08)',
        cardHover: '0 4px 10px -2px rgba(10, 24, 48, 0.15), 0 2px 6px -1px rgba(10, 24, 48, 0.1)',
      },
    },
  },
  plugins: [],
}
