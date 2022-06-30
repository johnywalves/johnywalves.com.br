import React from "react"
import PostItem from "components/PostItem"

const Hit = ({ hit }) => (
  <PostItem
    key={hit.objectID}
    slug={hit.slug}
    category={hit.category}
    date={hit.date}
    timeToRead={hit.timeToRead}
    title={hit.title}
    description={hit.description || hit.transcription || "Lorem lipsunm"}
    tags={hit.tags}
    coverImage={hit.coverImage}
  />
)

export default Hit
