import styled, { css, keyframes } from "styled-components"

export const Wrapper = styled.section`
  position: relative;
  width: 100%;
  padding: 45px 15px 80px;
  color: var(--texts);
  background-color: var(--background);
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Types = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 20px;
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
    color: var(--shadowColors);
  }

  ${({ selected }) => selected && selectedType}
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
  max-height: 100rem;
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
    text-shadow: 2px 2px 1px var(--shadowColors);
    text-align: center;
  }

  & > div {
    margin-bottom: 15px;
  }

  & svg {
    filter: drop-shadow(0 0 1px var(--shadowColors))
      drop-shadow(2px 2px 1px var(--shadowColors));
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
`

const selectedArea = css`
  max-height: 100rem;
  padding: 30px 0 0;
  animation: ${fadeInInfo} 1s ease-out forwards;
`

export const Area = styled.div`
  display: grid;
  grid-template-columns: minmax(80%, 980px);
  padding: 0;

  overflow: hidden;
  max-height: 0;
  opacity: 0;
  transition: opacity 0.5s ease-out;

  ${({ selected }) => selected && selectedArea}
`

export const Title = styled.h4`
  font-size: 1.1rem;
`

export const Institution = styled.span``

export const DateText = styled.p`
  padding: 0 0 5px;
  font-weight: 300;
`

const listDescriptions = css`
  list-style: disc inside;
`

export const Descriptions = styled.ul`
  padding: 5px 0;

  ${({ list }) => list && listDescriptions}
`

export const Description = styled.li`
  padding: 0.125rem 0;
  line-height: 140%;
  vertical-align: middle;
`

export const Production = styled.a`
  color: var(--highlight);

  &:visited {
    color: var(--highlight);
  }

  &:hover {
    color: var(--highlight);
    text-decoration: underline;
  }
`

export const Accomplishment = styled.div`
  margin: 0 0 15px;
`
