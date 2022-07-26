import styled, { css } from "styled-components"
import Anilink from "gatsby-plugin-transition-link/AniLink"

export const Wrapper = styled.div``

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 30px;
`

export const Content = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  gap: 25px;
  list-style: none;
  flex-wrap: wrap;
`

export const NavigationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 35px 0 15px;
`

const iconDisabled = css`
  color: var(--texts) !important;
  opacity: 0.6;
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

  ${({ light }) => (light ? colorHighlight : colorWhite)}
  ${({ disabled }) => (disabled ? iconDisabled : iconHover)}

  & svg {
    width: 100%;
    height: 100%;
  }
`

export const Navigation = styled(Anilink)``
