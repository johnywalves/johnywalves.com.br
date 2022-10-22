import React from "react"

import Strings from "components/strings"

import { Github, ExternalLink } from "assets/icons"

import {
  OtherProjectWrapper,
  OtherProjectTitle,
  OtherProjectDescription,
  OtherProjectLinks,
  OtherProjectLink,
} from "./styled"

const OtherProjects = ({ view, sourceCode, title, description }) => (
  <OtherProjectWrapper>
    <OtherProjectTitle>{title}</OtherProjectTitle>
    <OtherProjectDescription>{description}</OtherProjectDescription>
    <OtherProjectLinks>
      <OtherProjectLink
        href={view}
        aria-label={`${Strings.visite} ${title}`}
        negative
        target="_blank"
        rel="nofollow noreferrer"
      >
        <ExternalLink />
      </OtherProjectLink>
      {sourceCode && (
        <OtherProjectLink
          href={sourceCode}
          aria-label={`${Strings.souceCode} ${title}`}
          target="_blank"
          rel="nofollow noreferrer"
        >
          <Github />
        </OtherProjectLink>
      )}
    </OtherProjectLinks>
  </OtherProjectWrapper>
)

export default OtherProjects
