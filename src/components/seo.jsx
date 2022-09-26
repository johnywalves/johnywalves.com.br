import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

const limitText = (number, text) =>
  text.length < number ? text : text.slice(number - 3) + "..."

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

  const titleName = limitText(
      65,
      title ? `${title} | ${site.siteMetadata.title}` : site.siteMetadata.title
    ),
    metaDescription = limitText(
      155,
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
      <meta name="image" content={pathImage} />
      <meta name="author" content={site.siteMetadata.title} />

      <meta name="og:type" property="og:type" content="website" />
      <meta name="og:url" property="og:url" content={urlContent} />
      <meta name="og:site_name" property="og:site_name" content={titleName} />
      <meta name="og:title" property="og:title" content={titleName} />
      <meta
        name="og:description"
        property="og:description"
        content={metaDescription}
      />
      <meta
        name="og:image"
        property="og:image"
        itemProp="image"
        content={pathImage}
      />
      <meta
        property="og:image:secure_url"
        itemProp="image"
        content={pathImage}
      />
      <meta
        name="og:image:type"
        property="og:image:type"
        content="image/jpeg"
      />
      <meta
        name="og:image:width"
        property="og:image:width"
        content={sizeImageWidth}
      />
      <meta
        name="og:image:height"
        property="og:image:height"
        content={sizeImageHeight}
      />
      <meta name="og:locale" property="og:locale" content={lang} />
      <meta name="og:updated_time" property="og:updated_time" content="0" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={urlContent} />
      <meta name="twitter:title" content={titleName} />
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
