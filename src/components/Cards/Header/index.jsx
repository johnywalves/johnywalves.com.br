import React from "react"
import PropTypes from "prop-types"

import { Header, Title, Line } from "./styled"

const CardHeader = ({ title, light, dark, left, right, small, fit }) => {
  return (
    <Header left={left} right={right} fit={fit}>
      <Title light={light} dark={dark} small={small}>
        {title}
      </Title>
      <Line light={light} dark={dark} small={small} />
    </Header>
  )
}

CardHeader.propTypes = {
  title: PropTypes.string.isRequired,
  light: PropTypes.bool,
  dark: PropTypes.bool,
  left: PropTypes.bool,
  right: PropTypes.bool,
  small: PropTypes.bool,
  fit: PropTypes.bool,
}

CardHeader.defaultTypes = {
  light: false,
  dark: false,
  left: false,
  right: false,
  small: false,
  fit: false,
}

export default CardHeader
