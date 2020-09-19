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
    colors: {
      blue: {
        background: "#DBEDFF",
        default   : "#0366D6",
        foreground: "#05264C"
      },
      pink: {
        background: "#FEDBF0",
        default   : "#EA4AAA",
        foreground: "#6D224F"
      },
      gray: {
        background: "#EDF2F7",
        default   : "#A0AEC0",
        foreground: "#4A5568"
      },
      white      : "#FFFFFF",
      black      : "#000000",
      current    : "currentColor",
      transparent: "transparent"
    },
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
