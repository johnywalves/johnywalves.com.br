const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

// To add the slug field to each post
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

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
      AllPosts: allMarkdownRemark(
        sort: { fields: frontmatter___date, order: DESC }
        filter: {
          frontmatter: { published: { ne: false }, category: { ne: "Comic" } }
        }
      ) {
        edges {
          node {
            frontmatter {
              date(locale: "pt_br", formatString: "DD [de] MMMM YYYY")
              title
              category
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
      AllComics: allMarkdownRemark(
        sort: { fields: frontmatter___date, order: DESC }
        filter: {
          frontmatter: { published: { ne: false }, category: { eq: "Comic" } }
        }
      ) {
        edges {
          node {
            frontmatter {
              date(locale: "pt_br", formatString: "DD [de] MMMM YYYY")
              title
              number
              description
            }
            timeToRead
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

    const categories = result.data.AllPosts.edges
      .map(({ node: { frontmatter: { category } } }) => category)
      .filter((v, i, a) => a.indexOf(v) === i)

    // Páginas de artigos
    result.data.AllPosts.edges.forEach(({ node, next, previous }) => {
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

    result.data.AllPosts.edges.forEach(({ node, next, previous }) => {
      createPage({
        path: `/new${node.fields.slug}`,
        component: path.resolve(`src/templates/blog-post-new.jsx`),
        context: {
          slug: node.fields.slug,
          previousPost: next,
          nextPost: previous,
        },
      })
    })

    // Listagem de artigos
    const postsPerPage = 12
    const numPagesPosts = Math.ceil(
      result.data.AllPosts.edges.length / postsPerPage
    )

    Array.from({ length: numPagesPosts }).forEach((_, index) => {
      createPage({
        path: index === 0 ? `/blog/` : `/page/${index + 1}`,
        component: path.resolve(`src/templates/blog-list.jsx`),
        context: {
          limit: postsPerPage,
          skip: index * postsPerPage,
          numPages: numPagesPosts,
          currentPage: index + 1,
          prevPage: index === 1 ? `/blog/` : `/page/${index}`,
          nextPage: `/page/${index + 2}`,
        },
      })
    })

    Array.from({ length: numPagesPosts }).forEach((_, index) => {
      createPage({
        path: index === 0 ? `/new/blog/` : `/new/page/${index + 1}`,
        component: path.resolve(`src/templates/blog-list-new.jsx`),
        context: {
          limit: postsPerPage,
          skip: index * postsPerPage,
          numPages: numPagesPosts,
          currentPage: index + 1,
          prevPage: index === 1 ? `/new/blog/` : `/new/page/${index}`,
          nextPage: `/new/page/${index + 2}`,
          categories
        },
      })
    })

    categories.forEach(name => {
      const categoryName = name.toLowerCase()
      const numPagesCategory = Math.ceil(
        result.data.AllPosts.edges.filter(({ node: { frontmatter: { category } } }) => category === name).length / postsPerPage
      )

      Array.from({ length: numPagesCategory }).forEach((_, index) => {
        createPage({
          path: index === 0 ? `/new/category/${categoryName}/` : `/new/category/${categoryName}/${index + 1}`,
          component: path.resolve(`src/templates/blog-category.jsx`),
          context: {
            limit: postsPerPage,
            skip: index * postsPerPage,
            category: name,
            numPages: numPagesCategory,
            currentPage: index + 1,
            prevPage: index === 1 ? `/new/category/${categoryName}/` : `/new/category/${categoryName}/${index}`,
            nextPage: `/new/category/${categoryName}/${index + 2}`,
            categories
          },
        })
      })
    })

    // Páginas de tirinhas
    result.data.AllComics.edges.forEach(({ node }) => {
      createPage({
        path: `/comic-${node.frontmatter.number}`,
        component: path.resolve(`src/templates/comic-post.jsx`),
        context: {
          slug: node.fields.slug,
          number: node.frontmatter.number,
        },
      })
    })

    result.data.AllComics.edges.forEach(({ node }) => {
      createPage({
        path: `/new/comic-${node.frontmatter.number}`,
        component: path.resolve(`src/templates/comic-post-new.jsx`),
        context: {
          slug: node.fields.slug,
          number: node.frontmatter.number,
        },
      })
    })

    // Listagem de tirinhas
    const comicsPerPage = 12
    const numPagesComics = Math.ceil(
      result.data.AllComics.edges.length / comicsPerPage
    )

    Array.from({ length: numPagesComics }).forEach((_, index) => {
      createPage({
        path: index === 0 ? `/comics/` : `/comics/${index + 1}`,
        component: path.resolve(`src/templates/comic-list.jsx`),
        context: {
          limit: comicsPerPage,
          skip: index * comicsPerPage,
          numPages: numPagesComics,
          currentPage: index + 1,
          prevPage: index === 1 ? `/comics/` : `/comics/${index}`,
          nextPage: `/comics/${index + 2}`,
        },
      })
    })

    Array.from({ length: numPagesComics }).forEach((_, index) => {
      createPage({
        path: index === 0 ? `/new/comics/` : `/new/comics/${index + 1}`,
        component: path.resolve(`src/templates/comic-list-new.jsx`),
        context: {
          limit: comicsPerPage,
          skip: index * comicsPerPage,
          numPages: numPagesComics,
          currentPage: index + 1,
          prevPage: index === 1 ? `/new/comics/` : `/new/comics/${index}`,
          nextPage: `/new/comics/${index + 2}`,
        },
      })
    })
  })
}
