import styled from "styled-components"

export const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: var(--56px) 0 0;
  padding: 0 25px;
  position: relative;
  width: 100%;
  color: var(--texts);
  background-color: var(--background);
`

export const Content = styled.div`
  display: grid;
  grid-template-columns: minmax(80%, 980px);
  padding: 50px 0 25px;
`

export const AboutMe = styled.div`
  display: grid;
  grid-template-columns: 30% 45px calc(70% - 45px - 30px);
  gap: 15px;

  & > div:first-of-type,
  & > p {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 35px 0;
  }
`

export const Line = styled.div`
  display: block;
  width: var(--24px);
  height: 100%;
  background: linear-gradient(0deg, var(--highlight) 0%, transparent 100%);
`

export const Description = styled.p`
  font-size: 1.25rem;
  text-align: justify;
`

export const Resumes = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  gap: var(--24px);
  margin: var(--36px) 0 0;

  & > div {
    margin: 0;
  }
`

export const Resume = styled.li`
  width: fit-content;
`

export const Languages = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  gap: var(--64px);
  margin: var(--36px) 0 0;

  & > div {
    margin: 0;
  }
`

export const Language = styled.li`
  &:nth-child(2) {
    color: var(--highlight);
  }

  &:nth-child(3) {
    color: var(--secondary);
  }
`

export const LanguageName = styled.p`
  font-size: 1.2rem;
  font-weight: 900;
  line-height: 125%;
  text-align: right;
  text-transform: uppercase;
`
