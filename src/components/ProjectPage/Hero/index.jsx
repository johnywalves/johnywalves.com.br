import React from "react"
import { Parallax } from "react-scroll-parallax"

import Strings from "components/strings"

import { Wrapper, Cover, Content, Title, Description } from "./styled"

const Hero = () => {
  return (
    <Wrapper>
      <Parallax translateY={[-200, 100]}>
        <Cover></Cover>
      </Parallax>
      <Parallax translateY={[-140, 100]}>
        <Content>
          <Title>{Strings.projects.title}</Title>
          <Description>{Strings.projects.description}</Description>
        </Content>
      </Parallax>
    </Wrapper>
  )
}

export default Hero
