const tailwindConfig = require("./tailwind.config")
const website = {
  sitePath            : "/",
  siteName            : "Alex Perronnet",
  siteAuthor          : "@alexperronnet",
  siteUrl             : "https://alexperronnet.io",
  siteIcon            : "static/favicon.png",
  siteGoogleTrackingId: "UA-156157580-2",
  siteBackgroundColor : "#FFFFFF",
  siteThemeColor      : "#FFFFFF",
  siteDescription     : "I'm Alex Perronnet, a french freelance developer and designer. I'm also an open-source contributor and a content creator"
}

module.exports = {
  siteMetadata: {
    title      : website.siteName,
    description: website.siteDescription,
    author     : website.siteAuthor,
    siteUrl    : website.siteUrl
  },
  plugins: [
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name              : website.siteName,
        short_name        : website.siteName,
        start_url         : website.sitePath,
        background_color  : website.siteBackgroundColor,
        theme_color       : website.siteThemeColor,
        icon              : website.siteIcon,
        display           : "standalone",
        cache_busting_mode: "none"
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
        siteUrl: website.siteUrl
      }
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: website.siteGoogleTrackingId
      }
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-robots-txt",
    "gatsby-plugin-zopfli",
    "gatsby-plugin-offline"
  ]
}
