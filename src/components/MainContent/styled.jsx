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

  ${media.lessThan("medium")`
    padding: 1.5rem 0;
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
  summary,
  .button-post {
    color: var(--texts);
    font-size: 1.25rem;
    font-weight: 400;
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
    margin: 0 auto var(--24px);

    ${media.lessThan("medium")`
      font-size: 1rem;
      margin: 0 auto var(--8px);
    `}
  }
  details {
    margin: 0 0 2rem 1rem;
    padding-top: 1rem;
    border-left: 2px solid var(--highlight-semi);

    & summary {
      color: var(--highlight);
      font-weight: 700;
      cursor: pointer;
      margin-bottom: 1rem;

      &:hover {
        opacity: 0.8;
      }

      &::marker {
        margin-right: 1rem;
      }
    }
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
    ${media.lessThan("medium")`
      font-size: 1rem;
    `}
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
    padding: 1.5rem 1rem 0.25rem;
    margin: 2rem 1rem;
  }
  hr {
    border: 1px solid var(--shadow-colors);
    margin: 2rem 1rem 2rem;
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
    width: calc(100% - 2rem);
    margin: 1.5rem auto 1rem;
  }
  table thead {
    height: 2.25rem;
  }
  table thead tr th {
    border-bottom: 2px solid var(--shadow-colors);
  }
  table th,
  table td {
    padding: 0.5rem;
  }
  table th,
  table tr:nth-child(even) {
    color: var(--texts);
    background-color: var(--color-line);
  }
  .center {
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .bold {
    font-weight: 900;
  }
  .text-color {
    color: var(--white);
    font-weight: 700;
    padding: 4px 8px;
    border-radius: 4px;

    &.light {
      color: #333;
    }
  }
  .d3_graph {
    color: var(--texts);
    width: 100%;
    min-height: 15rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    & #loading_graphic {
      border: 0.75rem solid var(--background);
      border-left-color: var(--highlight);
      border-bottom-color: var(--highlight-semi);
      height: 7rem;
      width: 7rem;
      border-radius: 50%;
      animation: spin 1s linear infinite;
    }

    & svg {
      & text {
        font-size: 0.75rem;
        font-weight: 600;
      }

      & .domains {
        & path,
        & line {
          fill: none;
          opacity: 0.5;
        }

        & path {
          stroke-width: 2px;
        }

        & line {
          stroke-width: 1px;
        }
      }

      & .line {
        fill: none;
        stroke-width: 4px;
      }

      & .grid {
        & path {
          display: none;
        }

        & line {
          fill: none;
          stroke-width: 1px;
          stroke: var(--shadow-colors);
          opacity: 0.5;
        }
      }

      & .legend {
        font-size: 1rem;
      }
    }
  }
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`
