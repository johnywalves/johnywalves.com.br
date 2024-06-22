import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"

import Menu from "./Menu"
import Footer from "./Footer"
import { BlueprintWrapper } from "./styled"

import GeneralStyles from "styles/general"

const limitText = (number, text) =>
  text.length < number ? text : text.slice(number - 3) + "..."

const Blueprint = ({
  content = false,
  whiteLogo = false,
  openGraphImage,
  title,
  description,
  children,
}) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          siteUrl
        }
      }
    }
  `)

  const titleName = limitText(65, title || site.siteMetadata.title),
    metaDescription = limitText(
      155,
      description || site.siteMetadata.description
    ),
    pathImage = `${site.siteMetadata.siteUrl}/${
      openGraphImage || "/figures/thumbnail.jpg"
    }`,
    sizeImageWidth = 900,
    sizeImageHeight = 600

  return (
    <>
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
    </>
  )
}

Blueprint.propTypes = {
  content: PropTypes.bool,
  whiteLogo: PropTypes.bool,
  openGraphImage: PropTypes.object,
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export { default as Container } from "./Container"

export default Blueprint
