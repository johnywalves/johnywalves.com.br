import React from "react"

import { Wrapper, Link, Title, Description } from "./styled"

const OnePage = ({ title, description, link }) => (
  <Wrapper>
    <Link href={link} target="_target" rel="noreferrer noopener">
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Link>
  </Wrapper>
)

export default OnePage
