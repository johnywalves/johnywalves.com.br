import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

import { lightThird } from "../styled"

export const ProjectCardWrapper = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: var(--8px);
  background-color: var(--background-card);
  z-index: 2;
  transition: 0.25s ease-in-out;

  &:hover {
    ${lightThird}
  }
`

export const ProjectCardGlow = styled.div`
  height: 2px;
  width: 100%;
  flex-shrink: 0;
  background: linear-gradient(90deg, var(--highlight) 0%, transparent 100%);
`

export const ProjectCardImageWrapper = styled.div`
  position: relative;
  height: 130px;
  width: 100%;
  flex-shrink: 0;
`

export const ProjectCardImage = styled(GatsbyImage)`
  height: 130px;
  width: 100%;
`

export const ProjectCardImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 130px;
  width: 100%;
  background: linear-gradient(
    180deg,
    transparent 30%,
    var(--background-card) 100%
  );
`

export const ProjectCardBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--8px);
  padding: var(--16px);
`

export const ProjectCardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--8px);
`

export const ProjectCardTitle = styled.h3`
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.2rem;
  color: var(--texts);
  text-transform: uppercase;
`

export const ProjectCardLinks = styled.div`
  display: flex;
  flex-direction: row;
  flex-shrink: 0;
  gap: var(--8px);
`

export const ProjectCardLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--highlight);
  height: 1.25rem;
  width: 1.25rem;
  transition: 0.25s ease-in-out;

  svg {
    height: 100%;
    width: 100%;
  }

  &:hover {
    color: var(--third);
  }
`

export const ProjectCardDescription = styled.p`
  color: var(--texts);
  font-size: 0.875rem;
  line-height: 1.3rem;
`

export const ProjectCardHeadline = styled.div`
  display: flex;
  align-items: center;
  gap: var(--8px);
  color: var(--highlight);
  font-size: 0.8rem;
  font-weight: 700;
`

export const ProjectCardGlowDot = styled.span`
  height: 6px;
  width: 6px;
  flex-shrink: 0;
  border-radius: 50%;
  background-color: var(--highlight);
  box-shadow: 0 0 6px var(--highlight);
`

export const ProjectCardStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--4px);
  padding-top: var(--8px);
  border-top: 1px solid var(--shadow-colors);
`

export const ProjectCardStackItem = styled.span`
  padding: var(--2px) var(--4px);
  font-size: 0.7rem;
  color: var(--third);
  background-color: var(--background-semi);
  border: 1px solid var(--third-light);
  border-radius: var(--2px);
`
