import React, { ReactNode } from "react"

import { Github, ExternalLink } from "assets/icons"

import CardWrapper from "../CardWrapper"

import { Banner, Title, Links, SourceCode } from "./styled"
import { LangFile } from "../../../assets/lang/types"

const Project = ({
  name,
  sourceCode,
  url,
  image,
}: LangFile["projects"]["list"][number]) => {
  return (
    <CardWrapper cover={image}>
      <Banner>
        {name && <Title>{name}</Title>}
        <Links>
          <SourceCode
            href={url}
            target="_target"
            rel="noreferrer noopener"
            aria-label={`go to ${name}`}
            $negative={1}
          >
            <ExternalLink />
          </SourceCode>
          {sourceCode && (
            <SourceCode
              href={sourceCode}
              target="_target"
              rel="noreferrer noopener"
              aria-label={`source code of the ${name}`}
            >
              <Github />
            </SourceCode>
          )}
        </Links>
      </Banner>
    </CardWrapper>
  )
}

export default Project
