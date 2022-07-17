import React from "react"
import PropTypes from "prop-types"

import * as S from "./styled"

const PostItemComic = ({ slug, date, title, transcription, featuredImage }) => (
  <S.PostItemLink
    to={slug}
    cover
    direction="left"
    bg="var(--background)"
    duration={0.6}
  >
    <S.PostItemWrapper>
      <S.PostItemDate>{date}</S.PostItemDate>
      <S.PostItemTitle>{title}</S.PostItemTitle>
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

PostItemComic.propTypes = {
  slug: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  transcription: PropTypes.string.isRequired,
}

export default PostItemComic
