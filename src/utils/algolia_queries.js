const postQuery = `{
    posts: allMarkdownRemark(
            sort: { fields: frontmatter___date, order: DESC }
            filter: {frontmatter: {published: {ne: false}}}
        ) {
        edges {
            node {
                objectID: id
                fields {
                    slug
                }
                frontmatter {
                    title
                    category
                    date_timestamp: date
                    date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
                    description
                    transcription
                    tags
                    coverImage
                }
                excerpt(pruneLength: 5000)
                timeToRead
            }
        }
    }
}`

const flatten = (arr) =>
  arr.map(({ node: { frontmatter: { description, transcription, date_timestamp, ...others }, fields, ...rest } }) => ({
    ...others,
    description: description ? description : transcription.slice(0, 100) + '...',
    ...fields,
    date_timestamp: parseInt(
      (new Date(date_timestamp).getTime() / 1000).toFixed(0)
    ),
    ...rest,
  }))

const queries = [
  {
    query: postQuery,
    transformer: ({ data }) => flatten(data.posts.edges),
    indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
    settings: { attributesToSnippet: [`excerpt: 20`] },
  },
]

module.exports = queries
