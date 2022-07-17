import React from "react"
import PropTypes from "prop-types"

import Wrapper from "../Wrapper"

import { Content, Title, Subtitle, Description } from "./styled"

const CardArticle = ({ cover, title, subtitle, timeToRead, description }) => {
  return (
    <Wrapper cover={cover} article={true}>
      <Content>
        <Subtitle>{subtitle}</Subtitle>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Content>
    </Wrapper>
  )
}

CardArticle.propTypes = {
  cover: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  timeToRead: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
}

export default CardArticle
