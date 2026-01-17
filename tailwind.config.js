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
        'sculptique-green': '#039869',
        'sculptique-cream': '#f8f6f1',
        'sculptique-text': '#000000',
        'sculptique-muted': '#4a4a4a',
        'sculptique-accent': '#e11d48',
        'sculptique-secondary': '#000000bf',
        'sculptique-yellow-primary': '#f3eee0',
        'sculptique-primary': '#000000',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        nunito: ['Nunito', 'sans-serif'],
        lora: ['Lora', 'serif'],
        trirong: ['Trirong', 'serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      maxWidth: {
        page: '1250px',
      }
    },
  },
  plugins: []
}

