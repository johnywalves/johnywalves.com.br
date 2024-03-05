import React from "react"
import { Parallax } from "react-scroll-parallax"
import { useStaticQuery, graphql } from "gatsby"

import Strings from "components/strings"
import MenuSocial from "components/MenuSocial"
import { Header } from "components/Cards"

import Arrow from "assets/vectors/Arrow"
import ArrowOutline from "assets/vectors/ArrowOutline"
import TriangleNeon from "assets/vectors/TriangleNeon"

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
          gatsbyImageData(width: 400, layout: CONSTRAINED, placeholder: BLURRED)
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
            <MenuSocial contact />
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
