import styled from "styled-components"
import media from "styled-media-query"

export const MainContentWrapper = styled.section`
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
    color: var(--texts);
    background-color: var(--background-card);
    border-left: 0.3rem solid var(--highlight);
    padding: 1.5rem 1.25rem 1rem;
    margin: 3rem auto;
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
    font-size: 1.4rem;

    ${media.lessThan("large")`
      font-size: 1.125rem;
    `}
  }
  h4 {
    font-size: 1.2rem;

    ${media.lessThan("large")`
      font-size: 1rem;
    `}
  }
  h5 {
    font-size: 1rem;
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
    border-spacing: 0.25rem;
    width: 100%;
    margin-bottom: 1.6rem;
    border: 1px solid var(--shadow-colors);
  }
  table thead {
    height: 2rem;
  }
  table th,
  table td {
    padding: 0.25rem;
  }
  table th,
  table tr:nth-child(even) {
    color: var(--texts);
    background-color: var(--shadow-colors);

    body.dark & {
      color: var(--background);
    }
  }
  .text-color {
    color: var(--white);
    font-weight: 700;
    padding: 2px 4px;
    border-radius: 4px;

    &.light {
      color: #333;
    }
  }
`
