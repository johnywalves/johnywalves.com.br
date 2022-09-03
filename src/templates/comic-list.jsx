import React from "react"
import { graphql } from "gatsby"

import Layout from "components/Layout"
import Seo from "components/seo"
import PostItemComic from "components/PostItemComic"
import Pagination from "components/Pagination"

import * as S from "components/ListWrapper/styled"

const ComicList = (props) => {
  const comicsList = props.data.allMarkdownRemark.edges

  const { currentPage, prevPage, nextPage, numPages } = props.pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages

  return (
    <Layout>
      <S.ListWrapper>
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
            <PostItemComic
              key={index}
              slug={slug}
              date={date}
              title={title}
              transcription={transcription}
              featuredImage={featuredImage || comicImage}
            />
          )
        )}
      </S.ListWrapper>
      <Pagination
        isFirst={isFirst}
        isLast={isLast}
        currentPage={currentPage}
        numPages={numPages}
        prevPage={prevPage}
        nextPage={nextPage}
      />
    </Layout>
  )
}

export const query = graphql`
  query ComicsList($skip: Int!, $limit: Int!) {
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
            date(locale: "pt_br", formatString: "DD [de] MMMM [de] YYYY")
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
  <Seo location={location} title="Tirinhas" />
)
