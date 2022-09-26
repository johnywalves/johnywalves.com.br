import React from "react"
import { graphql } from "gatsby"

import Strings from "components/strings"
import Blueprint from "components/Blueprint"
import Seo from "components/seo"
import ArticleItem from "components/ArticleItem"
import NavigationPage from "components/NavigationPage"

import ListsPages, { ArticleCategoryNavigatior } from "components/ListsPages"

const titlePage = "Artigos",
  descriptionPage = "Listagem de todos artigos publicados"

const BlogList = ({ data, pageContext }) => {
  const postList = data.allMarkdownRemark.edges,
    { currentPage, prevPage, nextPage, numPages, categories } = pageContext,
    isFirst = currentPage === 1,
    isLast = currentPage === numPages

  const ArticleNavigatior = () => (
    <ArticleCategoryNavigatior categories={categories} />
  )

  return (
    <Blueprint content title={titlePage} description={descriptionPage}>
      <ListsPages Navigator={ArticleNavigatior}>
        <h2>{Strings.posts.allArticles}</h2>
        {postList.map(
          ({
            node: {
              frontmatter: {
                date,
                title,
                category,
                description,
                tags,
                coverImage,
                featuredImage,
              },
              timeToRead,
              fields: { slug },
            },
          }) => (
            <ArticleItem
              key={slug}
              slug={slug}
              category={category}
              date={date}
              timeToRead={timeToRead}
              title={title}
              description={description}
              tags={tags}
              coverImage={coverImage}
              featuredImage={featuredImage}
            />
          )
        )}
        <NavigationPage
          isFirst={isFirst}
          isLast={isLast}
          currentPage={currentPage}
          numPages={numPages}
          prevPage={prevPage}
          nextPage={nextPage}
        />
      </ListsPages>
    </Blueprint>
  )
}

export const query = graphql`
  query PostListNew($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      filter: {
        frontmatter: { published: { ne: false }, category: { ne: "Comic" } }
      }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          frontmatter {
            date(locale: "pt_br", formatString: "DD [de] MMMM YYYY")
            title
            category
            description
            tags
            coverImage
            featuredImage {
              childImageSharp {
                gatsbyImageData(
                  width: 120
                  height: 120
                  layout: CONSTRAINED
                  placeholder: TRACED_SVG
                )
              }
            }
          }
          timeToRead
          fields {
            slug
          }
        }
      }
    }
  }
`

export default BlogList

export const Head = ({ location }) => (
  <Seo location={location} title={titlePage} description={descriptionPage} />
)
