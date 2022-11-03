import React from "react"
import { graphql } from "gatsby"

import GeneralStyles from "styles/general"

import {
  OpenGraphicWrapper,
  OpenGraphicCover,
  OpenGraphicContent,
  OpenGraphicHeader,
  OpenGraphicData,
  OpenGraphicTime,
  OpenGraphicTitle,
  OpenGraphicCategory,
  OpenGraphicFooter,
  OpenGraphicAvatar,
  OpenGraphicFooterContent,
  OpenGraphicName,
  OpenGraphicUrl,
  OpenGraphicAuthor,
} from "components/ArticleOpenGraphic/styled"

const openGraphImage = ({ data, pageContext }) => {
  const {
      markdownRemark: {
        frontmatter: { date, category, title, openGraphImage },
        timeToRead,
      },
      site: {
        siteMetadata: { siteUrlWithoutProtocol, author, title: titleSite },
      },
      avatarImage,
    } = data,
    { slug } = pageContext

  return (
    <>
      <GeneralStyles />
      <OpenGraphicWrapper id="ogimage">
        <OpenGraphicCover
          src={
            openGraphImage.childImageSharp.gatsbyImageData.images.fallback.src
          }
          alt=""
        />
        <OpenGraphicContent>
          <OpenGraphicHeader>
            <OpenGraphicData>
              <OpenGraphicCategory>{category}</OpenGraphicCategory>
              <OpenGraphicTime>
                {date} <span>●</span> {timeToRead} min de leitura
              </OpenGraphicTime>
            </OpenGraphicData>
          </OpenGraphicHeader>

          <OpenGraphicTitle>{title}</OpenGraphicTitle>

          <OpenGraphicFooter>
            <OpenGraphicAvatar
              src={
                avatarImage.childImageSharp.gatsbyImageData.images.fallback.src
              }
              alt=""
            />
            <OpenGraphicFooterContent>
              <OpenGraphicName>{titleSite}</OpenGraphicName>
              <OpenGraphicUrl>{`${siteUrlWithoutProtocol}${slug}`}</OpenGraphicUrl>
              <OpenGraphicAuthor>{`@${author}`}</OpenGraphicAuthor>
            </OpenGraphicFooterContent>
          </OpenGraphicFooter>
        </OpenGraphicContent>
      </OpenGraphicWrapper>
    </>
  )
}

export const query = graphql`
  query OpenGraphic($slug: String!) {
    site {
      siteMetadata {
        title
        author
        siteUrlWithoutProtocol
      }
    }
    avatarImage: file(relativePath: { eq: "johnywalves.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 128
          height: 128
          layout: FIXED
          placeholder: NONE
        )
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        date(locale: "pt_br", formatString: "DD [de] MMMM [de] YYYY")
        title
        description
        category
        tags
        openGraphImage: featuredImage {
          childImageSharp {
            gatsbyImageData(
              width: 900
              aspectRatio: 1.5
              layout: FIXED
              placeholder: NONE
              formats: [JPG]
            )
          }
        }
      }
      timeToRead
    }
  }
`

export default openGraphImage
