/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb', // blue-600
        secondary: '#818cf8', // indigo-400
        accent: '#fbbf24', // yellow-400
        dark: '#1e293b', // slate-800
        light: '#f1f5f9', // slate-100
        card: '#e0e7ff', // light indigo
        card2: '#f0fdfa', // light teal
        card3: '#fef9c3', // light yellow
        border: '#c7d2fe', // indigo-200
        gradient1: '#dbeafe', // blue-100
        gradient2: '#f3e8ff', // purple-100
        gradient3: '#fef3c7', // yellow-100
      },
      boxShadow: {
        'card': '0 4px 24px 0 rgba(37, 99, 235, 0.08)',
        'button': '0 2px 8px 0 rgba(37, 99, 235, 0.15)',
      },
      borderRadius: {
        'xl': '1.25rem',
        '2xl': '1.5rem',
      },
      transitionProperty: {
        'colors': 'color, background-color, border-color, text-decoration-color, fill, stroke',
      },
    },
  },
  plugins: [],
};
