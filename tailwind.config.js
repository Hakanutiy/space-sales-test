/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      maxWidth: {
        '26': '100px'
      },
      backgroundColor: {
        base: '#EBEBF0',
        foreGround: '#F9FAFB',
        success: '#32C076',
        checked: '#5856D6'
      },
      borderColor: {
        desc: '#9494A0'
      },
      colors: {
        title: '#424F5E',
        desc: '#9494A0'
      },
    },
  },
  plugins: [],
}

