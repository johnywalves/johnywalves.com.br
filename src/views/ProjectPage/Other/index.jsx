import React from "react"
import PropTypes from "prop-types"

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
        $negative={1}
        target="_blank"
        rel="nofollow noreferrer"
      >
        <ExternalLink />
      </OtherProjectLink>
      {sourceCode && (
        <OtherProjectLink
          href={sourceCode}
          aria-label={`${Strings.sourceCode} ${title}`}
          target="_blank"
          rel="nofollow noreferrer"
        >
          <Github />
        </OtherProjectLink>
      )}
    </OtherProjectLinks>
  </OtherProjectWrapper>
)

OtherProjects.propTypes = {
  view: PropTypes.string.isRequired,
  sourceCode: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default OtherProjects
