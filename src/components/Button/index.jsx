import React from "react"
import PropTypes from "prop-types"

import { Wrapper } from "./styled"

const Button = ({ children, selected, light, secondary, ...rest }) => {
  return (
    <Wrapper
      {...rest}
      role="button"
      selected={selected}
      light={light}
      secondary={secondary}
    >
      {children}
    </Wrapper>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  selected: PropTypes.bool,
  light: PropTypes.bool,
  secondary: PropTypes.bool,
}

Button.defaultTypes = {
  selected: false,
  light: false,
  secondary: false,
}

export default Button
