const tailwindConfig = require("./tailwind.config")
const websiteConfig  = require("./.config/website")

module.exports = {
  siteMetadata: {
    title      : websiteConfig.name,
    description: websiteConfig.description,
    author     : websiteConfig.author,
    siteUrl    : websiteConfig.url
  },
  plugins: [
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name              : websiteConfig.name,
        short_name        : websiteConfig.name,
        start_url         : websiteConfig.path,
        background_color  : tailwindConfig.theme.colors.white,
        theme_color       : tailwindConfig.theme.colors.white,
        display           : websiteConfig.manifestDisplay,
        cache_busting_mode: websiteConfig.manifestCache,
        icon              : websiteConfig.icon,
        icon_options      : {
          purpose: websiteConfig.iconPurpose
        }
      }
    },
    {
      resolve: "gatsby-plugin-sass",
      options: {
        postCssPlugins: [
          require("tailwindcss")(tailwindConfig),
          require("autoprefixer")
        ]
      }
    },
    {
      resolve: "gatsby-plugin-purgecss",
      options: {
        tailwind: true
      },
    },
    {
      resolve: "gatsby-plugin-canonical-urls",
      options: {
        siteUrl: websiteConfig.url
      }
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: websiteConfig.googleTrackingId
      }
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-optimize-svgs",
    "gatsby-plugin-minify-html",
    "gatsby-plugin-brotli",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-robots-txt",
    "gatsby-plugin-offline"
  ]
}
