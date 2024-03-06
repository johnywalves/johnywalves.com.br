import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import { CardWrapperWrapper, CardWrapperCover } from "./styled"

const CardWrapper = ({ cover, children, article, to }) => {
  if (to) {
    return (
      <CardWrapperWrapper $article={article ? 1 : 0}>
        <Link to={to}>
          <CardWrapperCover>{cover}</CardWrapperCover>
          {children}
        </Link>
      </CardWrapperWrapper>
    )
  }

  return (
    <CardWrapperWrapper $article={article ? 1 : 0}>
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
