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
  margin: 0 0 var(--24px);

  p {
    color: var(--white);
  }

  svg {
    fill: var(--white);
  }

  ${({ $vertical }) => $vertical && verticalWrapper}
`

const verticalList = css`
  flex-direction: column;
`

export const MenuSocialList = styled.ul`
  align-items: center;
  display: flex;
  justify-content: flex-start;
  gap: var(--8px);

  ${({ $vertical }) => $vertical && verticalList}
`

const itemContact = css`
  svg {
    fill: var(--highlight);
  }
`

export const Item = styled.li`
  margin: var(--4px) 0;
  cursor: pointer;

  p {
    margin-left: var(--8px);
    transition: all 0.25s ease-in-out;
  }

  svg {
    margin: 0.5rem;
    width: 1.5rem;
    height: 1.5rem;
    transition: all 0.25s ease-in-out;
  }

  &:hover {
    p {
      margin-left: var(--4px);
      font-weight: 700;
      font-size: 1.25rem;
    }

    svg {
      margin: 0;
      width: 2.5rem;
      height: 2.5rem;
    }
  }

  ${({ $contact }) => $contact && itemContact}
`

export const Link = styled.a`
  text-decoration: none;
  transition: color 0.5s;
`

export const IconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
