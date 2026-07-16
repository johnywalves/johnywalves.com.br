import React from "react"

import Strings from "components/strings"

import { Wrapper, Content, Title, Cover } from "./styled"
import TypingCode from "./TypingCode"

const Hero = () => (
  <Wrapper>
    <TypingCode />
    <Cover />
    <Content>
      <Title>
        {Strings.projects.title.split(" ").map((word) => (
          <span key={word}>{word}</span>
        ))}
      </Title>
    </Content>
  </Wrapper>
)

export default Hero
