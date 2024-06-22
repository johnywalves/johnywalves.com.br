import React from "react"
import PropTypes from "prop-types"

import { ButtonWrapper } from "./styled"

const Button = ({
  children,
  selected = false,
  light = false,
  secondary = false,
  ...rest
}) => {
  return (
    <ButtonWrapper
      {...rest}
      role="button"
      selected={selected}
      $light={light ? 1 : 0}
      $secondary={secondary ? 1 : 0}
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

export default Button
