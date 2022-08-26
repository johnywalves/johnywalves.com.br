import React from "react"

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
  cover,
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
        aria-label={cover}
        negative
        target="_blank"
        rel="noreferrer"
      >
        <ExternalLink />
      </Link>
      <Link
        href={sourceCode}
        aria-label={cover}
        target="_blank"
        rel="noreferrer"
      >
        <Github />
      </Link>
    </Links>
  </Wrapper>
)

export default Project
