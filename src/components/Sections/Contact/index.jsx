import React from "react"

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
        <Image />
      </Content>
    </Wrapper>
  )
}

export default SectionContact
