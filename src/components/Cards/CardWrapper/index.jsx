import React from "react"
import PropTypes from "prop-types"
import Anilink from "gatsby-plugin-transition-link/AniLink"

import { CardWrapperWrapper, CardWrapperCover } from "./styled"

const CardWrapper = ({ cover, children, article, to }) => {
  if (to) {
    return (
      <CardWrapperWrapper article={article}>
        <Anilink fade to={to} duration={0.75}>
          <CardWrapperCover>{cover}</CardWrapperCover>
          {children}
        </Anilink>
      </CardWrapperWrapper>
    )
  }

  return (
    <CardWrapperWrapper article={article}>
      <CardWrapperCover>{cover}</CardWrapperCover>
      {children}
    </CardWrapperWrapper>
  )
}

CardWrapper.propTypes = {
  cover: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
  to: PropTypes.string,
  article: PropTypes.bool,
}

CardWrapper.defaultProps = {
  article: false,
}

export default CardWrapper
