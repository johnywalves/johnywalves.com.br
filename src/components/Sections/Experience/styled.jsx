import styled, { css } from "styled-components"

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
  text-transform: uppercase;
  font-weight: 700;
  color: var(--texts);
  margin: 30px 0;
  cursor: pointer;
  transition: 0.25s ease-in-out;

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
  padding: 30px 0;
`

const selectedSkill = css`
  max-height: 100rem;
`

export const Skills = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  overflow: hidden;
  max-height: 0;

  ${({ selected }) => selected && selectedSkill}
`

export const Skill = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: var(--96px);
  height: var(--96px);
  font-size: 1.25rem;
  margin: 0 10px;

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

export const Accordion = styled.div`
  max-height: 0;
  overflow: hidden;
`
