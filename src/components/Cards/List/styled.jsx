import styled, { css } from "styled-components"
import Anilink from "gatsby-plugin-transition-link/AniLink"

export const Wrapper = styled.div``

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 30px;
`

export const Title = styled.h2`
  font-size: 2rem;
  text-transform: uppercase;
  color: var(--white);

  .light-wrapper & {
    color: var(--highlight);
  }
`

export const Line = styled.div`
  width: 20px;
  border: 2px solid var(--white);

  .light-wrapper & {
    border: 2px solid var(--highlight);
  }
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
  color: var(--white) !important;

  .light-wrapper & {
    color: var(--highlight) !important;
  }
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

export const Icon = styled(Anilink)`
  width: 2rem;
  height: 2rem;
  transition: 0.25s ease-in-out;

  ${({ disabled }) => (disabled ? iconDisabled : iconHover)}

  & svg {
    width: 100%;
    height: 100%;
  }
`

export const Navigation = styled(Anilink)``
