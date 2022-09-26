import React from "react"
import { graphql } from "gatsby"

import Blueprint from "components/Blueprint"
import Seo from "components/seo"
import ComicItem from "components/ComicItem"
import NavigationPage from "components/NavigationPage"

import ListsPages, { ArticleComicNavigator } from "components/ListsPages"

const titlePage = "Tirinhas",
  descriptionPage = "Listagens tirinhas geradas e publicacas"

const ComicList = (props) => {
  const comicsList = props.data.allMarkdownRemark.edges,
    { currentPage, prevPage, nextPage, numPages } = props.pageContext,
    isFirst = currentPage === 1,
    isLast = currentPage === numPages

  return (
    <Blueprint content title={titlePage} description={descriptionPage}>
      <ListsPages Navigator={ArticleComicNavigator}>
        {comicsList.map(
          (
            {
              node: {
                frontmatter: {
                  date,
                  title,
                  transcription,
                  featuredImage,
                  comicImage,
                },
                fields: { slug },
              },
            },
            index
          ) => (
            <ComicItem
              key={index}
              slug={slug}
              date={date}
              title={title}
              transcription={transcription}
              featuredImage={featuredImage || comicImage}
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
  query ComicsListNew($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      filter: {
        frontmatter: { published: { ne: false }, category: { eq: "Comic" } }
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
            transcription
            tags
            coverImage
            featuredImage {
              childImageSharp {
                gatsbyImageData(
                  width: 800
                  layout: CONSTRAINED
                  placeholder: TRACED_SVG
                )
              }
            }
            comicImage {
              childImageSharp {
                gatsbyImageData(
                  width: 600
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

export default ComicList

export const Head = ({ location }) => (
  <Seo location={location} title={titlePage} description={descriptionPage} />
)
