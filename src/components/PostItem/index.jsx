import React from "react"
import PropTypes from "prop-types"

import * as S from "./styled"

const PostItem = ({
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
  <S.PostItemLink
    to={slug}
    cover
    direction="left"
    bg="var(--background)"
    duration={0.6}
  >
    <S.PostItemWrapper>
      {featuredImage && (
        <S.PostItemImageFeatured fixed={featuredImage.childImageSharp.fixed} />
      )}
      {!featuredImage && coverImage && (
        <S.PostItemCoverImage
          style={{ backgroundImage: `url(${coverImage})` }}
        />
      )}
      {!featuredImage && !coverImage && (
        <S.PostItemTag>{category}</S.PostItemTag>
      )}
      <S.PostItemInfo>
        <S.PostItemDate>
          {date} ● {timeToRead} min de leitura
        </S.PostItemDate>
        <S.PostItemTitle>{title}</S.PostItemTitle>
        <S.PostItemDescription>{description}</S.PostItemDescription>
        {tags && (
          <S.PostItemTags>
            {tags.map((tag, index) => (
              <p key={index}>{tag}</p>
            ))}
          </S.PostItemTags>
        )}
      </S.PostItemInfo>
    </S.PostItemWrapper>
  </S.PostItemLink>
)

PostItem.propTypes = {
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

export default PostItem
