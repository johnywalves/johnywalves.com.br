import styled from "styled-components"

export const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 30px 0 15px;
  position: relative;
  width: 100%;
  color: var(--texts);
  background-color: var(--background);
`

export const Content = styled.div`
  display: grid;
  grid-template-columns: minmax(80%, 980px);
  padding: 0 25px;
`

export const AboutMe = styled.div`
  display: grid;
  grid-template-columns: 35% 30px calc(65% - 30px - 60px);
  gap: 30px;
  margin: 25px 0 15px;

  & > div,
  p {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 25px 0;
  }
`

export const Line = styled.div`
  display: block;
  width: 30px;
  height: 100%;
  min-height: 200px;
  background: linear-gradient(
    0deg,
    var(--highlight) 0%,
    var(--highlight) 50%,
    transparent 100%
  );
`

export const Description = styled.p`
  font-size: 1.25rem;
`

export const Details = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 50%);
`

export const Resumes = styled.ul`
  margin: 50px 0;

  & a:nth-child(2) li {
    border-color: var(--highlight);
  }

  & a:nth-child(3) li {
    border-color: var(--secondary);
  }

  & a:not(:last-child) li {
    margin-bottom: 20px;
  }
`

export const Resume = styled.li`
  padding: 10px 20px;
  border: 3px solid var(--white);
  border-radius: 20px;
  width: fit-content;
`

export const Languages = styled.ul`
  margin: 50px 0;
`

export const Language = styled.li`
  &:nth-child(2) {
    color: var(--highlight);
  }

  &:nth-child(3) {
    color: var(--secondary);
  }

  &:not(:last-child) {
    margin-bottom: 20px;
  }
`

export const LanguageName = styled.p`
  font-weight: 900;
  font-size: 1.125rem;
  line-height: 125%;
`

export const LanguageProficiency = styled.p`
  font-size: 0.9rem;
`
