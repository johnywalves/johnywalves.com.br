import styled from "styled-components"

export const Wrapper = styled.section`
  position: relative;
  width: 100%;
  padding: 45px 15px 80px;
  color: var(--texts);
  background-color: var(--background);
`

export const Types = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 20px;
`

export const Skills = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 35px;
`

export const Skill = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: var(--96px);
  height: var(--72px);
`

export const IconWrapper = styled.div`
  width: 3rem;
  height: 3rem;
  margin-bottom: 6px;
  border-radius: 15px;
`
