import styled, { css } from "styled-components"
import media from "styled-media-query"
import { GatsbyImage } from "gatsby-plugin-image"

export const ArticleWrapper = styled.article`
  padding: 0 0 var(--80px);

  background: url("/vectors/triangle-wall-top.svg"),
    url("/vectors/triangle-wall-bottom.svg");
  background-color: var(--background);
  background-size: 30%;
  background-repeat: no-repeat;
  background-position: top left, bottom right;
`

export const ArticleForehead = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 30rem;

  ${media.lessThan("medium")`
    min-height: 20rem;
  `}
`

export const PostFeaturedImage = styled(GatsbyImage)`
  position: absolute !important;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

export const ArticleForeheadCover = styled.div`
  position: absolute !important;
  width: 100%;
  height: 100%;
  background-color: var(--background-semi);
`

export const PostHeader = styled.div`
  max-width: 70rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;

  ${media.lessThan("large")`
    ${(props) =>
      props.comics
        ? css`
            padding: 0.5rem 0.5rem 0;
          `
        : css`
            padding: 1rem;
          `}
    max-width: 100%;
  `}
`

export const ComicWrapper = styled.div`
  margin-top: 1.5rem;
  display: flex;
  justify-content: center;
`

export const PostComic = styled(GatsbyImage)``

export const PostDate = styled.time`
  font-size: 1.1rem;
  font-weight: 600;
  padding: 0 1.4rem;
  vertical-align: middle;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: var(--texts);

  & span:nth-of-type(2) {
    font-size: 0.5rem;
    margin: 0 0.4rem;
  }

  ${media.lessThan("large")`
    padding: 0 1rem;
  `}

  ${media.lessThan("medium")`
    font-weight: 400;
    flex-direction: column;

    & span:nth-of-type(2) {
      display: none;
    }
  `}
`

export const PostTitle = styled.h1`
  font-size: 5rem;
  font-weight: 700;
  padding: 0 1.4rem;
  margin: 1rem auto;
  color: var(--highlight);
  text-align: center;

  ${media.lessThan("large")`
    font-size: 2.8rem;
    line-height: 1.1;
    padding: 0 1rem;
  `}

  ${media.lessThan("medium")`
    font-size: 1.75rem;
  `}
`

export const PostDescription = styled.h2`
  font-size: 2rem;
  font-weight: 400;
  text-align: center;
  padding: 0 1.4rem;
  color: var(--texts);

  ${media.lessThan("large")`
    font-size: 1.6rem;
    line-height: 1.3;
    padding: 0 1rem;
  `}

  ${media.lessThan("medium")`
    font-size: 1rem;
  `}
`

export const PostLabels = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  padding: 0 0 var(--16px) var(--16px);

  & a {
    border: none;
  }
`

export const PostCategory = styled.p`
  background-color: var(--highlight);
  color: var(--background) !important;
  padding: var(--4px) var(--8px);
  margin: 0 !important;
  border-radius: 15px;
  text-transform: uppercase;
  font-weight: 900 !important;
  cursor: pointer;

  a:hover & {
    opacity: 0.5;
  }
`

export const PostTag = styled.p`
  color: var(--highlight) !important;
  padding: 0 !important;
  margin: 0 !important;
  font-weight: 900 !important;
  word-break: keep-all !important;

  &:before {
    content: "|";
    margin: 0 var(--8px);
    color: var(--shadow-colors) !important;
    font-size: 80%;
    font-weight: 300 !important;
  }
`
