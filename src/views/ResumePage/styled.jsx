import styled from "styled-components"

export const ResumeWrapper = styled.main`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-columns: 30.5% 69.5%;

  color: var(--texts);
  font-size: 0.8125rem;

  & h1 {
    font-size: 1.5rem;
    font-weight: 700;
  }

  & h2 {
    font-size: 0.9375rem;
    font-weight: 500;
    text-transform: uppercase;
    color: var(--highlight);

    & small {
      font-size: 0.75rem;
    }
  }

  & h3 {
    font-size: 0.8125rem;
  }

  & time {
    font-weight: 400;
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
  padding: 0 0 0 var(--12px);
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
    margin: var(--16px) 0 0 var(--16px);
  }

  & h2 {
    margin: var(--8px) var(--16px) var(--2px);
  }

  label {
    margin-bottom: var(--4px);
    margin-left: var(--16px);
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

    &.separator {
      border: 1px var(--texts) solid;
      border-color: var(--texts);
      background-color: var(--texts);
      width: 50%;
      opacity: 0.5;
    }
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
    margin: var(--4px) var(--16px) 0;
    line-height: 120%;

    &.description {
      margin-top: var(--16px);
      line-height: 130%;
    }

    &.cover {
      font-size: 1.125rem;
      font-weight: 400;
      text-align: justify;
      line-height: 140%;
      margin-top: var(--16px);

      &:nth-child(2),
      &:nth-last-child(2) {
        margin-top: var(--48px);
      }
    }
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

  & p {
    line-height: 140%;
  }
`

export const ResumeSubSection = styled.article`
  & li {
    margin: var(--4px) 0 0;
    line-height: 130%;
    text-align: justify;
  }
`

export const ResumeSubTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--4px);

  margin: var(--16px) 0 var(--4px);

  & h3 {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    vertical-align: middle;
  }
`
