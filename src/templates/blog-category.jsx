import React from "react"
import { graphql } from "gatsby"

import Strings from "components/strings"
import Blueprint from "components/Blueprint"
import Seo from "components/seo"
import ArticleItem from "components/ArticleItem"
import NavigationPage from "components/NavigationPage"

import ListsPages, { ArticleCategoryNavigatior } from "components/ListsPages"

const BlogList = ({ data, pageContext }) => {
  const postList = data.allMarkdownRemark.edges

  const { currentPage, prevPage, nextPage, numPages, categories, category } =
    pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages

  const ArticleNavigatior = () => (
    <ArticleCategoryNavigatior categories={categories} />
  )

  return (
    <Blueprint content>
      <ListsPages Navigator={ArticleNavigatior}>
        <h2>
          {Strings.posts.category}: <strong>{category}</strong>
        </h2>
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
              slug={`/new${slug}`}
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
  query PostLCaterory($skip: Int!, $limit: Int!, $category: String!) {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      filter: {
        frontmatter: { published: { ne: false }, category: { eq: $category } }
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
  <Seo location={location} title="Artigos" />
)
