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
  font-size: 3rem;
  text-align: center;
  margin: 0 0 var(--16px);
  text-shadow: 1px 1px 2px var(--shadow-colors);
`

export const ColorsSelect = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: var(--16px);

  margin: var(--24px) 0 var(--16px);

  & label {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    font-weight: 700;
    font-size: 1.75rem;
    vertical-align: middle;
    text-align: center;
  }

  & input {
    appearance: none;
    border: none;
    outline: none;

    width: var(--128px);
    height: var(--48px);
    background-color: transparent;
    cursor: pointer;

    &::-webkit-color-swatch,
    &::-moz-color-swatch {
      border: none;
      border-radius: var(--8px);
    }
  }
`

export const ColorsDescriptions = styled.div`
  display: flex;
  flex-direction: column;
`

export const ColorsDescriptionsDetails = styled.div`
  display: flex;
  flex-direction: flex-start;
  align-items: center;
  font-size: 1.5rem;

  & p {
    flex-grow: 1;
  }

  & strong {
    margin-right: 0.4rem;
  }

  & p {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    font-size: 1.25rem;

    & span {
      font-size: 0.75rem;
      margin: 0 0.5rem 0 0;
    }
  }
`

export const ColorReferenceTitle = styled.h2`
  margin: var(--32px) 0 var(--8px);
  color: var(--texts);
  font-weight: 400;
  font-size: 1rem;
  border-bottom: 1px solid var(--shadow-colors);

  & strong {
    color: var(--highlight);
    font-weight: 900;
    font-size: 1.5rem;
    margin-right: 0.5rem;
  }
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

  & a {
    color: var(--highlight);
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


export const ColorElementWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
  gap: var(--8px);

  & label {
    font-weight: 700;
    text-align: center;
  }
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

export const ColorElementContent = styled.div`
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
