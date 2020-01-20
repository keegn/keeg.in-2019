/* eslint-disable  */
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
        dsn: 'https://f702eedc3c1a41839d40b0629bbff91f@sentry.io/1854582',
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `keeg`,
        start_url: `/`,
        background_color: `#6b37bf`,
        theme_color: `#6b37bf`,
        display: `standalone`,
        icon: `src/images/keegin-sq-icon.png`,
      },
    },
  ],
}
