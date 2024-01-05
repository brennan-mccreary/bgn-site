/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        'circuitry': "url('Images/image(8).png')",
        'trees': "url('Images/image(10).png')"
       },
      colors: {
        'bgngray': {
          50: "#f5f6f6",
          100:'#e5e7e8',
          200: "#aaaeb6",
          300: "#aaaeb6",
          400: "#808790",
          500: "#656c75",
          600: "#565a64",
          700: "#4a4d54",
          800: "#414349",
          900: "#393b40",
          950: "#1e1f22"
        },
        'bgngreen': {
          50: "#e8ffe4",
          100:'#ccffc5',
          200: "#9dff92",
          300: "#5fff53",
          400: "#29fb20",
          500: "#05da00",
          600: "#00b501",
          700: "#028903",
          800: "#086c0a",
          900: "#0c5b0f",
          950: "#003304"
        },
      },
      
      boxShadow: {
        'surround': [
            '0 0px 15px rgba(0, 0, 0, 0.25)',
            '0 0px 35px rgba(0, 0, 0, 0.15)',
        ]
      },

    },
  },
  plugins: [],
}

