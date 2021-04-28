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
  font-size: 0.9rem;
  font-weight: 300;
`

export const RSSLinksItem = styled.li`
  padding: 0.35rem 0;
  display: flex;
  flex-direction: row;
  align-items: center;

  .active {
    color: var(--highlightDark);
  }

  svg {
    vertical-align: baseline;
  }
`

export const IconWrapper = styled.div`
  fill: #bbb;
  width: 1rem;
  height: 1rem;
  margin-right: 0.35rem;
`
