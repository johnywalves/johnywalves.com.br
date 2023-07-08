import styled from "styled-components"

export const ResumeWrapper = styled.main`
  width: 100%;

  color: var(--texts);
  font-size: 12px;
  font-weight: 400;
  font-family: sans-serif;

  & h1 {
    font-size: 16px;
    font-weight: 700;
  }

  & h2 {
    font-size: 14px;
    font-weight: 700;
    color: var(--highlight);

    & small {
      font-size: 10px;
      color: var(--shadow-colors);
    }
  }

  & h3 {
    font-size: 14px;
    display: flex;
    align-items: center;
    vertical-align: middle;

    & time {
      font-size: 12px;
      font-weight: 400;
    }
  }

  & h4 {
    font-size: 12px;
    font-weight: 700;
  }

  & img {
    border-radius: 40% 60% 60% 40% / 40% 70% 30% 60%;
    align-self: center;
    justify-self: center;
  }

  & p,
  & li {
    font-weight: 400;
    line-height: 140%;

    & strong {
      font-weight: 700;

      &.tech {
        font-weight: 500;
      }
    }
  }
`

export const ResumeSheet = styled.div`
  height: 100vh;
  background-color: var(--background);
  padding: 32px 48px 0;
  position: relative;
`

export const ResumeFooter = styled.footer`
  position: absolute;
  padding: 0.5rem 0 1rem;
  bottom: 0;
  width: calc(100% - 96px);

  border-top: 1px solid var(--highlight);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const ResumeSection = styled.section`
  display: flex;
  flex-direction: column;

  margin: 8px 0 0;

  & h1 {
    margin: 16px 0 0 8px;
  }

  & h2 {
    margin: 4px 0 0;
  }

  & h4 {
    margin: 2px 0 0;
  }

  label {
    margin-bottom: 4px;
    margin-left: 16px;
  }

  & hr {
    border: none;
    border-bottom: 1px solid var(--highlight);
    height: 1px;
    width: 100%;
  }

  & > ul {
    margin: 4px 0;

    & > li {
      margin: 4px 0 0;

      & > ul > li {
        margin: 2px 0;
      }
    }
  }

  & > p {
    margin: 0;

    &.description {
      margin-top: 12px;
      text-align: justify;
    }

    &.cover {
      font-size: 14px;
      font-weight: 400;
      text-align: justify;
      margin-top: 16px;

      &:nth-child(2),
      &:nth-last-child(2) {
        margin-top: 32px;
      }
    }
  }

  & time {
    align-items: center;
    vertical-align: middle;
  }
`

export const ResumePerson = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 0 0 12px;

  & h1 {
    margin: 0 0 12px;
  }

  & ul  {
    display: flex;
    flex-direction: column;
    align-items: center;

    & li {
      margin-top: 2px;
    }
  }
`

export const ResumeCourse = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 4px;

  margin: 8px 0 0;

  &:first-of-type {
    margin-top: 12px;
  }

  & time {
    margin-left: 2px;
  }
`

export const ResumeSubSection = styled.article`
  margin: 0 0 8px;

  & li {
    margin: 4px 0 0;
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
`
