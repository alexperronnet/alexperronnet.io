module.exports = {
  siteMetadata: {
    title: 'Alex Perronnet',
    description: 'Hello everyone, welcome to my personnal website. I am Alex Perronnet, a french freelance developer and designer. I am also an open-source contributor and a content creator.',
    siteUrl: 'https://alexperronnet.com'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-theme-ui',
    'gatsby-plugin-emotion',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: { siteUrl: 'https://alexperronnet.com' }
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://alexperronnet.com',
        sitemap: 'https://alexperronnet.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    {
      resolve: 'gatsby-plugin-htaccess',
      options: {
        RewriteBase: true,
        https: true,
        www: false,
        ErrorDocument: 'ErrorDocument 404 /index.html',
        custom: `
        <IfModule mod_headers.c>
        Header set Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" env=HTTPS
        Header set X-XSS-Protection "1; mode=block"
        Header always append X-Frame-Options SAMEORIGIN
        Header set X-Content-Type-Options nosniff
        </IfModule>
        `
      }
    }
  ]
}
