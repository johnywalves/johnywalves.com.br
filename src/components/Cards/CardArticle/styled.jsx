import styled from "styled-components"
import media from "styled-media-query"

export const CardArticleContent = styled.div`
  position: relative;
  left: 0;
  top: 226px;
  min-height: 475px;
  padding: 20px 30px;
  border-top-left-radius: 30px;
  border-top-right-radius: 5px;
  display: flex;
  flex-direction: column;
  color: var(--highlight);
  background-color: var(--background-card);
  box-shadow: 0 -2px 8px var(--shadow-colors);

  ${media.lessThan("medium")`
    min-height: 500px;
  `}
`

export const CardArticleHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const CardArticleCategory = styled.p`
  padding: 4px 8px;
  font-size: 1.25rem;
  font-weight: 900;
  color: var(--background);
  background-color: var(--highlight);
  border-radius: 15px;
  text-transform: uppercase;
`

export const CardArticleSubtitle = styled.small`
  width: 100%;
  margin: 0 0 5px;
  font-size: 1.5rem;
  font-weight: 700;
  text-align: right;
`

export const CardArticleTitle = styled.h3`
  font-size: 2rem;
  margin: 10px 0;
`

export const CardArticleDescription = styled.p`
  font-size: 1.25rem;
  font-weight: 500;
  color: var(--texts);
`
