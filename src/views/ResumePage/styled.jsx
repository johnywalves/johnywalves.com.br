import styled from "styled-components"

export const ResumeWrapper = styled.main`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-columns: 29% 71%;

  color: var(--texts);
  font-size: 13px;
  font-weight: 400;
  font-family: sans-serif;

  & h1 {
    font-size: 24px;
    font-weight: 700;
  }

  & h2 {
    font-size: 16px;
    font-weight: 500;
    text-transform: uppercase;
    color: var(--highlight);

    & small {
      font-size: 12px;
    }
  }

  & h3 {
    font-size: 13px;
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
  padding: 0 0 0 12px;
`

export const ResumeContent = styled.div`
  height: 100%;
  background-color: var(--background);
  padding: 16px 16px 0 0;
`

export const ResumeSection = styled.section`
  display: flex;
  flex-direction: column;

  margin: 8px 0 0;

  & h1 {
    margin: 16px 0 0 16px;
  }

  & h2 {
    margin: 8px 16px 2px;
  }

  label {
    margin-bottom: 4px;
    margin-left: 16px;
  }

  & img {
    width: 40%;
    height: auto;

    margin: 16px 16px;
  }

  & hr {
    border: 1px var(--highlight) solid;
    border-color: var(--highlight);
    background-color: var(--highlight);
    width: 33%;
  }

  & > ul {
    margin: 4px 0;

    & > li {
      margin: 8px 16px 0;

      & > ul > li {
        margin: 2px 0;
      }
    }
  }

  & > p {
    margin: 4px 16px 0;
    line-height: 120%;

    &.description {
      margin-top: 12px;
      line-height: 130%;
    }

    &.cover {
      font-size: 18px;
      font-weight: 400;
      text-align: justify;
      line-height: 140%;
      margin-top: 16px;

      &:nth-child(2),
      &:nth-last-child(2) {
        margin-top: 48px;
      }
    }
  }

  & > article {
    margin: 0 16px;
  }

  & time {
    align-items: center;
    vertical-align: middle;
    font-weight: 700;
  }
`

export const ResumePerson = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin: 16px 16px 8px;
`

export const ResumeCourse = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 4px;

  margin: 8px 16px 0;

  &:first-of-type {
    margin-top: 12px;
  }

  & p {
    line-height: 130%;
  }

  & p:nth-child(2) {
    line-height: 75%;
  }
`

export const ResumeSubSection = styled.article`
  & li {
    margin: 4px 0 0;
    line-height: 130%;
    text-align: justify;
  }
`

export const ResumeSubTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 4px;

  margin: 12px 0 6px;

  & h3 {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    vertical-align: middle;
    gap: 6px;
  }

  & h4 {
    font-weight: 700;
  }
`
