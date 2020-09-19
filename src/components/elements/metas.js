import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const Metas = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `)

  const { title, description, author } = data.site.siteMetadata

  return (
    <Helmet
      htmlAttributes = {{lang: "en"}}
      defer          = {false}
      title          = {title}
      meta           = {[
        {
          name   : "description",
          content: description,
        },
        {
          property: "og:title",
          content : title,
        },
        {
          property: "og:description",
          content : description,
        },
        {
          property: "og:type",
          content : "website",
        },
        {
          name   : "twitter:creator",
          content: author,
        },
        {
          name   : "twitter:title",
          content: title,
        },
        {
          name   : "twitter:description",
          content: description,
        }
      ]}
    />
  )
}

export default Metas
