module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        maven: ["Maven Pro", "sans-serif"],
        awesome: ["FontAwesome"]
      },
      colors: {
        textColor: "#5b5b5b",
        gray: "#EEEEEE",
        secColor: "#47465A",
        headingColor: "#353535",
        darkGray: "#474559",
        yellow: "#ffc200"
      },
      spacing: {
        "500": "31.25rem",
        "twice": "49%"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
