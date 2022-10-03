import styled, { css } from "styled-components"
import media from "styled-media-query"
import { GatsbyImage } from "gatsby-plugin-image"

export const ComicPostWrapper = styled.article`
  background: url("/vectors/triangle-wall-top.svg"),
    url("/vectors/triangle-wall-bottom.svg");
  background-color: var(--background);
  background-size: 30%;
  background-repeat: no-repeat;
  background-position: top left, bottom right;

  ${media.lessThan("medium")`
    background-size: 50%;
  `}
`

export const ComicPostHeader = styled.header`
  color: var(--texts);
  margin: auto;
  max-width: 1200px;
  padding: var(--56px) 5rem 0;

  ${media.lessThan("large")`
    ${(props) =>
      props.comics
        ? css`
            padding: 0.5rem 0.5rem 0;
          `
        : css`
            padding: 3rem 0 0;
          `}
    max-width: 100%;
  `}

  ${media.lessThan("medium")`
    padding-top: var(--16px);
  `}
`

export const PostFeaturedImage = styled(GatsbyImage)``

export const ComicWrapper = styled.div`
  margin-top: 1.5rem;
  display: flex;
  justify-content: center;
`

export const PostComic = styled(GatsbyImage)``

export const PostDate = styled.time`
  font-size: 1rem;
  font-weight: 400;
`

export const PostTitle = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  padding: var(--8px) 0 var(--16px);
  margin: 1rem auto;
  color: var(--highlight);
  text-shadow: 1px 1px 2px var(--shadow-colors);

  ${media.lessThan("large")`
    font-size: 2.8rem;
    line-height: 1.1;
    padding: 0 1rem;
  `}

  ${media.lessThan("medium")`
    font-size: 2rem;
    padding: 0;
  `}
`

export const PostDescription = styled.h2`
  font-size: 2rem;
  font-weight: 200;
  padding: 0 1.4rem;

  ${media.lessThan("large")`
    font-size: 1.6rem;
    line-height: 1.3;
    padding: 0 1rem;
  `}
`
