/* eslint-disable  */
module.exports = {
    siteMetadata: {
        title: `Keegan Burkett`,
        description: `Front End Software Engineer`,
        author: `@keegn`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-typescript`,
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
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `keeg`,
                start_url: `/`,
                background_color: `#6b37bf`,
                theme_color: `#6b37bf`,
                display: `standalone`,
                icon: `src/images/gatsby-icon.png`,
            },
        },
    ],
}
