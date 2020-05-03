require("dotenv").config()

const queries = require("./src/utils/algolia_queries")

module.exports = {
    siteMetadata: {
        title: `Johny W. Alves`,
        position: `FullStack Developer`,
        description: `Meu nome é Johny criei esse espaço para organizar meus estudos, compartilhar e receber feedback`,
        author: `@johnywalves`,
        siteUrl: `https://www.johnywalves.com.br`
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-transition-link`,
        {
            resolve: `gatsby-plugin-root-import`,
            options: {
                src: `${__dirname}/src`,
                assets: `${__dirname}/src/assets`,
                components: `${__dirname}/src/components`,
                pages: `${__dirname}/src/pages`,
                styles: `${__dirname}/src/styles`,
            }
        },
        {
            resolve: `gatsby-plugin-algolia-search`,
            options: {
                appId: process.env.GATSBY_ALGOLIA_APP_ID,
                apiKey: process.env.ALGOLIA_ADMIN_KEY,
                indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
                queries,
                chunkSize: 10000, // default: 1000
                enablePartialUpdates: true,
            },
        },
        // needs to be the first to work with gatsby-remark-images
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/assets/images`,
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `posts`,
                path: `${__dirname}/posts`,
            }
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-sitemap`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Johny W. Alves`,
                short_name: `Johny Site`,
                start_url: `/`,
                background_color: `#eb008b`,
                theme_color: `#eb008b`,
                display: `minimal-ui`,
                icon: `src/assets/images/favicon.png`, // This path is relative to the root of the site.
            }
        },
        'gatsby-plugin-netlify-cms',
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `markdown-pages`,
                path: `${__dirname}/posts`,
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: "gatsby-remark-relative-images",
                    },
                    {
                        resolve: "gatsby-remark-images",
                        options: {
                            maxWidth: 960,
                            linkImagesToOriginal: false,
                        },
                    },
                    `gatsby-remark-lazy-load`,
                    `gatsby-remark-prismjs`,
                ],
            },
        },
        {
            resolve: `gatsby-plugin-algolia-search`,
            options: {
                appId: process.env.GATSBY_ALGOLIA_APP_ID,
                apiKey: process.env.ALGOLIA_ADMIN_KEY,
                indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
                queries,
                chunkSize: 10000,
                enablePartialUpdates: true,
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        `gatsby-plugin-offline`,
    ],
}