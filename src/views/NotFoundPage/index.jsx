import React from "react"
import { Link } from "gatsby"

import Strings from "components/strings"
import Button from "components/Button"
import MenuSocial from "components/MenuSocial"

import Triangle from "assets/vectors/Triangle"
import Arrow from "assets/vectors/Arrow"
import ArrowOutline from "assets/vectors/ArrowOutline"

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
    <NotFoundDescription>{Strings.notFound}</NotFoundDescription>
    <Link to="/">
      <Button>{Strings.backToHome}</Button>
    </Link>
  </NotFoundWrapper>
)

export default NotFoundPage
