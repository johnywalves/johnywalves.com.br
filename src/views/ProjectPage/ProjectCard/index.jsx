import React from "react"
import PropTypes from "prop-types"

import Strings from "components/strings"

import { Github, ExternalLink } from "assets/icons"

import {
  ProjectCardWrapper,
  ProjectCardGlow,
  ProjectCardImageWrapper,
  ProjectCardImage,
  ProjectCardImageOverlay,
  ProjectCardBody,
  ProjectCardHeader,
  ProjectCardTitle,
  ProjectCardLinks,
  ProjectCardLink,
  ProjectCardDescription,
  ProjectCardHeadline,
  ProjectCardGlowDot,
  ProjectCardStack,
  ProjectCardStackItem,
} from "./styled"

const ProjectCard = ({
  url,
  sourceCode,
  name,
  headline,
  description,
  stack,
  image,
}) => (
  <ProjectCardWrapper>
    <ProjectCardGlow />

    {image && (
      <ProjectCardImageWrapper>
        <ProjectCardImage image={image} alt="" />
        <ProjectCardImageOverlay />
      </ProjectCardImageWrapper>
    )}

    <ProjectCardBody>
      <ProjectCardHeader>
        <ProjectCardTitle>{name}</ProjectCardTitle>
        <ProjectCardLinks>
          <ProjectCardLink
            href={url}
            aria-label={`${Strings.ui.labels.visit} ${name}`}
            target="_blank"
            rel="nofollow noreferrer"
          >
            <ExternalLink />
          </ProjectCardLink>
          {sourceCode && (
            <ProjectCardLink
              href={sourceCode}
              aria-label={`${Strings.ui.labels.sourceCode} ${name}`}
              target="_blank"
              rel="nofollow noreferrer"
            >
              <Github />
            </ProjectCardLink>
          )}
        </ProjectCardLinks>
      </ProjectCardHeader>

      <ProjectCardDescription>{description}</ProjectCardDescription>

      {headline && (
        <ProjectCardHeadline>
          <ProjectCardGlowDot />
          {headline}
        </ProjectCardHeadline>
      )}

      {stack && stack.length > 0 && (
        <ProjectCardStack>
          {stack.map((tech) => (
            <ProjectCardStackItem key={tech}>{tech}</ProjectCardStackItem>
          ))}
        </ProjectCardStack>
      )}
    </ProjectCardBody>
  </ProjectCardWrapper>
)

ProjectCard.propTypes = {
  url: PropTypes.string.isRequired,
  sourceCode: PropTypes.string,
  name: PropTypes.string.isRequired,
  headline: PropTypes.string,
  description: PropTypes.string.isRequired,
  stack: PropTypes.arrayOf(PropTypes.string),
  image: PropTypes.object,
}

export default ProjectCard
