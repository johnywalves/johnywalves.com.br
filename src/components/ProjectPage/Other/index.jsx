import React from "react"

import Strings from "components/strings"

import { Github } from "@styled-icons/fa-brands/Github"
import { ExternalLink } from "@styled-icons/heroicons-solid/ExternalLink"

import { Wrapper, Title, Description, Links, Link } from "./styled"

const Project = ({ view, sourceCode, title, description }) => (
  <Wrapper>
    <Title>{title}</Title>
    <Description>{description}</Description>
    <Links>
      <Link
        href={view}
        aria-label={`${Strings.visite} ${title}`}
        negative
        target="_blank"
        rel="noreferrer"
      >
        <ExternalLink />
      </Link>
      <Link
        href={sourceCode}
        aria-label={`${Strings.souceCode} ${title}`}
        target="_blank"
        rel="noreferrer"
      >
        <Github />
      </Link>
    </Links>
  </Wrapper>
)

export default Project
