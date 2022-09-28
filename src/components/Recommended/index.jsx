import React from "react"

import Item from "./Item"
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
        {recommendedLast && <Item recommended={recommendedLast} />}
        {recommendedCategory && <Item recommended={recommendedCategory} />}
      </RecommendedLinks>
    </RecommendedWrapper>
  )
}

export default Recommended
