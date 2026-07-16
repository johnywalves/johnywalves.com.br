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
  background: linear-gradient(90deg, ${({ $badgeType }) => {
    if ($badgeType === "SPOTLIGHT") return "var(--highlight)";
    if ($badgeType === "FEATURED") return "var(--third)";
    if ($badgeType === "TOOLS") return "var(--secondary)";
    return "var(--highlight)";
  }} 0%, transparent 100%);
`

export const ProjectCardImageWrapper = styled.div`
  position: relative;
  height: 180px;
  width: 100%;
  flex-shrink: 0;
`

export const ProjectCardImage = styled(GatsbyImage)`
  height: 180px;
  width: 100%;
`

export const ProjectCardImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 180px;
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
  flex-grow: 1;
  gap: var(--8px);
  padding: var(--16px);
`

export const ProjectCardHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--8px);
`

export const ProjectCardMetaRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

export const ProjectCardMeta = styled.div`
  display: flex;
  align-items: center;
  gap: var(--8px);
  font-size: 0.75rem;
`

export const ProjectCardBadge = styled.span`
  padding: 2px 6px;
  border: 1px solid ${({ $type }) => {
    if ($type === "SPOTLIGHT") return "var(--highlight)";
    if ($type === "FEATURED") return "var(--third)";
    if ($type === "TOOLS") return "var(--secondary)";
    return "var(--texts)";
  }};
  color: ${({ $type }) => {
    if ($type === "SPOTLIGHT") return "var(--highlight)";
    if ($type === "FEATURED") return "var(--third)";
    if ($type === "TOOLS") return "var(--secondary)";
    return "var(--texts)";
  }};
  background-color: ${({ $type }) => {
    if ($type === "SPOTLIGHT") return "rgba(224, 19, 140, 0.1)";
    if ($type === "FEATURED") return "rgba(68, 181, 239, 0.1)";
    if ($type === "TOOLS") return "rgba(136, 87, 195, 0.1)";
    return "transparent";
  }};
  border-radius: var(--4px);
`

export const ProjectCardYear = styled.span`
  color: var(--shadow-colors);
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
  margin-bottom: auto;
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
  background-color: ${({ $type }) => {
    if ($type === "SPOTLIGHT") return "var(--highlight)";
    if ($type === "FEATURED") return "var(--third)";
    if ($type === "TOOLS") return "var(--secondary)";
    return "var(--highlight)";
  }};
  box-shadow: 0 0 6px ${({ $type }) => {
    if ($type === "SPOTLIGHT") return "var(--highlight)";
    if ($type === "FEATURED") return "var(--third)";
    if ($type === "TOOLS") return "var(--secondary)";
    return "var(--highlight)";
  }};
`

export const ProjectCardStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--4px);
  padding-top: var(--8px);
  border-top: 1px solid var(--shadow-colors);
`

export const ProjectCardStackItem = styled.span`
  padding: var(--2px) var(--8px);
  font-size: 0.7rem;
  color: var(--color-line);
  background-color: transparent;
  border: 1px solid var(--color-line);
  border-radius: var(--2px);
`
