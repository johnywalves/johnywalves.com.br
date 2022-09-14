import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Strings from "components/strings"

import { Wrapper, Cover, ImageCover, Content, Title } from "./styled"

const Hero = () => {
  const { show } = useStaticQuery(graphql`
    query {
      show: file(relativePath: { eq: "profile_neon.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 600
            height: 529
            layout: CONSTRAINED
            placeholder: TRACED_SVG
          )
        }
      }
    }
  `)

  return (
    <Wrapper>
      <Content>
        <Title>
          {Strings.projects.title.split(" ").map((word) => (
            <span key={word}>{word}</span>
          ))}
        </Title>
      </Content>
      <Cover>
        <ImageCover image={show.childImageSharp.gatsbyImageData} alt="" />
      </Cover>
    </Wrapper>
  )
}

export default Hero
