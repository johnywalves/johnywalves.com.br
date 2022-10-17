import React from "react"

import Strings from "components/strings"

import { Github } from "@styled-icons/fa-brands/Github"
import { ExternalLink } from "@styled-icons/heroicons-solid/ExternalLink"

import {
  Wrapper,
  Cover,
  ImageCover,
  Label,
  Title,
  Description,
  Links,
  Link,
} from "./styled"

const Project = ({
  view,
  sourceCode,
  image,
  coverPosition,
  title,
  description,
}) => (
  <Wrapper>
    <Cover>
      <ImageCover
        image={image}
        style={{ objectPosition: coverPosition || "top" }}
        alt=""
      />
    </Cover>
    <Label>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Label>
    <Links>
      <Link
        href={view}
        aria-label={`${Strings.visite} ${title}`}
        negative
        target="_blank"
        rel="nofollow noreferrer"
      >
        <ExternalLink />
      </Link>
      {sourceCode && (
        <Link
          href={sourceCode}
          aria-label={`${Strings.souceCode} ${title}`}
          target="_blank"
          rel="nofollow noreferrer"
        >
          <Github />
        </Link>
      )}
    </Links>
  </Wrapper>
)

export default Project
