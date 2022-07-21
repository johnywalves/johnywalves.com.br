import React from "react"
import PropTypes from "prop-types"

import { Wrapper } from "./styled"

const Button = ({ children, ...rest }) => {
  return (
    <Wrapper role="button" {...rest}>
      {children}
    </Wrapper>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Button
