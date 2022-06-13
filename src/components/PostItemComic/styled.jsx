import styled from "styled-components"
import media from "styled-media-query"
import Anilink from "gatsby-plugin-transition-link/AniLink"
import { GatsbyImage } from "gatsby-plugin-image"

export const PostItemLink = styled(Anilink)`
  color: var(--texts);
  display: flex;
  text-decoration: none;

  body#grid & {
    background-color: var(--background);
  }

  &:hover {
    color: var(--highlight);
  }
`

export const PostItemWrapper = styled.section`
  align-items: center;
  border-bottom: 1px solid var(--borders);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2rem 3rem;
  margin: 0 auto;
  width: minmax(100%, 800px);

  body#grid & {
    border: none;
    padding: 2rem 1rem;
    flex-direction: column;
    justify-content: center;
  }

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

export const PostItemTag = styled.div`
  align-items: center;
  background-color: ${(props) =>
    props.background ? props.background : "var(--highlight)"};
  border-radius: 50%;
  color: var(--background);
  display: flex;
  font-size: 1.3rem;
  font-weight: 700;
  justify-content: center;
  min-height: 120px;
  min-width: 120px;

  body#grid & {
    margin-bottom: 1.5rem;
  }
`

export const PostItemDate = styled.time`
  margin-left: 8px;
  font-size: 0.9rem;
`

export const PostItemTitle = styled.h1`
  font-size: 1.6rem;
  font-weight: 700;
  margin: 0.2rem 8px 0.5rem;

  body#grid & {
    line-height: 1.1;
    margin: 0.8rem 0;
  }
`

export const PostItemDescription = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.2;
`

export const PostItemTags = styled.div`
  margin: 0.5rem 0;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
`
