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

const Article = ({
  cover,
  category,
  subtitle,
  title,
  description,
  ...rest
}) => {
  return (
    <Wrapper cover={cover} article {...rest}>
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

Article.propTypes = {
  cover: PropTypes.node.isRequired,
  category: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default Article
