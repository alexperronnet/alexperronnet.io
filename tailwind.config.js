const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault        : true
  },
  purge: {
    enable : true,
    content: ["./src/**/*.js", "./src/**/*.jsx"]
  },
  theme: {
    fontFamily: {
      sans: ["Roboto", ...defaultTheme.fontFamily.sans]
    },
    screens: {
      "sm": "640px",
      "md": "768px",
      "lg": "1024px"
    },
    container: {
      center : true,
      padding: "2rem"
    }
  }
}
