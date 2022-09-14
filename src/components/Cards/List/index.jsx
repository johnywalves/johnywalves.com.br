import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import { MoreVerticalOutline } from "@styled-icons/evaicons-outline/MoreVerticalOutline"

import Button from "components/Button"

import { ArrowLeft, ArrowsLeft } from "icons"

import Header from "../Header"

import { Wrapper, Content, NavigationWrapper, Icon, Navigation } from "./styled"

const List = ({ children, title, action, url, light, number }) => {
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
        {url && (
          <Navigation fade to={url} duration={0.75}>
            <Button light={light}>
              <MoreVerticalOutline /> {action}
            </Button>
          </Navigation>
        )}
        {number && (
          <>
            <Icon
              fade
              to="/comic-1"
              duration={0.75}
              disabled={firstOne}
              light={light}
              aria-label="first"
            >
              <ArrowsLeft />
            </Icon>
            <Icon
              fade
              to={`/comic-${number - 1}`}
              duration={0.75}
              disabled={firstOne}
              light={light}
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
              light={light}
              aria-label="next"
            >
              <ArrowLeft rotate />
            </Icon>
            <Icon
              fade
              to={`/comic-${lastNumber}`}
              duration={0.75}
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

List.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  action: PropTypes.string.isRequired,
  light: PropTypes.bool.isRequired,
  url: PropTypes.string,
  number: PropTypes.number,
}

List.propTypes = {
  light: false,
}

export default List
