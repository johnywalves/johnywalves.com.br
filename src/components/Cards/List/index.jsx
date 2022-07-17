import React from "react"
import PropTypes from "prop-types"

import { Wrapper, Content, NavigationWrapper, Navigation } from "./styled"

const CardList = ({ children, text, url }) => {
  return (
    <Wrapper>
      <Content>{children}</Content>
      <NavigationWrapper>
        <Navigation
          to={url}
          cover
          direction="right"
          bg="var(--background)"
          duration={0.6}
        >
          {text}
        </Navigation>
      </NavigationWrapper>
    </Wrapper>
  )
}

CardList.propTypes = {
  children: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}

export default CardList
