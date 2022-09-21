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
`

export const ArticleForeheadCover = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: var(--background-semi);
`

export const PostHeader = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;

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
`

export const PostFeaturedImage = styled(GatsbyImage)`
  display: flex;
  justify-content: center;
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

  span {
    font-size: 0.5rem;
    margin: 0 0.4rem;
  }

  ${media.lessThan("large")`
    padding: 0 1rem;
  `}
`

export const PostTitle = styled.h1`
  font-size: 5rem;
  font-weight: 700;
  padding: 0 1.4rem;
  margin: 1rem auto;
  color: var(--highlight);
  text-align: center;
  text-shadow: 1px 1px 2px var(--shadow-colors);

  ${media.lessThan("large")`
    font-size: 2.8rem;
    line-height: 1.1;
    padding: 0 1rem;
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
`

export const MainContent = styled.section`
  margin: auto;
  max-width: 70rem;
  padding: var(--32px) 0;

  ${media.lessThan("large")`
    padding: 2rem 0;
    max-width: 100%;
  `}

  p,
  h1,
  h2,
  h3,
  h4,
  ul,
  ol,
  .tags,
  iframe,
  .button-post {
    color: var(--texts);
    font-size: 1.25rem;
    font-weight: 300;
    line-height: 1.7;
    letter-spacing: 0.069rem;
    padding: 0 1.4rem;

    ${media.lessThan("large")`
      padding: 0 1rem;
      word-break: break-word;
    `}
  }
  video,
  p {
    display: block;
    margin: 0 auto 1.6rem;
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 2.4rem auto 1rem;
  }
  ul,
  ol {
    list-style: none;
    padding-left: 2.5rem;
    margin: 0 auto 1.6rem;
  }
  li {
    padding: 0.625rem 0;
    code {
      word-wrap: break-word;
    }
    & > ul {
      margin-bottom: 0;
    }
    &::before {
      content: "•";
      color: var(--highlight);
      font-weight: 900;
      display: inline-block;
      width: 1em;
      margin-left: -1em;
    }
  }
  img {
    display: block;
    max-width: 100%;
    height: auto;
    margin: 1.875rem auto;
  }
  iframe {
    padding: 0 1.6rem 1.6rem;
    width: 100%;

    ${media.lessThan("large")`
      padding: 0 1rem;
    `}
  }
  blockquote {
    color: var(--white);
    border-left: 0.3rem solid var(--highlight);
    padding: 0 1.875rem;
    margin: 3.125rem auto;
  }
  hr {
    border: 1px solid var(--shadow-colors);
    margin: 3rem auto;
  }
  #twitter-widget-0,
  .instagram-media,
  .twitter-tweet {
    margin: 20px auto !important;
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    font-weight: 800;
    letter-spacing: 0.069rem;
    line-height: 1.4;
    color: var(--highlight);
  }
  h1 {
    font-size: 2.8rem;

    ${media.lessThan("large")`
      font-size: 1.875rem;
    `}
  }
  h2 {
    font-size: 2.1rem;

    ${media.lessThan("large")`
      font-size: 1.375rem;
    `}
  }
  h3 {
    font-size: 1.6rem;

    ${media.lessThan("large")`
      font-size: 1.125rem;
    `}
  }
  h4 {
    font-size: 1.4rem;
  }
  h5 {
    font-size: 1.2rem;
  }
  strong {
    font-weight: 700;
  }
  .gatsby-resp-image-background-image {
    z-index: 2;
    opacity: 1 !important;
  }
  .gatsby-resp-image-image {
    box-shadow: none !important;
    transition: opacity 0.25s;
    &.lazyload {
      opacity: 0;
    }
    &.lazyloaded {
      opacity: 1;
      z-index: 3;
    }
  }
  .gatsby-highlight {
    padding: 0 1.6rem 1.6rem;

    ${media.lessThan("large")`
      padding: 0;
    `}
  }
  .instagram-media {
    margin: 1rem auto !important;
  }
  a,
  a:visited {
    border-bottom: 1px dashed var(--highlight);
    color: var(--highlight);
    text-decoration: none;
    transition: opacity 0.5s;
    svg {
      color: var(--white);
    }
    &:hover {
      opacity: 0.8;
      border-bottom: none;
    }
  }
  table {
    color: var(--texts);
    border-collapse: separate;
    border-spacing: 0.2rem;
    width: 100%;
    margin-bottom: 1.6rem;
  }
  table td {
    padding: 0.2rem;
  }
  table tr:nth-child(even) {
    background-color: var(--mediumBackground);
  }
`
