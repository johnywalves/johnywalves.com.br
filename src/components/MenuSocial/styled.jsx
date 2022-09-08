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

  svg {
    fill: var(--highlight);
  }
`

export const MenuSocialWrapper = styled.nav`
  width: 100%;

  svg {
    fill: var(--texts);
  }

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
  cursor: pointer;

  p {
    margin-left: var(--8px);
    transition: 0.25s ease-in-out;
  }

  svg {
    margin: 1rem 0;
    width: 1.5rem;
    height: 1.5rem;
    transition: 0.25s ease-in-out;
  }

  &:hover {
    p {
      font-weight: 700;
      font-size: 1.25rem;
    }

    svg {
      margin: 0.25rem 0;
      width: 2rem;
      height: 2rem;
    }
  }
`

export const Link = styled.a`
  color: var(--texts);
  text-decoration: none;
  transition: color 0.5s;
`

export const IconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
