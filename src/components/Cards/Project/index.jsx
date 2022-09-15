import React from "react"
import PropTypes from "prop-types"

import { Github } from "@styled-icons/fa-brands/Github"
import { ExternalLink } from "@styled-icons/heroicons-solid/ExternalLink"

import CardWrapper from "../CardWrapper"

import { Banner, Title, Links, SourceCode } from "./styled"

const Project = ({ title, sourceCode, view, cover }) => {
  return (
    <CardWrapper cover={cover}>
      <Banner>
        {title && <Title>{title}</Title>}
        <Links>
          <SourceCode
            href={view}
            target="_target"
            rel="noreferrer noopener"
            aria-label={`go to ${title}`}
            negative
          >
            <ExternalLink />
          </SourceCode>
          <SourceCode
            href={sourceCode}
            target="_target"
            rel="noreferrer noopener"
            aria-label={`source code of the ${title}`}
          >
            <Github />
          </SourceCode>
        </Links>
      </Banner>
    </CardWrapper>
  )
}

Project.propTypes = {
  cover: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
}

export default Project
