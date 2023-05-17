import React from "react"
import media from "styled-media-query"
import styled, { css, keyframes } from "styled-components"

export const ExperienceWrapper = styled.section`
  position: relative;
  width: 100%;
  padding: 45px var(--padding-horizontal);
  color: var(--texts);

  background: url("/vectors/triangle-neon.svg"),
    url("/vectors/triangle-wall-bottom.svg");
  background-color: var(--background);
  background-size: 20%, 30%;
  background-repeat: no-repeat;
  background-position: top left, bottom right;

  ${media.lessThan("medium")`
    background-size: 30%, 50%;
  `}
`

export const ExperienceContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 2;
`

export const Types = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 20px;

  ${media.lessThan("medium")`
    flex-direction: column;
    gap: 0;
  `}
`

const selectedType = css`
  color: var(--highlight);
  cursor: default;

  &:hover {
    color: var(--highlight);
  }
`

export const Type = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-transform: uppercase;
  font-weight: 700;
  color: var(--texts);
  margin: 30px 0 15px;
  cursor: pointer;
  transition: 0.25s ease-in-out;

  & p {
    text-align: center;
  }

  &:not(:last-of-type):after {
    content: "|";
    margin-left: 20px;
    cursor: default;
    color: var(--texts) !important;
  }

  &:hover {
    color: var(--shadow-colors);
  }

  ${({ selected }) => selected && selectedType}

  ${media.lessThan("medium")`
    margin: var(--16px) 0;

    &:not(:last-of-type):after {
      content: "";
    }
  `}
`

export const SkillsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px 0 0;
`

const fadeInInfo = keyframes`
  0% {
    opacity: 0;
    filter: blur(4px);
  }
  50% {
    opacity: 0.75;
    filter: blur(0);
  }
  100% {
    opacity: 1;
  }
`

const selectedSkill = css`
  max-height: 200rem;
  animation: ${fadeInInfo} 1s ease-out forwards;
`

export const Skills = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 0;
  overflow: hidden;
  max-height: 0;
  opacity: 0;
  transition: opacity 0.5s ease-out;
  width: 835px;

  ${media.lessThan("medium")`
    width: calc( 100% - var(--32px));
  `}

  ${({ selected }) => selected && selectedSkill}
`

export const Skill = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: var(--96px);
  min-height: var(--96px);
  font-size: 1.25rem;
  margin: 15px 10px;

  & p {
    text-shadow: 2px 2px 1px var(--shadow-colors);
    text-align: center;
  }

  & > div {
    margin-bottom: 15px;
  }

  & svg {
    filter: drop-shadow(0 0 1px var(--shadow-colors))
      drop-shadow(2px 2px 1px var(--shadow-colors));
  }
`

export const IconWrapper = styled.div`
  width: 3rem;
  height: 3rem;
  margin-bottom: 6px;
  border-radius: 15px;
`

export const Areas = styled.div`
  display: flex;
  flex-direction: row;
  gap: 25px;
  margin: 30px 0 15px;
  padding: 0 var(--padding-horizontal);

  ${media.lessThan("medium")`
    flex-direction: column;
  `}
`

const selectedArea = css`
  max-height: 5000px;
  padding: 30px 0 0;
  animation: ${fadeInInfo} 1s ease-out forwards;
`

export const Area = styled.ul`
  display: grid;
  grid-template-columns: minmax(80%, 980px);
  padding: 0;

  overflow: hidden;
  max-height: 0;
  opacity: 0;
  transition: opacity 0.5s ease-out;

  ${({ selected }) => selected && selectedArea}
`

export const AreaButton = styled.li`
  padding: var(--16px) 0 0;
  display: flex;
  justify-content: center;

  & > div {
    width: fit-content;
  }
`

export const DateText = styled.p`
  padding: 0 0 var(--8px);
  font-weight: 500;
  color: var(--highlight);
`

export const Title = styled.h3`
  font-size: 1.1rem;
  color: var(--highlight);
`

export const Institution = styled.span`
  font-weight: 500;
`

const listDescriptions = css`
  list-style-type: disc; 
  list-style-position: inside;
`

export const Descriptions = styled.div`
  padding: 5px 0;

  ${({ list }) => list && listDescriptions}
`

export const ExperienceDescription = styled.p`
  padding: 0.125rem 0 0.5rem;
  line-height: 140%;
  vertical-align: middle;
  font-weight: 400;
`

const WrapperIcon = styled.a`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 2rem;
  margin: 0 0 0 var(--24px);
  align-self: center;
  cursor: pointer;
  transition: 0.25s ease-in-out;

  svg {
    height: 100%;
    margin: 0 0.75rem 0 0;
  }

  &:hover {
    color: var(--highlight);
  }
`

const LinkIcon = (props) => (
  <WrapperIcon
    target="_blank"
    rel="noreferrer noopener"
    aria-label="Certification"
    {...props}
  />
)

export const WrapperAward = styled(LinkIcon)`
  margin: 1rem 0;
`

export const Icon = styled(LinkIcon)`
  margin: 0 0 0 var(--24px);
`

export const Production = styled.a`
  color: var(--highlight);
  font-weight: 500;

  &:visited {
    color: var(--highlight);
  }

  &:hover {
    color: var(--highlight);
    text-decoration: underline;
  }
`

const hiddenWrapperAccomplishment = css`
  max-height: 0;
  padding: 0;
`

const WrapperAccomplishment = styled.li`
  max-height: 50rem;
  padding: 0 var(--36px) var(--36px) var(--48px);
  animation: ${fadeInInfo} 1s ease-out forwards;

  ${media.lessThan("medium")`
    padding: 0 var(--16px) var(--36px) var(--48px);
  `}

  &::before {
    content: "";
    width: 0;
    height: 100%;
    position: absolute;
    left: 16px;
    top: 0;
    display: block;
    border-left: 4px solid var(--shadow-colors);
  }

  &:first-child::before {
    height: 50%;
    top: 50%;
  }

  &:nth-last-child(2)::before {
    height: 50%;
  }

  &::after {
    content: "";
    width: var(--36px);
    height: var(--36px);
    transition: 0.5s ease-in-out;
    border: var(--8px) solid var(--background);
    border-radius: 50%;
    position: absolute;
    left: 0;
    top: calc(50% - var(--36px));
    display: block;
    background: linear-gradient(0, var(--highlight), var(--highlight)),
      linear-gradient(0, var(--background), var(--background));
    background-clip: padding-box, border-box;
  }

  &:hover {
    &::after {
      border-color: var(--shadow-colors);
    }
  }

  ${({ hidden }) => hidden && hiddenWrapperAccomplishment}
`

const ContentAccomplishment = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: var(--background-card);
  padding: var(--16px);
  border-radius: var(--14px);

  transition: 0.5s ease-in-out;
  box-shadow: 0 0 8px 1px var(--shadow-colors),
    4px 4px 8px 1px var(--shadow-colors);

  ${WrapperAccomplishment}:hover & {
    transform: translateY(-2px);
    box-shadow: 0 0 16px 2px var(--shadow-colors),
      8px 8px 16px 2px var(--shadow-colors);
  }
`

export const Accomplishment = ({ children, icon, hidden }) => (
  <WrapperAccomplishment hidden={hidden}>
    <ContentAccomplishment>
      <div>{children}</div>
      {icon}
    </ContentAccomplishment>
  </WrapperAccomplishment>
)

export const BoxShape = styled.div`
  position: absolute;
  right: -250px;
  z-index: 1;

  ${media.lessThan("medium")`
    right: -350px;
  `}
`
