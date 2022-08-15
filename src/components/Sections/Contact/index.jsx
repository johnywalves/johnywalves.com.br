import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Strings from "components/strings"
import SocialLinks from "components/SocialLinks"
import { Header } from "components/Cards"

import {
  Wrapper,
  Content,
  Line,
  Info,
  Description,
  SocialWrapper,
  Image,
  Box,
  CurvePrimary,
  CurveSecondary,
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
            <CurvePrimary />
            <CurveSecondary />
          </Box>
        </Info>
        <Image image={avatarImage.childImageSharp.gatsbyImageData} alt="" />
      </Content>
    </Wrapper>
  )
}

export default SectionContact
