import React from "react"
import PropTypes from "prop-types"

import {
  PostItemLink,
  PostItemWrapper,
  PostItemDate,
  PostItemTitle,
  PostItemImageFeatured,
} from "./styled"

const ComicItem = ({ slug, date, title, transcription, featuredImage }) => (
  <PostItemLink fade to={slug} duration={0.75}>
    <PostItemWrapper>
      <PostItemDate>{date}</PostItemDate>
      <PostItemTitle>{title}</PostItemTitle>
      {featuredImage && (
        <PostItemImageFeatured
          image={featuredImage.childImageSharp.gatsbyImageData}
          title={transcription}
          alt=""
        />
      )}
    </PostItemWrapper>
  </PostItemLink>
)

ComicItem.propTypes = {
  slug: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  transcription: PropTypes.string.isRequired,
}

export default ComicItem
