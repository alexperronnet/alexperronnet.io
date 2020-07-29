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
          siteUrl
        }
      }
    }
  `)

  const { title, description, siteUrl } = data.site.siteMetadata

  return (
    <Helmet>
      <html lang='en' />
      <title>{ title }</title>
      <meta name='description' content={ description } />
      <link rel='canonical' href={ siteUrl } />
    </Helmet>
  )
}
