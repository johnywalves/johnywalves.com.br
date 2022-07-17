import styled from "styled-components"
import Anilink from "gatsby-plugin-transition-link/AniLink"

export const Wrapper = styled.div``

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
  padding: 35px 0 15px;
`

export const Navigation = styled(Anilink)`
  padding: 7px 30px;
  border-radius: 20px;
  cursor: pointer;
  font-weight: 900;
  transition: 0.25s ease-in-out;
  border: 2px solid var(--white);
  color: var(--white) !important;

  &:hover {
    border: 2px solid var(--highlight);
    color: var(--highlight) !important;
    background-color: var(--white);
  }
`
