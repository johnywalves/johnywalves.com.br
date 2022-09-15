import React from "react"
import PropTypes from "prop-types"

import CardWrapper from "../CardWrapper"

import {
  CardArticleContent,
  CardArticleHeader,
  CardArticleCategory,
  CardArticleSubtitle,
  CardArticleTitle,
  CardArticleDescription,
} from "./styled"

const CardArticle = ({
  cover,
  category,
  subtitle,
  title,
  description,
  ...rest
}) => {
  return (
    <CardWrapper cover={cover} article {...rest}>
      <CardArticleContent>
        <CardArticleHeader>
          <CardArticleCategory>{category}</CardArticleCategory>
          <CardArticleSubtitle>{subtitle}</CardArticleSubtitle>
        </CardArticleHeader>
        <CardArticleTitle>{title}</CardArticleTitle>
        <CardArticleDescription>{description}</CardArticleDescription>
      </CardArticleContent>
    </CardWrapper>
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
