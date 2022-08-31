import React from "react"
import PropTypes from "prop-types"

import { Github } from "@styled-icons/fa-brands/Github"
import { ExternalLink } from "@styled-icons/heroicons-solid/ExternalLink"

import Wrapper from "../Wrapper"

import { Banner, Title, Links, SourceCode } from "./styled"

const Project = ({ title, sourceCode, view, cover }) => {
  return (
    <Wrapper cover={cover}>
      <Banner>
        {title && <Title>{title}</Title>}
        <Links>
          <SourceCode
            href={view}
            target="_target"
            rel="noreferrer noopener"
            aria-label={`Link to ${cover}`}
            negative
          >
            <ExternalLink />
          </SourceCode>
          <SourceCode
            href={sourceCode}
            target="_target"
            rel="noreferrer noopener"
            aria-label={`Source code to ${cover}`}
          >
            <Github />
          </SourceCode>
        </Links>
      </Banner>
    </Wrapper>
  )
}

Project.propTypes = {
  cover: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
}

export default Project
