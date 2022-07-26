import React from "react"
import PropTypes from "prop-types"

import { Wrapper } from "./styled"

const Button = ({ children, selected, light, ...rest }) => {
  return (
    <Wrapper {...rest} role="button" selected={selected} light={light}>
      {children}
    </Wrapper>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  selected: PropTypes.bool,
  light: PropTypes.bool,
}

Button.defaultTypes = {
  selected: false,
  light: false,
}

export default Button
