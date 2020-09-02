import styled from "styled-components"
import Img from "gatsby-image"
import Anilink from "gatsby-plugin-transition-link/AniLink"

export const Content = styled.article`
  color: var(--texts);
  padding: 1rem 4rem 3rem;

  h1 {
    color: var(--titles);
    font-size: 2rem;
    font-weight: 700;
    text-align: left;
    margin: 0 0 0.25rem 0;
  }

  h2 {
    color: var(--titles);
    font-size: 1.5rem;
    font-weight: 700;
    text-align: left;
    margin: 0 0.5rem 0 0;
  }

  h3 {
    font-size: 1.2rem;
    font-weight: 500;
    margin: 0.35rem 0 0.15rem;
  }

  h5 {
    font-size: 1rem;
    font-weight: 400;
    text-align: left;
  }
`

export const HeadSector = styled.div`
  margin: 3.5rem 0 1rem 0;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  flex-wrap: wrap;

  :first-child& {
    margin-top: 0;
  }
`

export const Curriculium = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 1rem 0;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2.5rem;
    padding: 0.5rem 1rem;
    margin: 0 1rem 0 0;
    border-radius: 0.25rem;
    color: var(--background);
    font-weight: 700;
    text-transform: lowercase;
    background-color: var(--highlight);
    text-decoration: none;
  }

  svg {
    height: 100%;
    margin: 0 1rem 0 0;
  }
`

export const Band = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 0.5rem 0;
`

export const Forehead = styled.div`
  position: relative;
  height: 12rem;
  background: linear-gradient(to bottom, var(--highlight) 20%, #ffffff00 20%);
`

export const Avatar = styled(Img)`
  left: 50%;
  top: 50%;
  border-radius: 50%;
  transform: translate(-50%, -50%);
`

export const SeeMore = styled.p`
  cursor: pointer;
  margin-left: 4rem;
  color: var(--highlight);
`

export const FullHistory = styled.div`
  max-height: ${(props) => (props.open ? "60rem" : "0rem")};
  opacity: ${(props) => (props.open ? 1 : 0)};
  overflow: hidden;
  transition: all 1s cubic-bezier(0.07, 0.38, 0.58, 1);
`

export const SeeCertificates = styled(Anilink)`
  cursor: pointer;
  margin-left: 4rem;
  color: var(--highlight);
`
