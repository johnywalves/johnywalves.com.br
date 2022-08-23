import React from "react"
import PropTypes from "prop-types"

import { Wrapper, Cover } from "./styled"

const CardWrapper = ({ cover, children, article }) => {
  return (
    <Wrapper article={article}>
      <Cover>{cover}</Cover>
      {children}
    </Wrapper>
  )
}

CardWrapper.propTypes = {
  cover: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
  article: PropTypes.bool,
}

CardWrapper.defaultProps = {
  article: false,
}

export default CardWrapper
