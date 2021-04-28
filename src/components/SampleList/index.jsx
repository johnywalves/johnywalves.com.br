import React from "react"

import Strings from "components/strings"
import { Header, Title, Description } from "../HomeList/styled"

import * as S from "./styled"

const ProjectList = () => (
  <S.Wrapper>
    <Header>
      <Title>{Strings.samples.title}</Title>
      <Description>{Strings.samples.description}</Description>
    </Header>
    <S.LinksWrapper>
      {Strings.samples.list.map(({ description, link }, index) => (
        <a
          key={index}
          href={link}
          target="_target"
          rel="noreferrer noopener"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      ))}
    </S.LinksWrapper>
  </S.Wrapper>
)

export default ProjectList
