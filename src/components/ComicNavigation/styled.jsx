import styled, { css } from "styled-components"
import media from "styled-media-query"
import Anilink from "gatsby-plugin-transition-link/AniLink"

export const NavigationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 35px 0 15px;
`

export const Navigation = styled(Anilink)`
  z-index: 3;
`

const iconDisabled = css`
  color: var(--texts) !important;
  opacity: 0.3;
  cursor: default;
  pointer-events: none;
`

const iconHover = css`
  &:hover {
    transform: scale(1.5);
  }
`

const colorHighlight = css`
  color: var(--highlight) !important;
`

const colorWhite = css`
  color: var(--white) !important;
`

export const Icon = styled(Anilink)`
  width: 2rem;
  height: 2rem;
  transition: 0.25s ease-in-out;
  z-index: 3;

  ${({ light }) => (light ? colorHighlight : colorWhite)}
  ${({ disabled }) => (disabled ? iconDisabled : iconHover)}

  & svg {
    width: 100%;
    height: 100%;
  }

  ${media.lessThan("medium")`
    width: 1.5rem;
    height: 1.5rem;
  `}
`

export const Pagination = styled.p`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  text-align: center;
  font-weight: 300;

  & span {
    margin: 0 var(--8px);
    font-weight: 500;
  }
`
