const title = "Alex Perronnet"
const siteUrl = "https://alexperronnet.io"
const description = "I'm Alex Perronnet, a french freelance developer and designer. I'm also an open-source contributor and a content creator."

module.exports = {
  siteMetadata: {
    title: title,
    siteUrl: siteUrl,
    description: description
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-sass",
      options: {
        postCssPlugins: [
          require("autoprefixer"),
          require("tailwindcss")
        ]
      }
    }
  ]
}
