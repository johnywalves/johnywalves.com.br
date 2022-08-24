import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import { MoreVerticalOutline } from "@styled-icons/evaicons-outline/MoreVerticalOutline"

import Button from "components/Button"

import Header from "../Header"

import ArrowsLeft from "./icons/ArrowsLeft"
import ArrowLeft from "./icons/ArrowLeft"
import { Wrapper, Content, NavigationWrapper, Icon, Navigation } from "./styled"

const CardList = ({ children, title, action, url, light, number }) => {
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
              description
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
    <Wrapper>
      <Header title={title} light={light} />
      <Content>{children}</Content>
      <NavigationWrapper>
        {!number && (
          <Navigation
            to={url}
            cover
            direction="right"
            bg="var(--background)"
            duration={0.6}
          >
            <Button light={light}>
              <MoreVerticalOutline /> {action}
            </Button>
          </Navigation>
        )}
        {number && (
          <>
            <Icon
              to="/comic-1"
              cover
              direction="right"
              bg="var(--background)"
              duration={0.6}
              disabled={firstOne}
              light={light}
              aria-label="first"
            >
              <ArrowsLeft />
            </Icon>
            <Icon
              to={`/comic-${number - 1}`}
              cover
              direction="right"
              bg="var(--background)"
              duration={0.6}
              disabled={firstOne}
              light={light}
              aria-label="previous"
            >
              <ArrowLeft />
            </Icon>
            <Navigation
              to={url}
              cover
              direction="right"
              bg="var(--background)"
              duration={0.6}
            >
              <Button light={light}>
                <MoreVerticalOutline /> {action}
              </Button>
            </Navigation>
            <Icon
              to={`/comic-${number + 1}`}
              cover
              direction="left"
              bg="var(--background)"
              duration={0.6}
              disabled={lastOne}
              light={light}
              aria-label="next"
            >
              <ArrowLeft rotate />
            </Icon>
            <Icon
              to={`/comic-${lastNumber}`}
              cover
              direction="left"
              bg="var(--background)"
              duration={0.6}
              disabled={lastOne}
              light={light}
              aria-label="last"
            >
              <ArrowsLeft rotate />
            </Icon>
          </>
        )}
      </NavigationWrapper>
    </Wrapper>
  )
}

CardList.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  action: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  light: PropTypes.bool.isRequired,
  number: PropTypes.number,
}

CardList.propTypes = {
  light: false,
}

export default CardList
