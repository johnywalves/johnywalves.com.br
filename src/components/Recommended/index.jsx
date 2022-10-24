import React from "react"

import RecommendedItem from "components/RecommendedItem"

import {
  RecommendedWrapper,
  RecommendedTitle,
  RecommendedLinks,
} from "./styled"

const Recommended = ({ recommendedLast, recommendedCategory }) => {
  if (!recommendedLast && !recommendedCategory) {
    return null
  }

  return (
    <RecommendedWrapper>
      <RecommendedTitle>Algumas recomendações</RecommendedTitle>
      <RecommendedLinks>
        {recommendedLast && <RecommendedItem recommended={recommendedLast} />}
        {recommendedCategory && (
          <RecommendedItem recommended={recommendedCategory} />
        )}
      </RecommendedLinks>
    </RecommendedWrapper>
  )
}

export default Recommended
