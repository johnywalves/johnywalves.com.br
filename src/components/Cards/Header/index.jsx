import React from "react"
import PropTypes from "prop-types"

import { Header, Title, Line } from "./styled"

const CardHeader = ({ title, light, left }) => {
  return (
    <Header left={left}>
      <Title light={light}>{title}</Title>
      <Line light={light} />
    </Header>
  )
}

CardHeader.propTypes = {
  title: PropTypes.string.isRequired,
  light: PropTypes.bool,
  left: PropTypes.bool,
}

CardHeader.defaultTypes = {
  light: false,
  left: false,
}

export default CardHeader
