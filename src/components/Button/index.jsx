import React from "react"
import PropTypes from "prop-types"

import { ButtonWrapper } from "./styled"

const Button = ({ children, selected, light, secondary, ...rest }) => {
  return (
    <ButtonWrapper
      {...rest}
      role="button"
      selected={selected}
      light={light ? 1 : 0}
      secondary={secondary}
    >
      {children}
    </ButtonWrapper>
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
