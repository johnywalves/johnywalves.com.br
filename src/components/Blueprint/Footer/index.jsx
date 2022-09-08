import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import MenuSocial from "components/MenuSocial"
import Strings from "components/strings"

import Logo from "../Logo"

import {
  FooterWrapper,
  FooterContent,
  FooterDescription,
  FooterImageCover,
} from "./styled"

const Footer = () => {
  const { site, show } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      show: file(relativePath: { eq: "profile_neon.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 386
            height: 340
            layout: CONSTRAINED
            placeholder: TRACED_SVG
          )
        }
      }
    }
  `)

  return (
    <FooterWrapper>
      <FooterContent>
        <div>
          <Logo />
          <FooterDescription>
            <strong>{site.siteMetadata.title}</strong> | {Strings.position}
          </FooterDescription>
        </div>
        <MenuSocial />
      </FooterContent>
      <FooterImageCover image={show.childImageSharp.gatsbyImageData} />
    </FooterWrapper>
  )
}

export default Footer
