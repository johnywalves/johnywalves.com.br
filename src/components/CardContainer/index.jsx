import React from "react"
import PropTypes from "prop-types"

import { Wrapper } from "./styled"

const CardContainer = ({
  children
}) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}

CardContainer.propTypes = {
  children: PropTypes.node.isRequired,
}


export default CardContainer
