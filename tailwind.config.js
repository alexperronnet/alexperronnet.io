const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault        : true
  },
  purge: {
    enabled: false
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
