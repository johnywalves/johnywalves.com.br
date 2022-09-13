import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

function SEO({
  location,
  description,
  lang,
  title,
  image,
  imagenWidth,
  imageHeight,
  children,
}) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
      }
    `
  )

  const titleName = title
      ? `${title} | ${site.siteMetadata.title}`
      : site.siteMetadata.title,
    metaDescription = description || site.siteMetadata.description,
    pathImage = `${site.siteMetadata.siteUrl}${
      image || "/figures/thumbnail.png"
    }`,
    sizeImageWidth = imagenWidth || 300,
    sizeImageHeight = imageHeight || 148,
    urlContent = `${site.siteMetadata.siteUrl}${location.pathname}`

  return (
    <>
      <title>{titleName}</title>
      <meta name="title" content={titleName} />
      <meta name="description" content={metaDescription} />
      <meta name="author" content={site.siteMetadata.author} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={urlContent} />
      <meta property="og:site_name" content={titleName} />
      <meta property="og:title" content={title || site.siteMetadata.title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={pathImage} />
      <meta property="og:image:width" content={sizeImageWidth} />
      <meta property="og:image:height" content={sizeImageHeight} />
      <meta property="og:locale" content={lang} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={urlContent} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:creator" content={site.siteMetadata.author} />
      <meta name="twitter:image" itemProp="image" content={pathImage} />
      <meta name="twitter:image:src" content={pathImage} />

      {children}
    </>
  )
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  title: PropTypes.string.isRequired,
}

SEO.defaultProps = {
  lang: `pt_BR`,
  description: ``,
}

export default SEO
