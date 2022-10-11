import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

const limitText = (number, text) =>
  text.length < number ? text : text.slice(0, number - 3) + "..."

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

  const titleName = limitText(
      65,
      title ? `${title} | ${site.siteMetadata.title}` : site.siteMetadata.title
    ),
    metaDescription = limitText(
      155,
      description || site.siteMetadata.description
    ),
    pathImage = `${site.siteMetadata.siteUrl}${
      image || "/figures/thumbnail.jpg"
    }`,
    pathIcon = `${site.siteMetadata.siteUrl}/figures/favicon.png`,
    sizeImageWidth = imagenWidth || 900,
    sizeImageHeight = imageHeight || 600,
    urlContent = `${site.siteMetadata.siteUrl}${location.pathname}`

  return (
    <>
      <title>{titleName}</title>
      <meta name="title" content={titleName} />
      <meta name="description" content={metaDescription} />
      <meta name="image" content={pathImage} />
      <meta name="author" content={site.siteMetadata.title} />

      <meta name="og:type" property="og:type" content="website" />
      <meta name="og:url" property="og:url" content={urlContent} />
      <meta name="og:site_name" property="og:site_name" content={titleName} />
      <meta name="og:title" property="og:title" content={titleName} />
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
      <meta property="og:updated_time" content="0" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={urlContent} />
      <meta name="twitter:title" content={titleName} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:domain" content={site.siteMetadata.author} />
      <meta name="twitter:site" content={site.siteMetadata.siteUrl} />
      <meta name="twitter:creator" content={site.siteMetadata.twitter} />
      <meta name="twitter:image:src" content={pathImage} />

      <meta name="msapplication-TileColor" content="#e0138c" />
      <meta name="msapplication-TileImage" content={pathIcon} />

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
