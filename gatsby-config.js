module.exports = {
  siteMetadata: {
    title: `blog.morera.computer`
  },
  plugins: [
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
