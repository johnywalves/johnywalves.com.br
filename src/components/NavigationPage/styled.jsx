import styled, { css } from "styled-components"
import media from "styled-media-query"

import Anilink from "gatsby-plugin-transition-link/AniLink"

export const NavigationWrapper = styled.section`
  align-items: center;
  border-top: 1px solid var(--shadow-colors);
  color: var(--texts);
  font-weight: 700;
  display: flex;
  padding: var(--36px) 3rem;
  justify-content: center;
  gap: var(--48px);

  ${media.lessThan("large")`
    font-size: .8rem;
    padding: 1rem;
  `}

  a {
    color: var(--texts);
    text-decoration: none;
    transition: color 0.5s;

    &:hover {
      color: var(--highlight);
    }
  }
`

const mirrorLinkNavigation = css`
  transform: rotate(180deg);
`

const disabledLinkNavigation = css`
  opacity: 0.5;
  pointer-events: none;

  &:hover {
    color: var(--texts);
  }
`

export const LinkNavigation = styled(Anilink)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--8px);

  ${({ disabled }) => disabled && disabledLinkNavigation}

  svg {
    height: 1rem;
    width: 1rem;

    ${({ mirror }) => mirror && mirrorLinkNavigation}
  }
`
