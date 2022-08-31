import styled, { css } from "styled-components"

const verticalWrapper = css`
  a,
  a:hover,
  a:visited {
    color: var(--highlight);
  }

  ul {
    width: 2rem;
  }
`

export const MenuSocialWrapper = styled.nav`
  width: 100%;

  ${({ vertical }) => vertical && verticalWrapper}
`

const verticalList = css`
  flex-direction: column;
`

export const MenuSocialList = styled.ul`
  align-items: center;
  display: flex;
  justify-content: flex-start;
  gap: 1rem;

  ${({ vertical }) => vertical && verticalList}
`

export const Item = styled.li`
  margin: 1rem 0;
  transition: 0.25s ease-in-out;

  div {
    transition: 0.25s ease-in-out;
  }

  &:hover {
    margin: 0.5rem 0;

    div {
      width: 2.5rem;
      height: 2.5rem;
    }
  }
`

export const Link = styled.a`
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
