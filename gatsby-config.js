module.exports = {
  siteMetadata: {
    title: `blog.morera.computer`,
    siteUrl: `https://blog-moreracomputer.surge.sh`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'blog.morera.computer',
        short_name: 'blog',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#062437',
        display: 'minimal-ui',
        icon: 'src/images/icon.png'
      }
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: `https://blog-moreracomputer.surge.sh`,
        sitemap: `https://blog-moreracomputer.surge.sh/sitemap.xml`,
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`
      }
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 700
            }
          },
          {
            resolve: `gatsby-remark-external-links`,
            options: {
              target: '_blank'
            }
          },
          {
            resolve: `gatsby-remark-prismjs`
          }
        ]
      }
    },
    // `gatsby-transformer-remark`,
    `gatsby-plugin-styled-components`
  ]
}
