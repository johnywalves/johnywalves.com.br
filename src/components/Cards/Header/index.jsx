import React from "react"
import PropTypes from "prop-types"

import { HeaderWrapper, HeaderTitle, HeaderLine } from "./styled"

const Header = ({ title, light, dark, left, right, small, fit }) => {
  return (
    <HeaderWrapper left={left} right={right} fit={fit}>
      <HeaderTitle light={light} dark={dark} small={small}>
        {title}
      </HeaderTitle>
      <HeaderLine light={light} dark={dark} small={small} />
    </HeaderWrapper>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  light: PropTypes.bool,
  dark: PropTypes.bool,
  left: PropTypes.bool,
  right: PropTypes.bool,
  small: PropTypes.bool,
  fit: PropTypes.bool,
}

Header.defaultTypes = {
  light: false,
  dark: false,
  left: false,
  right: false,
  small: false,
  fit: false,
}

export default Header
