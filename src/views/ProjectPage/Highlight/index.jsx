import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Strings from "components/strings"
import Button from "components/Button"

import { Github, ExternalLink } from "assets/icons"

import {
  Wrapper,
  Cover,
  ImageCover,
  Content,
  Title,
  Description,
  Links,
  Link,
} from "./styled"

const Highlight = ({
  revert = false,
  url,
  sourceCode,
  image,
  imagePosition,
  name,
  description,
}) => {
  const images = useStaticQuery(graphql`
    query {
      usepython: file(relativePath: { eq: "usepython.jpg" }) {
        ...extractFieldsHighlight
      }
      machadoalves: file(relativePath: { eq: "machadoalves.jpg" }) {
        ...extractFieldsHighlight
      }
      registerSwitch: file(relativePath: { eq: "register-switch.png" }) {
        ...extractFieldsHighlight
      }
      devflix: file(relativePath: { eq: "devflix.jpg" }) {
        ...extractFieldsHighlight
      }
      cssanimatic: file(relativePath: { eq: "cssanimatic.png" }) {
        ...extractFieldsHighlight
      }
      boilerplate: file(relativePath: { eq: "boilerplate.png" }) {
        ...extractFieldsHighlight
      }
      bomdia: file(relativePath: { eq: "bomdia.png" }) {
        ...extractFieldsHighlight
      }
      daisybell: file(relativePath: { eq: "daisybell.png" }) {
        ...extractFieldsHighlight
      }
      wolt: file(relativePath: { eq: "wolt.png" }) {
        ...extractFieldsHighlight
      }
      comicscreator: file(relativePath: { eq: "comicscreator.png" }) {
        ...extractFieldsHighlight
      }
      steamLibrary: file(relativePath: { eq: "steamLibrary.png" }) {
        ...extractFieldsHighlight
      }
      thumbnail: file(relativePath: { eq: "thumbnail.png" }) {
        ...extractFieldsHighlight
      }
      firemakebetter: file(relativePath: { eq: "firemakebetter.png" }) {
        ...extractFieldsHighlight
      }
    }

    fragment extractFieldsHighlight on File {
      childImageSharp {
        gatsbyImageData(
          width: 600
          height: 320
          placeholder: DOMINANT_COLOR
          formats: [AUTO, WEBP]
        )
      }
    }
  `)

  const getImage = (name) => images[name] || images.firemakebetter

  const renderCover = (
    <Cover>
      <ImageCover
        image={getImage(image).childImageSharp.gatsbyImageData}
        style={{ objectPosition: imagePosition || "top" }}
        alt=""
      />
    </Cover>
  )

  const renderContent = (
    <Content revert={revert}>
      <Title>{name}</Title>
      <Description>{description}</Description>
      <Links>
        <Link
          href={url}
          aria-label={image}
          negative={1}
          target="_blank"
          rel="nofollow noreferrer"
        >
          <Button light>
            <ExternalLink /> {Strings.ui.labels.visit}
          </Button>
        </Link>
        {sourceCode && (
          <Link
            href={sourceCode}
            aria-label={image}
            target="_blank"
            rel="nofollow noreferrer"
          >
            <Button light>
              <Github /> {Strings.ui.labels.sourceCode}
            </Button>
          </Link>
        )}
      </Links>
    </Content>
  )

  return (
    <Wrapper revert={revert}>
      {revert ? renderContent : renderCover}
      {revert ? renderCover : renderContent}
    </Wrapper>
  )
}

Highlight.propTypes = {
  revert: PropTypes.bool,
}

export default Highlight
