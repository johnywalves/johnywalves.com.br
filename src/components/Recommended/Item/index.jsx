import React from "react"
import { RecommendedLink, RecommendedCover } from "./styled"

const Item = ({ recommended }) => {
  const {
    frontmatter: { date, title, description, featuredImage },
    fields: { slug },
    timeToRead,
  } = recommended

  return (
    <RecommendedLink fade to={slug} duration={0.75}>
      <RecommendedCover
        image={featuredImage.childImageSharp.gatsbyImageData}
        alt=""
      />
      <time>
        {date} <span>●</span> {timeToRead} min de leitura
      </time>
      <h3>{title}</h3>
      <p>{description}</p>
    </RecommendedLink>
  )
}

export default Item
