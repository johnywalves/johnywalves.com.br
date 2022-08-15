import React from "react"
import PropTypes from "prop-types"

import { Header, Title, Line } from "./styled"

const CardHeader = ({ title, light, left, right, small }) => {
  return (
    <Header left={left} right={right}>
      <Title light={light} small={small}>
        {title}
      </Title>
      <Line light={light} small={small} />
    </Header>
  )
}

CardHeader.propTypes = {
  title: PropTypes.string.isRequired,
  light: PropTypes.bool,
  left: PropTypes.bool,
  right: PropTypes.bool,
  small: PropTypes.bool,
}

CardHeader.defaultTypes = {
  light: false,
  left: false,
  right: false,
  small: false,
}

export default CardHeader
