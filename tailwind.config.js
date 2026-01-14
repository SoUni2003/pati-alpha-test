/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'sculptique-green': '#1a472a', // Màu nút Add to Cart chính
        'sculptique-cream': '#fdfbf0', // Màu nền nhẹ của các section
        'sculptique-text': '#1d1d1f',  // Màu chữ chuẩn Apple-style
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'], // Cần cài font Inter để đạt Pixel-perfect
      },
      maxWidth: {
        'page': '1200px', // Container chuẩn của trang mẫu
      }
    },
  },
  plugins: []
}

