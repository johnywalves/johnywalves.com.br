import styled, { css } from "styled-components"

export const Banner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 12rem;
  padding: 12px 30px;
  border-radius: 25px;
  color: var(--white);
  background-color: var(--highlight-semi);
  transform: translate(-50%, -50%) scale(1.25);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 0.5s ease-in-out;

  li:hover & {
    background-color: var(--highlight-semi);
    transform: translate(-50%, -50%) scale(1);
  }
`

export const Title = styled.h3`
  width: 100%;
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;
  transition: 0.5s ease-in-out;
`

export const Links = styled.div`
  margin: var(--4px) 0 0 0;
  display: flex;
  flex-direction: row;
  gap: var(--8px);
`

const sourceCodeNegative = css`
  border-radius: 50%;
  background-color: var(--white);
  background-clip: padding-box;

  svg {
    color: var(--highlight);
    height: 80%;
    width: 80%;
  }
`

export const SourceCode = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

  border: 0.25rem solid transparent;
  height: 2.25rem;
  width: 2.25rem;
  transition: 0.25s ease-in-out;

  svg {
    height: 100%;
    width: 100%;
  }

  &:hover {
    border-width: 0;
  }

  ${({ negative }) => negative && sourceCodeNegative}
`
