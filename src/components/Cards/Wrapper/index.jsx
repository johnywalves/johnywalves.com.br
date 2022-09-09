import React from "react"
import PropTypes from "prop-types"
import Anilink from "gatsby-plugin-transition-link/AniLink"

import { CardWrapper, CardCover } from "./styled"

const Wrapper = ({ cover, children, article, to }) => {
  if (to) {
    return (
      <CardWrapper article={article}>
        <Anilink
          swipe
          to={to}
          direction="left"
          bg="var(--background)"
          duration={0}
        >
          <CardCover>{cover}</CardCover>
          {children}
        </Anilink>
      </CardWrapper>
    )
  }

  return (
    <CardWrapper article={article}>
      <CardCover>{cover}</CardCover>
      {children}
    </CardWrapper>
  )
}

Wrapper.propTypes = {
  cover: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
  article: PropTypes.bool,
}

Wrapper.defaultProps = {
  article: false,
}

export default Wrapper
