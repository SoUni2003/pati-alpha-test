/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1120px',
        xl: '1200px'
      }
    },
    extend: {
      colors: {
        'sculptique-green': '#1a472a',
        'sculptique-cream': '#f8f6f1',
        'sculptique-text': '#1d1d1f',
        'sculptique-muted': '#4a4a4a',
        'sculptique-accent': '#e11d48',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      maxWidth: {
        page: '1250px',
      }
    },
  },
  plugins: []
}

