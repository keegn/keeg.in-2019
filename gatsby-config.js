/* eslint-disable  */
const activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || 'development'
console.log(`Using environment config: '${activeEnv}'`)
require('dotenv').config({
  path: `.env.${activeEnv}`,
})

module.exports = {
  siteMetadata: {
    title: `Keegan Burkett`,
    description: `Front End Software Engineer`,
    author: `@keegn`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-plugin-sentry',
      options: {
        dsn: process.env.GATSBY_SENTRY_DSN,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `keeg`,
        start_url: `/`,
        background_color: `#D5DED7`,
        theme_color: `#D5DED7`,
        display: `standalone`,
        icon: `src/images/keegin-icon.png`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
