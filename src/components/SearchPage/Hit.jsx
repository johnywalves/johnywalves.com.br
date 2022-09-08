import React from "react"

import ArticleItem from "components/ArticleItem"

const Hit = ({ hit }) => (
  <ArticleItem
    key={hit.objectID}
    slug={`/new${hit.slug}`}
    category={hit.category}
    date={hit.date}
    timeToRead={hit.timeToRead}
    title={hit.title}
    description={hit.description || "No description"}
    tags={hit.tags}
    coverImage={hit.coverImage}
  />
)

export default Hit
