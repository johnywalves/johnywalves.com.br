import React from "react"
import { graphql } from "gatsby"

import Strings from "components/strings"
import Blueprint from "components/Blueprint"
import Seo from "components/seo"
import ArticleItem from "components/ArticleItem"
import NavigationPage from "components/NavigationPage"

import ListsPages, { ArticleCategoryNavigatior } from "components/ListsPages"

const thumbnailPage = "/figures/thumbnail_posts.jpg"

const BlogCategory = ({ data, pageContext }) => {
  const postList = data.allMarkdownRemark.edges
  const { currentPage, prevPage, nextPage, numPages, categories, category } =
    pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const titlePage = `Artigos sobre ${category}`
  const descriptionPage = `Artigos da categoria ${category}`

  const ArticleNavigatior = () => (
    <ArticleCategoryNavigatior categories={categories} />
  )

  return (
    <Blueprint
      content
      title={titlePage}
      description={descriptionPage}
      openGraphImage={thumbnailPage}
    >
      <ListsPages Navigator={ArticleNavigatior}>
        <h1>
          {Strings.posts.category}: <strong>{category}</strong>
        </h1>
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
  query PostsCaterory($skip: Int!, $limit: Int!, $category: String!) {
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      filter: {
        frontmatter: { published: { ne: false }, category: { eq: $category } }
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

export default BlogCategory

export const Head = ({ location, pageContext }) => {
  const { category } = pageContext
  const titlePage = `Artigos sobre ${category}`
  const descriptionPage = `Artigos da categoria ${category}`

  return (
    <Seo location={location}
      image={thumbnailPage}
      imagenWidth={1200}
      imageHeight={628}
      title={titlePage}
      description={descriptionPage}
    />
  )
}
