import styled from "styled-components"
import media from "styled-media-query"

export const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: var(--56px) 0 0;
  padding: 0 var(--padding-horizontal);
  position: relative;
  width: 100%;
  color: var(--texts);
  background: url("/vectors/triangle-neon-right.svg");
  background-color: var(--background);
  background-size: 10%;
  background-repeat: no-repeat;
  background-position: top right;

  ${media.lessThan("medium")`
    background-size: 30%;
  `}
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

  ${media.lessThan("medium")`
    display: flex;
    flex-direction: column;

    & > div:first-of-type,
    & > p {
      padding: 0;
    }
  `}
`

export const Line = styled.div`
  display: block;
  width: var(--24px);
  height: 100%;
  background: linear-gradient(0deg, var(--highlight) 0%, transparent 100%);

  ${media.lessThan("medium")`
    display: none;
  `}
`

export const Description = styled.p`
  font-size: 1.25rem;
  text-align: left;

  ${media.lessThan("medium")`
    font-size: 1rem;
  `}
`

export const Resumes = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  gap: var(--24px);
  margin: var(--36px) 0 0;

  & > li div {
    margin: 0;
  }

  ${media.lessThan("medium")`
    flex-direction: column;
    align-items: flex-start;
  `}
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

  & > li div {
    margin: 0;
  }

  ${media.lessThan("medium")`
    flex-direction: column;
    align-items: flex-start;
    gap: var(--32px);
  `}
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
  font-weight: 700;
  line-height: 125%;
  text-align: right;
  text-transform: uppercase;

  & svg {
    height: 1.25rem;
    width: 1.25rem;
    margin: 0 0.5rem 0 0;
  }
`
