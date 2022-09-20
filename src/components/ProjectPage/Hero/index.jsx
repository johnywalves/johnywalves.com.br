import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Strings from "components/strings"

import { Wrapper, Content, Title, Cover, ImageCover } from "./styled"

const Hero = () => {
  const { show } = useStaticQuery(graphql`
    query {
      show: file(relativePath: { eq: "profile_neon.png" }) {
        childImageSharp {
          gatsbyImageData(
            height: 500
            layout: CONSTRAINED
            placeholder: TRACED_SVG
          )
        }
      }
    }
  `)

  return (
    <Wrapper>
      <Cover />
      <Content>
        <Title>
          {Strings.projects.title.split(" ").map((word) => (
            <span key={word}>{word}</span>
          ))}
        </Title>
      </Content>
      <ImageCover image={show.childImageSharp.gatsbyImageData} alt="" />
    </Wrapper>
  )
}

export default Hero
