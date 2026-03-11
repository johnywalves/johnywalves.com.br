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

const OtherProjects = ({ url, sourceCode, name, description }) => (
  <OtherProjectWrapper>
    <OtherProjectTitle>{name}</OtherProjectTitle>
    <OtherProjectDescription>{description}</OtherProjectDescription>
    <OtherProjectLinks>
      <OtherProjectLink
        href={url}
        aria-label={`${Strings.ui.labels.visit} ${name}`}
        $negative={1}
        target="_blank"
        rel="nofollow noreferrer"
      >
        <ExternalLink />
      </OtherProjectLink>
      {sourceCode && (
        <OtherProjectLink
          href={sourceCode}
          aria-label={`${Strings.ui.labels.sourceCode} ${name}`}
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
  url: PropTypes.string.isRequired,
  sourceCode: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default OtherProjects
