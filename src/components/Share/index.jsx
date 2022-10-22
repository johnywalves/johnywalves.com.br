import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { Twitter, Linkedin } from "assets/icons"

import { ShareWrapper, ShareTitle, ShareLinks } from "./styled"

const Share = ({ slug, title }) => {
  const {
    site: {
      siteMetadata: { title: siteTitle, siteUrl },
    },
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            siteUrl
          }
        }
      }
    `
  )

  const url = `${siteUrl}${slug}`,
    encoded = encodeURIComponent(url)

  return (
    <ShareWrapper>
      <ShareTitle>Compartilhe: </ShareTitle>
      <ShareLinks>
        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?mini=true&url=${encoded}`}
          target="_blank"
          rel="nofollow noreferrer"
          aria-label="Share LinkedIn"
        >
          <Linkedin />
        </a>
        <a
          href={`https://twitter.com/intent/tweet?text=${title}%20%7C%20${siteTitle}%20${url}`}
          target="_blank"
          rel="nofollow noreferrer"
          aria-label="Share TWitter"
        >
          <Twitter />
        </a>
      </ShareLinks>
    </ShareWrapper>
  )
}

export default Share
