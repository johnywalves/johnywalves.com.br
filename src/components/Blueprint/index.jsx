import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { ParallaxProvider } from "react-scroll-parallax"
import PropTypes from "prop-types"

import Menu from "./Menu"
import Footer from "./Footer"
import { BlueprintWrapper } from "./styled"

import GeneralStyles from "styles/general"

import "styles/box-shadow.css"

const Blueprint = ({ content, whiteLogo, openGraphImage, children }) => {
  const { site, thumbnail } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
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

  const pathImage = `${site.siteMetadata.siteUrl}${
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
        <BlueprintWrapper content={content ? 1 : 0}>
          <Menu hero={!content} whiteLogo={whiteLogo} />
          {children}
          {content && <Footer />}
        </BlueprintWrapper>
      </ParallaxProvider>
      <link itemprop="thumbnailUrl" href={pathImage} />
      <span itemprop="image" itemscope itemtype="http://schema.org/ImageObject">
        <link itemprop="url" href={pathImage} />
        <meta itemprop="width" content={sizeImageWidth} />
        <meta itemprop="height" content={sizeImageHeight} />
      </span>
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
