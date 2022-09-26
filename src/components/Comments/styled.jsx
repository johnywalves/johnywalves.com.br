import styled from "styled-components"
import media from "styled-media-query"

export const CommentsWrapper = styled.section`
  margin: auto;
  max-width: 70rem;
  padding: var(--32px) 6.4rem var(--48px);

  ${media.lessThan("large")`
    padding: 3rem 1.4rem 0;
    max-width: 100%;
  `}

  iframe[src*="ads-iframe"] {
    display: none;
  }

  #disqus_thread {
    color: var(--texts) !important;

    a {
      color: var(--highlight) !important;
    }

    .text-bold {
      color: var(--texts) !important;
    }
  }
`

export const CommentsTitle = styled.h2`
  color: var(--texts);
  font-size: 2rem;
  font-weight: 700;
  padding-bottom: var(--8px);

  ${media.lessThan("large")`
    font-size: 1.375rem;
  `}
`
