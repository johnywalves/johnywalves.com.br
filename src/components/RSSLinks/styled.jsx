import styled from "styled-components"
import media from "styled-media-query"

export const RSSLinksWrapper = styled.nav`
  ${media.lessThan("large")`
    display: none;
  `}

  ul {
    display: flex;
    flex-direction: row;
  }

  li {
    margin: 0 1rem;
    font-size: 1rem;
  }

  a,
  a:hover,
  a:visited {
    display: flex;
    flex-direction: row;
    align-items: center;

    text-decoration: none;
    color: var(--texts);
  }

  a:hover {
    color: var(--highlight);
  }
`

export const RSSLinksList = styled.ul`
  font-size: 1.2rem;
  font-weight: 300;
`

export const RSSLinksItem = styled.li`
  padding: 0.5rem 0;

  .active {
    color: var(--highlightDark);
  }
`

export const IconWrapper = styled.div`
  fill: #bbb;
  width: 1.25rem;
  height: 1.25rem;
  margin-right: 0.35rem;
`
