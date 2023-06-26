const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

// To add the slug field to each post
/**
 * @type {import('gatsby').GatsbyNode['onCreateNode']}
 */
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

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return graphql(`
    query {
      AllPosts: allMarkdownRemark(
        sort: { frontmatter: { date: DESC } }
        filter: {
          frontmatter: { category: { ne: "Comic" } }
        }
      ) {
        edges {
          node {
            frontmatter {
              date(locale: "pt_br", formatString: "DD [de] MMMM [de] YYYY")
              title
              category
              description
              featuredImage {
                childImageSharp {
                  gatsbyImageData(
                    width: 1200
                    height: 500
                    layout: CONSTRAINED
                    placeholder: BLURRED
                  )
                }
              }
              published
            }
            timeToRead
            fields {
              slug
            }
          }
        }
      }
      AllComics: allMarkdownRemark(
        sort: { frontmatter: { date: DESC } }
        filter: {
          frontmatter: { published: { ne: false }, category: { eq: "Comic" } }
        }
      ) {
        edges {
          node {
            frontmatter {
              date(locale: "pt_br", formatString: "DD [de] MMMM [de] YYYY")
              title
              number
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

    const AllPostsEdges = result.data.AllPosts.edges.filter(({ node: { frontmatter: { published } } }) => published !== false)

    const categories = Object.entries(AllPostsEdges
      .reduce((acumulator, { node: { frontmatter: { category } } }) => {
        const currCount = acumulator[category] ?? 0;
        return {
          ...acumulator,
          [category]: currCount + 1,
        }
      }, {}))
      .sort(([, a], [, b]) => b - a)
      .map(([category,]) => category)

    // Páginas de artigos
    result.data.AllPosts.edges.forEach(({ node }) => {
      // Open Graphics Images
      createPage({
        path: `/__generated${node.fields.slug}`,
        component: path.resolve(`src/templates/open-graph-image.jsx`),
        context: {
          slug: node.fields.slug
        },
      })

      // Página dos Artigos
      const bylast = AllPostsEdges.find(({ node: nodeLast }) =>
        node.fields.slug !== nodeLast.fields.slug
      ),
        byCategory = AllPostsEdges.find(({ node: nodeLast }) =>
          node.fields.slug !== nodeLast.fields.slug
          && node.frontmatter.category === nodeLast.frontmatter.category
          && (!bylast || bylast.node.fields.slug !== nodeLast.fields.slug)
        )

      createPage({
        path: node.fields.slug,
        component: path.resolve(`src/templates/blog-post.jsx`),
        context: {
          slug: node.fields.slug,
          recommendedLast: bylast?.node,
          recommendedCategory: byCategory?.node
        },
      })
    })

    // Listagem de artigos
    const postsPerPage = 12
    const numPagesPosts = Math.ceil(
      AllPostsEdges.length / postsPerPage
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
          categories
        },
      })
    })

    // Listagem de artigos por categorias
    categories.forEach(name => {
      const categoryName = name.toLowerCase()
      const numPagesCategory = Math.ceil(
        AllPostsEdges.filter(({ node: { frontmatter: { category } } }) => category === name).length / postsPerPage
      )

      Array.from({ length: numPagesCategory }).forEach((_, index) => {
        createPage({
          path: index === 0 ? `/category/${categoryName}/` : `/category/${categoryName}/${index + 1}`,
          component: path.resolve(`src/templates/blog-category.jsx`),
          context: {
            limit: postsPerPage,
            skip: index * postsPerPage,
            category: name,
            numPages: numPagesCategory,
            currentPage: index + 1,
            prevPage: index === 1 ? `/category/${categoryName}/` : `/category/${categoryName}/${index}`,
            nextPage: `/category/${categoryName}/${index + 2}`,
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
  })
}
