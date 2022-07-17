import React from "react"
import PropTypes from "prop-types"

import Wrapper from "../Wrapper"

import { Title } from "./styled"

const CardProject = ({ title, cover }) => {
  return <Wrapper cover={cover}>{title && <Title>{title}</Title>}</Wrapper>
}

CardProject.propTypes = {
  cover: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
}

export default CardProject
