module.exports = {
  siteMetadata: {
    title: `blog.morera.computer`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'blog.morera.computer',
        short_name: 'blog.morera.computer',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#062437',
        display: 'minimal-ui',
        icon: 'src/images/icon.png'
      }
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
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
