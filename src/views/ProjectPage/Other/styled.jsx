import styled, { css } from "styled-components"

import { lightThird } from "../styled"

export const OtherProjectWrapper = styled.li`
  justify-self: center;
  position: relative;

  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 1fr;
  justify-content: space-between;
  align-items: flex-start;

  width: 240px;
  border-radius: var(--8px);
  padding: var(--16px);
  color: var(--highlight);
  z-index: 2;

  ${lightThird}

  background: url("/vectors/triangle-wall-top.svg");
  background-color: var(--background-card);
  background-size: 110%;
  background-repeat: no-repeat;
  background-position: top left;
`

export const OtherProjectTitle = styled.h3`
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.2rem;
  color: var(--texts);
  text-transform: uppercase;
  text-align: left;
  width: 100%;
  margin: var(--8px) 0;
`

export const OtherProjectDescription = styled.p`
  color: var(--texts);
  margin: var(--4px) 0;
`

export const OtherProjectLinks = styled.div`
  display: flex;
  flex-direction: row;
  align-self: flex-end;
  justify-content: flex-end;
  margin: var(--16px) 0 0 0;
  gap: var(--8px);
`

const negativeLink = css`
  border-radius: 50%;
  background-color: var(--highlight);
  background-clip: padding-box;

  svg {
    color: var(--background);
    height: 80%;
    width: 80%;
  }
`

export const OtherProjectLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.25rem solid transparent;
  height: 2.5rem;
  width: 2.5rem;
  transition: 0.25s ease-in-out;

  svg {
    height: 100%;
    width: 100%;
  }

  &:hover {
    border-width: 0;
  }

  ${({ $negative }) => $negative && negativeLink}
`
