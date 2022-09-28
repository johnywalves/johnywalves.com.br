import styled from "styled-components"
import media from "styled-media-query"
import Anilink from "gatsby-plugin-transition-link/AniLink"
import { GatsbyImage } from "gatsby-plugin-image"

export const PostItemLink = styled(Anilink)`
  display: flex;
  text-decoration: none;
  padding: 0 var(--48px);
  transition: all 0.25s;

  &:hover {
    & picture {
      opacity: 0.75;
    }
  }
`

export const PostItemWrapper = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 0 var(--80px);
  margin: 0 auto;
  width: minmax(100%, 800px);

  ${media.lessThan("large")`
    flex-direction: column;
    padding: 2rem 1rem;
  `}
`

export const PostItemImageFeatured = styled(GatsbyImage)`
  color: var(--background);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  font-size: 1.3rem;
  font-weight: 700;
`

export const PostItemHeader = styled.div`
  width: 100%;
  margin: 0 0 var(--16px);

  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
`

export const PostItemDate = styled.time`
  font-size: 1rem;
  text-align: right;

  ${media.lessThan("medium")`
    font-size: 0.75rem;
  `}
`

export const PostItemTitle = styled.h1`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 2rem;
  font-weight: 700;

  span {
    font-size: 1rem;
    margin: 0 var(--8px);
  }

  ${media.lessThan("medium")`
    font-size: 1.25rem;

    span {
      font-size: 0.5rem;
    }
  `}
`

export const PostItemTags = styled.div`
  margin: 0.5rem 0;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
`
