import React from "react"
import PropTypes from "prop-types"

import Badge from "components/Badge"

import {
  ArticleItemLink,
  ArticleItemWrapper,
  ArticleItemImageFeatured,
  ArticleItemCoverImage,
  ArticleItemTag,
  ArticleItemInfo,
  ArticleItemDate,
  ArticleItemTitle,
  ArticleItemDescription,
  ArticleItemTags,
} from "./styled"

const ArticleItem = ({
  slug,
  date,
  timeToRead,
  title,
  description,
  tags,
  featuredImage,
  coverImage,
  category,
}) => (
  <ArticleItemLink fade to={slug} duration={0.75}>
    <ArticleItemWrapper>
      {featuredImage && (
        <ArticleItemImageFeatured
          image={featuredImage.childImageSharp.gatsbyImageData}
          alt=""
        />
      )}
      {!featuredImage && coverImage && (
        <ArticleItemCoverImage
          style={{
            backgroundImage: `url(${coverImage})`,
            backgroundSize: category === "Comic" ? "auto 150px" : "cover",
          }}
        />
      )}
      {!featuredImage && !coverImage && (
        <ArticleItemTag>{category}</ArticleItemTag>
      )}
      <ArticleItemInfo>
        <ArticleItemDate>
          {date} ● {timeToRead} min de leitura
        </ArticleItemDate>
        <ArticleItemTitle>{title}</ArticleItemTitle>
        <ArticleItemDescription>{description}</ArticleItemDescription>
        {tags && (
          <ArticleItemTags>
            {tags.map((tag, index) => (
              <Badge key={index}>{tag}</Badge>
            ))}
          </ArticleItemTags>
        )}
      </ArticleItemInfo>
    </ArticleItemWrapper>
  </ArticleItemLink>
)

ArticleItem.propTypes = {
  slug: PropTypes.string.isRequired,
  background: PropTypes.string,
  category: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  timeToRead: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  img: PropTypes.string,
}

export default ArticleItem
