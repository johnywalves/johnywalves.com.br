import React from "react"
import { graphql } from "gatsby"

import Hamster from "assets/vectors/Hamster"

import Strings from "components/strings"
import Blueprint from "components/Blueprint"
import Seo from "components/seo"
import ComicItem from "components/ComicItem"
import NavigationPage from "components/NavigationPage"
import ListsPages, {
  ArticleComicNavigator,
  SeparatorList,
} from "components/ListsPages"

const titlePage = "Tirinhas"
const descriptionPage = "Tirinhas sobre a vida de trabalhadores de tecnologia"
const thumbnailPage = "/figures/thumbnail_comics.jpg"

const ComicList = (props) => {
  const comicsList = props.data.allMarkdownRemark.edges,
    { currentPage, prevPage, nextPage, numPages } = props.pageContext,
    isFirst = currentPage === 1,
    isLast = currentPage === numPages

  return (
    <Blueprint content title={titlePage} description={descriptionPage}>
      <ListsPages Navigator={ArticleComicNavigator}>
        <h1 className="comics">{Strings.comics.allComics}</h1>
        {comicsList.map(
          (
            {
              node: {
                frontmatter: {
                  date,
                  title,
                  transcription,
                  number,
                  featuredImage,
                  comicImage,
                },
                fields: { slug },
              },
            },
            index
          ) => (
            <span key={index}>
              <ComicItem
                slug={slug}
                number={number}
                date={date}
                title={title}
                transcription={transcription}
                featuredImage={featuredImage || comicImage}
              />
              <SeparatorList>
                <Hamster />
              </SeparatorList>
            </span>
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
            date(locale: "pt_br", formatString: "DD [de] MMMM [de] YYYY")
            title
            category
            transcription
            number
            tags
            coverImage
            featuredImage {
              childImageSharp {
                gatsbyImageData(
                  width: 900
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
  <Seo
    location={location}
    image={thumbnailPage}
    imagenWidth={1200}
    imageHeight={628}
    title={titlePage}
    description={descriptionPage}
  />
)

