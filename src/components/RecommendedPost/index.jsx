import React from "react"
import propTypes from "prop-types"

import { RecommendedWrapper, RecommendedLink } from "./styled"

const RecommendedPosts = ({ next, previous }) => (
  <RecommendedWrapper>
    {previous && (
      <RecommendedLink
        fade
        to={previous.fields.slug}
        className="previous"
        duration={0.75}
      >
        {previous.frontmatter.title}
      </RecommendedLink>
    )}
    {next && (
      <RecommendedLink
        fade
        to={next.fields.slug}
        className="next"
        duration={0.75}
      >
        {next.frontmatter.title}
      </RecommendedLink>
    )}
  </RecommendedWrapper>
)

RecommendedPosts.propTypes = {
  next: propTypes.shape({
    frontmatter: propTypes.shape({
      title: propTypes.string.isRequired,
    }),
    fields: propTypes.shape({
      slug: propTypes.string.isRequired,
    }),
  }),
  previous: propTypes.shape({
    frontmatter: propTypes.shape({
      title: propTypes.string.isRequired,
    }),
    fields: propTypes.shape({
      slug: propTypes.string.isRequired,
    }),
  }),
}

export default RecommendedPosts
