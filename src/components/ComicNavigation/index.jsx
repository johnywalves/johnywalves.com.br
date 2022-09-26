import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import { MoreVerticalOutline } from "@styled-icons/evaicons-outline/MoreVerticalOutline"

import Button from "components/Button"

import { ArrowLeft, ArrowsLeft } from "icons"

import { NavigationWrapper, Navigation, Icon } from "./styled"

const ComicNavigation = ({ light, action, url, number }) => {
  const {
    allMarkdownRemark: { edges },
  } = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { fields: frontmatter___date, order: DESC }
        filter: {
          frontmatter: { published: { ne: false }, category: { eq: "Comic" } }
        }
        limit: 1
      ) {
        edges {
          node {
            frontmatter {
              number
            }
          }
        }
      }
    }
  `)

  const lastNumber = edges[0].node.frontmatter.number
  const firstOne = number === 1
  const lastOne = number === lastNumber

  return (
    <NavigationWrapper>
      <Icon
        fade
        to="/comic-1"
        duration={0.75}
        disabled={firstOne}
        light={light ? 1 : 0}
        aria-label="first"
      >
        <ArrowsLeft />
      </Icon>
      <Icon
        fade
        to={`/comic-${number - 1}`}
        duration={0.75}
        disabled={firstOne}
        light={light ? 1 : 0}
        aria-label="previous"
      >
        <ArrowLeft />
      </Icon>
      <Navigation fade to={url} duration={0.75}>
        <Button light={light}>
          <MoreVerticalOutline /> {action}
        </Button>
      </Navigation>
      <Icon
        fade
        to={`/comic-${number + 1}`}
        duration={0.75}
        disabled={lastOne}
        light={light ? 1 : 0}
        aria-label="next"
      >
        <ArrowLeft rotate />
      </Icon>
      <Icon
        fade
        to={`/comic-${lastNumber}`}
        duration={0.75}
        disabled={lastOne}
        light={light ? 1 : 0}
        aria-label="last"
      >
        <ArrowsLeft rotate />
      </Icon>
    </NavigationWrapper>
  )
}

ComicNavigation.propTypes = {
  light: PropTypes.bool,
  action: PropTypes.string,
  url: PropTypes.string,
  number: PropTypes.number,
}

ComicNavigation.defaultProps = {
  light: true,
  action: "",
  url: "/comics/",
}

export default ComicNavigation
