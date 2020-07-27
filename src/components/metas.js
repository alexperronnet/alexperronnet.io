import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Helmet } from 'react-helmet'

export default function Metas() {
  
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  const { title, description } = data.site.siteMetadata

  return (
    <Helmet
      htmlAttributes= {{
        lang: 'en'
      }}
      title= { title }
      meta= {[
        {
          name: 'description',
          content: description
        },
        {
          name: 'twitter:description',
          content: description
        },
        {
          name: 'twitter:title',
          content: title
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image'
        },
        {
          property: 'og:description',
          content: description
        },
        {
          property: 'og:title',
          content: title
        },
        {
          property: 'og:image',
          content: 'https://alexperronnet.com/og-image.png'
        }
      ]}
    />
  )
}
