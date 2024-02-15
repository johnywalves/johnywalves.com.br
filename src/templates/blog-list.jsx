import React from "react"
import { graphql } from "gatsby"

import Strings from "components/strings"
import Blueprint from "components/Blueprint"
import Seo from "components/seo"
import ArticleItem from "components/ArticleItem"
import NavigationPage from "components/NavigationPage"

import ListsPages, { ArticleCategoryNavigator } from "components/ListsPages"

const titlePage = "Artigos"
const descriptionPage =
  "Artigos sobre tecnologias, conceitos e alguns pensamentos"
const thumbnailPage = "/figures/thumbnail_posts.jpg"

const BlogList = ({
  data,
  pageContext: { currentPage, prevPage, nextPage, numPages, categories },
}) => {
  const postList = data.allMarkdownRemark.edges
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages

  const ArticleNavigator = () => (
    <ArticleCategoryNavigator categories={categories} />
  )

  return (
    <Blueprint content title={titlePage} description={descriptionPage}>
      <ListsPages Navigator={ArticleNavigator}>
        <h1>{Strings.posts.allArticles}</h1>
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
      sort: { frontmatter: { date: DESC } }
      filter: {
        frontmatter: { published: { ne: false }, category: { ne: "Comic" } }
      }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          frontmatter {
            date(locale: "pt_br", formatString: "DD [de] MMMM [de] YYYY")
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
                  placeholder: BLURRED
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
  <Seo
    location={location}
    image={thumbnailPage}
    imageWidth={1200}
    imageHeight={628}
    title={titlePage}
    description={descriptionPage}
  />
)
