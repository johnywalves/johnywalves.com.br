import React from "react"
import PropTypes from "prop-types"

import { HeaderWrapper, HeaderTitle, HeaderLine } from "./styled"

const Header = ({
  title,
  light = false,
  dark = false,
  left = false,
  right = false,
  small = false,
  fit = false,
}) => {
  return (
    <HeaderWrapper
      $left={left ? 1 : 0}
      $right={right ? 1 : 0}
      $fit={fit ? 1 : 0}
    >
      <HeaderTitle
        $light={light ? 1 : 0}
        $dark={dark ? 1 : 0}
        $small={small ? 1 : 0}
      >
        {title}
      </HeaderTitle>
      <HeaderLine
        $light={light ? 1 : 0}
        $dark={dark ? 1 : 0}
        $small={small ? 1 : 0}
      />
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

export default Header
