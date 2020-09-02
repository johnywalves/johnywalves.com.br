const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
//const { fmImagesToRelative } = require('gatsby-remark-relative-images');

// To add the slug field to each post
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  //fmImagesToRelative(node);

  // Ensures we are processing only markdown files
  if (node.internal.type === "MarkdownRemark") {
    // Use `createFilePath` to turn markdown files in our `data/faqs` directory into `/faqs/slug`
    const slug = createFilePath({
      node,
      getNode,
      basePath: "pages",
    })

    // Creates new query'able field with name of 'slug'
    createNodeField({
      node,
      name: "slug",
      value: `/${slug
        .slice(12)
        .toLowerCase()
        .replace(new RegExp("_", "g"), "-")}`,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return graphql(`
    query {
      allMarkdownRemark(
        sort: { fields: frontmatter___date, order: DESC }
        filter: { frontmatter: { published: { ne: false } } }
      ) {
        edges {
          node {
            frontmatter {
              date(locale: "pt_br", formatString: "DD [de] MMMM [de] YYYY")
              title
              category
              number
              description
            }
            timeToRead
            fields {
              slug
            }
          }
          next {
            frontmatter {
              title
            }
            fields {
              slug
            }
          }
          previous {
            frontmatter {
              title
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      throw result.errors
    }

    const posts = result.data.allMarkdownRemark.edges.filter(
      (post) => post.node.frontmatter.category !== "Comic"
    )

    posts.forEach(({ node, next, previous }) => {
      createPage({
        path: `${node.fields.slug}`,
        component: path.resolve(`src/templates/blog-post.jsx`),
        context: {
          slug: node.fields.slug,
          previousPost: next,
          nextPost: previous,
        },
      })
    })

    const postsPerPage = 6
    const numPages = Math.ceil(posts.length / postsPerPage)

    Array.from({ length: numPages }).forEach((_, index) => {
      createPage({
        path: index === 0 ? `/blog/` : `/page/${index + 1}`,
        component: path.resolve(`src/templates/blog-list.jsx`),
        context: {
          limit: postsPerPage,
          skip: index * postsPerPage,
          numPages,
          currentPage: index + 1,
        },
      })
    })

    const comics = result.data.allMarkdownRemark.edges.filter(
      (post) => post.node.frontmatter.category === "Comic"
    )

    comics.forEach(({ node }) => {
      createPage({
        path: `/comic-${node.frontmatter.number}`,
        component: path.resolve(`src/templates/comic-post.jsx`),
        context: {
          slug: node.fields.slug,
          number: node.frontmatter.number,
        },
      })
    })
  })
}
