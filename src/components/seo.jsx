import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

const limitDescription = (text) =>
  text.length < 155 ? text : text.slice(152) + "..."

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
  const { site, thumbnail } = useStaticQuery(
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

  const titleName = title
      ? `${title} | ${site.siteMetadata.title}`
      : site.siteMetadata.title,
    metaDescription = limitDescription(
      description || site.siteMetadata.description
    ),
    pathImage = `${site.siteMetadata.siteUrl}${
      image || thumbnail?.childImageSharp?.gatsbyImageData?.images?.fallback.src
    }`,
    sizeImageWidth =
      imagenWidth || thumbnail?.childImageSharp?.gatsbyImageData?.width,
    sizeImageHeight =
      imageHeight || thumbnail?.childImageSharp?.gatsbyImageData?.height,
    urlContent = `${site.siteMetadata.siteUrl}${location.pathname}`

  return (
    <>
      <title>{titleName}</title>
      <meta name="title" content={titleName} />
      <meta name="description" content={metaDescription} />
      <meta name="author" content={site.siteMetadata.title} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={urlContent} />
      <meta property="og:site_name" content={titleName} />
      <meta property="og:title" content={title || site.siteMetadata.title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" itemProp="image" content={pathImage} />
      <meta
        property="og:image:secure_url"
        itemProp="image"
        content={pathImage}
      />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content={sizeImageWidth} />
      <meta property="og:image:height" content={sizeImageHeight} />
      <meta property="og:locale" content={lang} />
      <meta property="og:updated_time" content="1440432930" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={urlContent} />
      <meta name="twitter:title" content={title || site.siteMetadata.title} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:domain" content={site.siteMetadata.author} />
      <meta name="twitter:site" content={site.siteMetadata.siteUrl} />
      <meta name="twitter:creator" content={site.siteMetadata.twitter} />
      <meta name="twitter:image:src" content={pathImage} />

      <link
        rel="canonical"
        href={urlContent}
        data-baseprotocol="https:"
        data-basehost={site.siteMetadata.siteUrlWithoutProtocol}
      />

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
