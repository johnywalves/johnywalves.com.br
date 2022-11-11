import React from "react"

import { RecommendedLink, RecommendedCover, RecommendedContent } from "./styled"

const Item = ({ recommended }) => {
  const {
    frontmatter: { date, title, description, featuredImage },
    fields: { slug },
    timeToRead,
  } = recommended

  return (
    <RecommendedLink to={slug}>
      <RecommendedCover
        image={featuredImage.childImageSharp.gatsbyImageData}
        alt=""
      />
      <RecommendedContent>
        <time>
          {date} <span>●</span> {timeToRead} min de leitura
        </time>
        <h3>{title}</h3>
        <p>{description}</p>
      </RecommendedContent>
    </RecommendedLink>
  )
}

export default Item
