import styled from "styled-components"
import media from "styled-media-query"

export const SocialLinksWrapper = styled.nav`
  margin: 2rem auto;
  width: 100%;

  ${({ about }) =>
    !about &&
    media.lessThan("large")`
        display: none;
      `}
`

export const SocialLinksList = styled.ul`
  align-items: center;
  display: flex;
  justify-content: space-around;
  list-style: none;

  &.about {
    align-items: flex-start;
    justify-content: flex-start;
  }
`

export const SocialLinksItem = styled.li`
  .about & {
    margin-right: 1rem;
  }
`

export const SocialLinksLink = styled.a`
  color: var(--texts);
  text-decoration: none;
  transition: color 0.5s;

  &:hover {
    color: var(--highlight);
  }
`

export const IconWrapper = styled.div`
  fill: #bbb;
  width: 1.5rem;
  height: 1.5rem;
`
