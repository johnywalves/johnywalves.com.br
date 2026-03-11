import React from "react"

import Strings from "components/strings"

import { Github, ExternalLink } from "assets/icons"

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
  url,
  sourceCode,
  image,
  imagePosition,
  name,
  description,
}) => (
  <Wrapper>
    <Cover>
      <ImageCover
        image={image}
        style={{ objectPosition: imagePosition || "top" }}
        alt=""
      />
    </Cover>
    <Label>
      <Title>{name}</Title>
      <Description>{description}</Description>
    </Label>
    <Links>
      <Link
        href={url}
        aria-label={`${Strings.ui.labels.visit} ${name}`}
        $negative={1}
        target="_blank"
        rel="nofollow noreferrer"
      >
        <ExternalLink />
      </Link>
      {sourceCode && (
        <Link
          href={sourceCode}
          aria-label={`${Strings.ui.labels.sourceCode} ${name}`}
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
