import styled from "styled-components"
import media from "styled-media-query"

export const RecommendedWrapper = styled.section`
  margin: auto;
  max-width: 70rem;
  padding: var(--24px) var(--80px);

  ${media.lessThan("large")`
    padding: 3rem 1.4rem 0;
    max-width: 100%;
  `}
`

export const RecommendedTitle = styled.h2`
  color: var(--highlight);
  font-size: 1.75rem;
  font-weight: 700;
  padding-bottom: var(--32px);

  ${media.lessThan("large")`
    font-size: 1.375rem;
  `}
`

export const RecommendedLinks = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--16px);

  ${media.lessThan("medium")`
    grid-template-columns: 1fr;
  `}
`
