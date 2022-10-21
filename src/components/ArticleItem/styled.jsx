import styled, { css } from "styled-components"
import media from "styled-media-query"
import Anilink from "gatsby-plugin-transition-link/AniLink"
import { GatsbyImage } from "gatsby-plugin-image"

export const ArticleItemLink = styled(Anilink)`
  display: flex;
  text-decoration: none;
  border-bottom: 2px solid var(--shadow-colors);
`

export const ArticleItemWrapper = styled.article`
  align-items: center;
  display: flex;
  padding: var(--32px);
  gap: var(--24px);
  width: 100%;

  ${media.lessThan("medium")`
    align-items: flex-start;
    flex-direction: column;
    padding: var(--32px) var(--16px);
    gap: 0;
  `}
`

const imageFormat = css`
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  border-radius: 50%;
  display: flex;
  font-size: 1.3rem;
  font-weight: 700;
  height: 120px;
  width: 120px;
  background-position: center;
  background-color: var(--background-card);
  box-shadow: 0 0 4px 1px var(--shadow-colors),
    2px 2px 4px 1px var(--shadow-colors);
  filter: saturate(0) brightness(1.15);
  transform: rotate(10deg);
  transition: 0.25s ease-in-out;

  ${media.lessThan("medium")`
    font-size: 1rem;
    min-height: auto;
    min-width: auto;
    padding: .2rem .5rem;
    margin-bottom: var(--32px);
    align-self: center;
  `}

  ${ArticleItemLink}:hover & {
    filter: saturate(125%);
    transform: none;
  }
`

export const ArticleItemImageFeatured = styled(GatsbyImage)`
  ${imageFormat}
`

export const ArticleItemCoverImage = styled.div`
  ${imageFormat}
`

export const ArticleItemTag = styled.div`
  align-items: center;
  background-color: ${({ background }) =>
    background ? background : "var(--highlight)"};
  border-radius: 50%;
  color: var(--background);
  display: flex;
  font-size: 1.3rem;
  font-weight: 700;
  justify-content: center;
  min-height: 120px;
  min-width: 120px;
`

export const ArticleItemInfo = styled.div`
  display: flex;
  flex-direction: column;

  ${media.lessThan("medium")`
    margin: 0;
  `}
`

export const ArticleItemDate = styled.time`
  font-size: 0.9rem;
  display: flex;
  flex-direction: row;
  align-items: center;

  & span {
    font-size: 0.5rem;
    margin: 0 0.25rem;
  }
`

export const ArticleItemTitle = styled.h1`
  font-size: 1.6rem;
  font-weight: 700;
  margin: 0.2rem 0 0.5rem;
  vertical-align: middle;
  display: flex;
  flex-direction: row;
  align-items: center;

  ${media.lessThan("medium")`
    margin-top: var(--8px);
    margin-bottom: var(--8px);
    font-size: 1.25rem;
    flex-direction: column;
    align-items: flex-start;
  `}
`

export const ArticleItemCategory = styled.span`
  margin: 0 var(--8px) 0 0;
  padding: var(--4px) var(--8px);
  font-size: 0.75rem;
  font-weight: 900;
  color: var(--background);
  background-color: var(--highlight);
  border-radius: 15px;
  text-transform: uppercase;
  opacity: 0.8;
  transition: 0.25s ease-in-out;

  ${ArticleItemLink}:hover & {
    opacity: 1;
  }

  ${media.lessThan("medium")`
    margin-bottom: var(--8px);
  `}
`

export const ArticleItemDescription = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 120%;

  ${media.lessThan("medium")`
    font-size: 1rem;
  `}
`

export const ArticleItemTags = styled.div`
  margin: var(--8px) 0;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  opacity: 0.8;
  transition: 0.25s ease-in-out;
  gap: var(--2px);

  ${ArticleItemLink}:hover & {
    opacity: 1;
  }
`
