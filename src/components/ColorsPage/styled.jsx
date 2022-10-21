import styled, { css } from "styled-components"

import PageWrapper from "styles/PageWrapper"

export const ColorsWrapper = styled.main`
  ${PageWrapper}
  color: var(--texts);
`

export const ColorSection = styled.section`
  margin: var(--32px) 0 var(--16px);
  padding: var(--32px);
  border-left: var(--4px) solid var(--highlight);
  background-color: var(--background-card);
`

export const ColorsTitle = styled.h1`
  color: var(--highlight);
`

export const ColorSectionTitle = styled.h2`
  color: var(--highlight);
`

export const ColorSectionSubtitle = styled.h3`
  color: var(--texts);
  font-weight: 400;
  margin: var(--32px) 0 0;

  & strong {
    font-weight: 900;
  }
`

export const ColorSectionDescription = styled.p`
  margin: var(--14px) 0;
  color: var(--texts);
`

export const ColorGrid = styled.div`
  margin: var(--16px) 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: var(--16px);
`

const normalText = css`
  font-size: 1.5rem;

  & svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`

const smallText = css`
  font-size: 1rem;

  & svg {
    width: 1rem;
    height: 1rem;
  }
`

export const ColorElementWrapper = styled.div`
  min-height: 50px;
  padding: 0 var(--8px);
  flex-grow: 1;

  font-weight: 900;
  ${({ small }) => (small ? smallText : normalText)};

  color: ${({ text }) => text};
  background-color: ${({ color }) => color};
  border-radius: var(--8px);

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: var(--8px);

  & svg {
    width: 1.5rem;
    height: 1.5rem;
    font-size: 2rem;
    cursor: pointer;

    &:hover {
      opacity: 0.5;
    }
  }
`
