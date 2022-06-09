import React from "react"
import PropTypes from "prop-types"

import Badge from "components/Badge"

import * as S from "./styled"

const PostItem = ({
  slug,
  date,
  title,
  transcription,
  tags,
  featuredImage
}) => (
  <S.PostItemLink
    to={slug}
    cover
    direction="left"
    bg="var(--background)"
    duration={0.6}
  >
    <S.PostItemWrapper>
      <S.PostItemDate>
        {date}
      </S.PostItemDate>
      <S.PostItemTitle>{title}</S.PostItemTitle>
      {tags && (
        <S.PostItemTags>
          {tags.map((tag, index) => (
            <Badge key={index}>{tag}</Badge>
          ))}
        </S.PostItemTags>
      )}
      {featuredImage && (
        <S.PostItemImageFeatured
          image={featuredImage.childImageSharp.gatsbyImageData}
          title={transcription}
          alt=""
        />
      )}
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
  transcription: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  img: PropTypes.string,
}

export default PostItem
