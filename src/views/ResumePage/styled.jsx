import styled from "styled-components"

export const ResumeWrapper = styled.main`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-columns: 30% 70%;

  color: var(--texts);
  font-size: 0.8rem;

  & h1 {
    font-size: 1.5rem;
    font-weight: 500;
    text-align: center;
  }

  & h2 {
    font-size: 1rem;
    font-weight: 500;
    text-transform: uppercase;
    color: var(--highlight);
  }

  label {
    text-align: center;
  }

  & img {
    border-radius: 40% 60% 60% 40% / 40% 70% 30% 60%;
    align-self: center;
    justify-self: center;
  }

  & p,
  & li {
    font-weight: 300;

    & strong {
      font-weight: 700;

      &.tech {
        font-weight: 500;
      }
    }
  }
`

export const ResumeNavigation = styled.nav`
  height: 100%;
  background-color: var(--background-card);
  padding: 0 0 0 var(--16px);
`

export const ResumeContent = styled.div`
  height: 100%;
  background-color: var(--background);
  padding: var(--16px) var(--16px) 0 0;
`

export const ResumeSection = styled.section`
  display: flex;
  flex-direction: column;

  margin: var(--8px) 0 0;

  & h1 {
    margin: 0;
  }

  & h2 {
    margin: var(--8px) var(--16px);
  }

  label {
    margin-bottom: var(--4px);
  }

  & img {
    width: 40%;
    height: auto;

    margin: var(--16px) var(--16px);
  }

  & hr {
    border: 1px var(--highlight) solid;
    border-color: var(--highlight);
    background-color: var(--highlight);
    width: 33%;
  }

  & > ul {
    margin: var(--4px) 0;

    & > li {
      margin: var(--8px) var(--16px) 0;

      & > ul > li {
        margin: var(--2px) 0;
      }
    }
  }

  & > p {
    margin: var(--16px) var(--16px) 0;
  }

  & > article {
    margin: 0 var(--16px);
  }
`

export const ResumePerson = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin: var(--16px) var(--16px) var(--8px);
`

export const ResumeCourse = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: var(--4px);

  margin: var(--8px) var(--16px) 0;

  &:first-of-type {
    margin-top: var(--16px);
  }

  & div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: var(--4px);
  }
`

export const ResumeSubSection = styled.article`
  & li {
    margin: var(--4px) 0 0;
    line-height: 130%;
  }
`

export const ResumeSubTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: var(--4px);

  margin: var(--16px) 0 0;

  & h3 {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    vertical-align: middle;

    font-size: var(--15px);
    line-height: 80%;
  }
`
