import React from "react"
import { Parallax } from "react-scroll-parallax"
import { useStaticQuery, graphql } from "gatsby"

import Strings from "components/strings"
import SocialLinks from "components/SocialLinks"
import { Header } from "components/Cards"

import Arrow from "vectors/Arrow"
import ArrowOutline from "vectors/ArrowOutline"
import TriangleNeon from "vectors/TriangleNeon"

import {
  Wrapper,
  Content,
  Line,
  Info,
  Description,
  SocialWrapper,
  Image,
  Box,
  BoxSide,
} from "./styled"

const SectionContact = () => {
  const { avatarImage } = useStaticQuery(graphql`
    query {
      avatarImage: file(relativePath: { eq: "johnywalves.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 512
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
        <Info>
          <Line />
          <Header title={Strings.contact.title} light left />
          <Description>{Strings.contact.about}</Description>
          <SocialWrapper>
            <SocialLinks about />
          </SocialWrapper>
          <Box>
            <Parallax translateY={[-50, 150]}>
              <ArrowOutline height="250" width="250" />
            </Parallax>
            <Parallax translateY={[50, -150]}>
              <Arrow height="250" width="250" />
            </Parallax>
          </Box>
        </Info>
        <Image image={avatarImage.childImageSharp.gatsbyImageData} alt="" />
      </Content>

      <BoxSide>
        <Parallax translateY={[-50, 80]}>
          <TriangleNeon height="150" width="150" />
        </Parallax>
        <Parallax translateY={[-100, 175]}>
          <TriangleNeon height="300" width="300" />
        </Parallax>
        <Parallax translateY={[-100, 350]}>
          <TriangleNeon height="200" width="200" />
        </Parallax>
      </BoxSide>
    </Wrapper>
  )
}

export default SectionContact
