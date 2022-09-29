import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { ParallaxProvider } from "react-scroll-parallax"
import PropTypes from "prop-types"

import Menu from "./Menu"
import Footer from "./Footer"
import { BlueprintWrapper } from "./styled"

import GeneralStyles from "styles/general"

const limitText = (number, text) =>
  text.length < number ? text : text.slice(number - 3) + "..."

const Blueprint = ({
  content,
  whiteLogo,
  openGraphImage,
  title,
  description,
  children,
}) => {
  const { site, thumbnail } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            siteUrl
          }
        }
        thumbnail: file(relativePath: { eq: "thumbnail.png" }) {
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
    `
  )

  const titleName = limitText(65, title || site.siteMetadata.title),
    metaDescription = limitText(
      155,
      description || site.siteMetadata.description
    ),
    pathImage = `${site.siteMetadata.siteUrl}${
      (openGraphImage || thumbnail)?.childImageSharp?.gatsbyImageData?.images
        ?.fallback.src
    }`,
    sizeImageWidth = (openGraphImage || thumbnail)?.childImageSharp
      ?.gatsbyImageData?.width,
    sizeImageHeight = (openGraphImage || thumbnail)?.childImageSharp
      ?.gatsbyImageData?.height

  return (
    <>
      <ParallaxProvider>
        <GeneralStyles />
        <BlueprintWrapper
          itemScope
          itemProp="mainContentOfPage"
          content={content ? 1 : 0}
        >
          <meta itemProp="headline" content={titleName} />
          <meta itemProp="description" content={metaDescription} />
          <link itemProp="thumbnailUrl" href={pathImage} />
          <span
            itemScope
            itemProp="image"
            itemType="http://schema.org/ImageObject"
          >
            <link itemProp="url" href={pathImage} />
            <meta itemProp="width" content={sizeImageWidth} />
            <meta itemProp="height" content={sizeImageHeight} />
          </span>
          <Menu hero={!content} whiteLogo={whiteLogo} />
          {children}
          {content && <Footer />}
        </BlueprintWrapper>
      </ParallaxProvider>
    </>
  )
}

Blueprint.propTypes = {
  children: PropTypes.node.isRequired,
  ogImage: PropTypes.object,
  content: PropTypes.bool,
  whiteLogo: PropTypes.bool,
}

Blueprint.defaultTypes = {
  content: false,
  whiteLogo: false,
}

export { default as Container } from "./Container"

export default Blueprint
