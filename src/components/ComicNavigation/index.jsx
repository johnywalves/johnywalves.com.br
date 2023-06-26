import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Button from "components/Button"
import Strings from "components/strings"

import { ArrowLeft, ArrowsLeft, MoreVerticalOutline } from "assets/icons"

import { NavigationWrapper, Navigation, Icon, Pagination } from "./styled"

const ComicNavigation = ({ light, action, url, number, showCount }) => {
  const {
    allMarkdownRemark: { edges },
  } = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { frontmatter: { date: DESC } }
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
    <>
      <NavigationWrapper>
        <Icon
          to="/comic-1"
          disabled={firstOne}
          light={light ? 1 : 0}
          aria-label={Strings.first}
        >
          <ArrowsLeft />
        </Icon>
        <Icon
          to={`/comic-${number - 1}`}
          disabled={firstOne}
          light={light ? 1 : 0}
          aria-label={Strings.prev}
        >
          <ArrowLeft />
        </Icon>
        <Navigation to={url}>
          <Button light={light}>
            <MoreVerticalOutline /> {action}
          </Button>
        </Navigation>
        <Icon
          to={`/comic-${number + 1}`}
          disabled={lastOne}
          light={light ? 1 : 0}
          aria-label={Strings.next}
        >
          <ArrowLeft rotate />
        </Icon>
        <Icon
          to={`/comic-${lastNumber}`}
          disabled={lastOne}
          light={light ? 1 : 0}
          aria-label={Strings.last}
        >
          <ArrowsLeft rotate />
        </Icon>
      </NavigationWrapper>
      {showCount && (
        <Pagination>
          Tirinha número
          <span>{number.toString().padStart(3, "0")}</span>
          do total de
          <span>{lastNumber.toString().padStart(3, "0")}</span>
        </Pagination>
      )}
    </>
  )
}

ComicNavigation.propTypes = {
  light: PropTypes.bool,
  action: PropTypes.string,
  url: PropTypes.string,
  number: PropTypes.number,
  showCount: PropTypes.bool,
}

ComicNavigation.defaultProps = {
  light: true,
  action: "",
  url: "/comics/",
  showCount: false,
}

export default ComicNavigation
