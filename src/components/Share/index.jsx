import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { Twitter } from "@styled-icons/fa-brands/Twitter"
import { Linkedin } from "@styled-icons/fa-brands/Linkedin"

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

  // https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fespirian.co.uk%2Flinkedin-links%2F
  // https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fjohnywalves.com.br%2Fconstruindo-layout-2.0%2F
  // https://www.linkedin.com/sharing/share-offsite/?mini=true&url=https%3A%2F%2Fwww.johnywalves.com.br
  // https://www.linkedin.com/shareArticle?url=https%3A%2F%2Fwww.google.com&title=This+is+google+a+search+engin

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
