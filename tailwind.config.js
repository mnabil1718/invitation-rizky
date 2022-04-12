module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '0\.25': '1px',
      },
      screens: {
        'break-750': '750px',
      },
      letterSpacing: {
        '6': '.6em',
      },
      rotate: {
        '20': '20deg',
      },
      colors: {
        'neutral': '#F8FAF8',
        'primary': '#CDDEEC',
        'dark': '#5C707F',
        'accent': '#EF798A',
        'accent_bright': '#7FD1AE',
        'cream': 'EFD8C1'
      },
      fontFamily: {
        lora: ["Lora", "serif"],
        alice: ["Alice", "serif"],
        lemon: ["Lemon Melon", "sans-serif"],
        vazirmatn: ["Vazirmatn", "sans-serif"],
        work: ["Work Sans", "sans-serif"],

      }
    },
  },
  plugins: [],
}
