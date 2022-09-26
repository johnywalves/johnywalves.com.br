import React from "react"
import Anilink from "gatsby-plugin-transition-link/AniLink"

import Strings from "components/strings"
import Button from "components/Button"
import MenuSocial from "components/MenuSocial"

import Triangle from "vectors/Triangle"
import Arrow from "vectors/Arrow"
import ArrowOutline from "vectors/ArrowOutline"

import {
  NotFoundWrapper,
  NotFoundTitle,
  NotFoundDescription,
  BoxTriangle,
  BoxArrow,
  BoxArrowOutline,
  BoxSocial,
} from "./styled"

const NotFoundPage = () => (
  <NotFoundWrapper>
    <BoxTriangle>
      <Triangle />
    </BoxTriangle>
    <BoxArrowOutline>
      <ArrowOutline />
    </BoxArrowOutline>
    <BoxArrow>
      <Arrow />
    </BoxArrow>
    <BoxSocial>
      <MenuSocial vertical />
    </BoxSocial>

    <NotFoundTitle>404</NotFoundTitle>
    <NotFoundDescription>{Strings.notfound}</NotFoundDescription>
    <Anilink fade to="/" duration={0.75}>
      <Button>{Strings.backToHome}</Button>
    </Anilink>
  </NotFoundWrapper>
)

export default NotFoundPage
