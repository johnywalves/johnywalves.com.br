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
} from "./styled"

const SectionContact = () => {
  return (
    <Wrapper>
      <Content>
        <Info>
          <Line />
          <Header title={Strings.contact.title} light left />
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis
            justo at lorem ultrices blandit. Phasellus in diam lacinia,
            imperdiet ex in, congue metus. Sed vel blandit metus.
          </Description>
          <SocialWrapper>
            <SocialLinks about />
          </SocialWrapper>
          <Box />
        </Info>
        <Image />
      </Content>
    </Wrapper>
  )
}

export default SectionContact
