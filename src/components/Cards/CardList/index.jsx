import React from "react"
import PropTypes from "prop-types"

import { MoreVerticalOutline } from "assets/icons"

import Button from "components/Button"
import ComicNavigation from "components/ComicNavigation"

import Header from "../Header"

import {
  CardListWrapper,
  Content,
  NavigationWrapper,
  Navigation,
} from "./styled"

const CardList = ({ children, title, action, url, light, number }) => {
  return (
    <CardListWrapper>
      <Header title={title} light={light} />
      <Content>{children}</Content>
      <NavigationWrapper>
        {!number && url && (
          <Navigation fade to={url} duration={0.75}>
            <Button light={light}>
              <MoreVerticalOutline /> {action}
            </Button>
          </Navigation>
        )}
        {number && (
          <ComicNavigation
            light={light}
            action={action}
            url={url}
            number={number}
          />
        )}
      </NavigationWrapper>
    </CardListWrapper>
  )
}

CardList.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  action: PropTypes.string.isRequired,
  light: PropTypes.bool,
  url: PropTypes.string,
  number: PropTypes.number,
}

CardList.defaultTypes = {
  light: false,
}

export default CardList
