require("dotenv").config()

const queries = require("./src/utils/algolia_queries")

const pluginsConfig = [
  `gatsby-plugin-react-helmet`,
  `gatsby-plugin-transition-link`,
  `gatsby-plugin-styled-components`,
  {
    resolve: `gatsby-plugin-root-import`,
    options: {
      src: `${__dirname}/src`,
      assets: `${__dirname}/src/assets`,
      components: `${__dirname}/src/components`,
      pages: `${__dirname}/src/pages`,
      styles: `${__dirname}/src/styles`,
    },
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
      name: `uploads`,
      path: `${__dirname}/static/figures`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/assets/images`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `markdown-pages`,
      path: `${__dirname}/posts`,
    },
  },
  `gatsby-transformer-sharp`,
  `gatsby-plugin-sharp`,
  `gatsby-plugin-image`,
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `Johny W. Alves`,
      short_name: `Johny W. Alves`,
      start_url: `/`,
      background_color: `#ffffff`,
      theme_color: `#de128c`,
      display: `minimal-ui`,
      icon: `src/assets/images/favicon.png`, // This path is relative to the root of the site.
    },
  },
  "gatsby-plugin-netlify-cms",
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        {
          resolve: "gatsby-remark-relative-images-v2",
          options: {
            name: "uploads",
          },
        },
        {
          resolve: "gatsby-remark-images",
          options: {
            quality: 90,
            maxWidth: 960,
            withWebp: true,
            linkImagesToOriginal: false,
          },
        },
        "gatsby-remark-static-images",
        `gatsby-remark-lazy-load`,
        `gatsby-remark-prismjs`,
      ],
    },
  },
  {
    resolve: `gatsby-plugin-feed`,
    options: {
      query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
      feeds: [
        {
          serialize: ({ query: { site, allMarkdownRemark } }) => {
            return allMarkdownRemark.edges.map((edge) => {
              return Object.assign({}, edge.node.frontmatter, {
                description: edge.node.frontmatter.description,
                date: edge.node.frontmatter.date,
                url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                custom_elements: [{ "content:encoded": edge.node.excerpt }],
              })
            })
          },
          query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] },
                  filter: {
                    frontmatter: { published: { ne: false }, category: { ne: "Comic" } }
                  }
                ) {
                  edges {
                    node {
                      frontmatter {
                        date
                        title
                        description
                      }
                      excerpt
                      fields {
                        slug 
                      }
                    }
                  }
                }
              }
            `,
          output: "/feed-posts.xml",
          title: "Johny W. Alves's Posts",
        },
        {
          serialize: ({ query: { site, allMarkdownRemark } }) => {
            return allMarkdownRemark.edges.map((edge) => {
              return Object.assign({}, edge.node.frontmatter, {
                date: edge.node.frontmatter.date,
                url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                custom_elements: [
                  {
                    "content:encoded": `<p style='text-align:center'><a href='${
                      site.siteMetadata.siteUrl + edge.node.fields.slug
                    }'><img src='${site.siteMetadata.siteUrl}${
                      edge.node.frontmatter.coverImage
                    }' alt='${
                      edge.node.frontmatter.transcription
                    }' height='285px' width='auto'></a></p>`,
                  },
                ],
              })
            })
          },
          query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] },
                  filter: {
                    frontmatter: { published: { ne: false }, category: { eq: "Comic" } }
                  }
                ) {
                  edges {
                    node {
                      frontmatter {
                        date
                        title
                        number
                        coverImage
                        transcription
                      }
                      fields {
                        slug
                      }
                    }
                  }
                }
              }
            `,
          output: "/feed-comics.xml",
          title: "Johny W. Alves's Comics",
        },
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
  //`gatsby-plugin-offline`,
  `gatsby-plugin-sitemap`,
]

if (process.env.CONTEXT === "production") {
  pluginsConfig.push({
    resolve: `gatsby-plugin-google-tagmanager`,
    options: {
      id: process.env.GOOGLE_TAGMANAGER_ID,
    },
  })
}

module.exports = {
  siteMetadata: {
    title: `Johny W. Alves`,
    position: `Desenvolvedor Web`,
    subtitle: `Sempre desenvolvendo, aprendendo e fazendo humor sobre isso, espero que gostem`,
    description: `Desenvolvedor Web, estudante de ciência de dados e quadrinista amador com vários projetos, alguns conteúdos e um pouco de humor, espero que gostem`,
    author: `@johnywalves`,
    siteUrl: `https://www.johnywalves.com.br`,
  },
  plugins: pluginsConfig,
  flags: {
    DEV_SSR: false,
  },
}
