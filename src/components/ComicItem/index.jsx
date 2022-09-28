import React from "react"
import PropTypes from "prop-types"

import {
  PostItemLink,
  PostItemWrapper,
  PostItemHeader,
  PostItemTitle,
  PostItemDate,
  PostItemImageFeatured,
} from "./styled"

const ComicItem = ({
  slug,
  date,
  title,
  number,
  transcription,
  featuredImage,
}) => (
  <PostItemLink fade to={slug} duration={0.75}>
    <PostItemWrapper>
      <PostItemHeader>
        <PostItemTitle>
          #{number.toString().padStart(3, "0")} <span>●</span> {title}
        </PostItemTitle>
        <PostItemDate>{date}</PostItemDate>
      </PostItemHeader>
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
  number: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  transcription: PropTypes.string.isRequired,
}

export default ComicItem
