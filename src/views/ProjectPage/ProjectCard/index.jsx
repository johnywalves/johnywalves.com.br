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
  ProjectCardMetaRow,
  ProjectCardMeta,
  ProjectCardBadge,
  ProjectCardYear,
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
  badge,
  year,
}) => (
  <ProjectCardWrapper>
    <ProjectCardGlow $badgeType={badge} />

    {image && (
      <ProjectCardImageWrapper>
        <ProjectCardImage image={image} alt="" />
        <ProjectCardImageOverlay />
      </ProjectCardImageWrapper>
    )}

    <ProjectCardBody>
      <ProjectCardHeader>
        <ProjectCardMetaRow>
          <ProjectCardMeta>
            {badge && <ProjectCardBadge $type={badge}>{badge}</ProjectCardBadge>}
            {year && <ProjectCardYear>{year}</ProjectCardYear>}
          </ProjectCardMeta>
          <ProjectCardLinks>
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
            <ProjectCardLink
              href={url}
              aria-label={`${Strings.ui.labels.visit} ${name}`}
              target="_blank"
              rel="nofollow noreferrer"
            >
              <ExternalLink />
            </ProjectCardLink>
          </ProjectCardLinks>
        </ProjectCardMetaRow>
        <ProjectCardTitle>{name}</ProjectCardTitle>
      </ProjectCardHeader>

      <ProjectCardDescription>{description}</ProjectCardDescription>

      {headline && (
        <ProjectCardHeadline>
          <ProjectCardGlowDot $type={badge} />
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
  badge: PropTypes.string,
  year: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default ProjectCard
