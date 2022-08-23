import React from "react"

import Strings from "components/strings"
import { Header } from "components/Cards"

import { Wrapper, LinksWrapper, Link, Title, Description } from "./styled"

const OnePageList = () => (
  <Wrapper>
    <Header title={"One page projects"} left light small />
    <LinksWrapper>
      {Strings.samples.list.map(({ title, description, link }, index) => (
        <Link
          key={index}
          href={link}
          target="_target"
          rel="noreferrer noopener"
        >
          <Title>{title}</Title>
          <Description>{description}</Description>
        </Link>
      ))}
    </LinksWrapper>
  </Wrapper>
)

export default OnePageList
