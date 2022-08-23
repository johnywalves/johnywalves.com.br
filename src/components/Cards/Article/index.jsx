import React from "react"
import PropTypes from "prop-types"

import Wrapper from "../Wrapper"

import {
  Content,
  Header,
  Category,
  Subtitle,
  Title,
  Description,
} from "./styled"

const CardArticle = ({ cover, category, subtitle, title, description }) => {
  return (
    <Wrapper cover={cover} article>
      <Content>
        <Header>
          <Category>{category}</Category>
          <Subtitle>{subtitle}</Subtitle>
        </Header>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Content>
    </Wrapper>
  )
}

CardArticle.propTypes = {
  cover: PropTypes.node.isRequired,
  category: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default CardArticle
