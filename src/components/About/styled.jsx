import styled from "styled-components"
import Img from "gatsby-image"

export const Content = styled.article`
  color: var(--texts);
  padding: 1rem 4rem 3rem;

  h1 {
    color: var(--titles);
    font-size: 2rem;
    font-weight: 700;
    text-align: center;
    margin: 0.8rem 0;
  }

  h2 {
    color: var(--titles);
    font-size: 1.5rem;
    font-weight: 500;
    text-align: center;
    margin: 2rem 0 0.15rem;
  }

  h3 {
    font-size: 1.2rem;
    font-weight: 500;
    margin: 0.35rem 0 0.15rem;
  }

  h5 {
    font-size: 1rem;
    font-weight: 400;
    text-align: center;
    margin: 0.5rem 10%;
    width: 80%;
  }
`

export const Curriculium = styled.div`
  display: flex;
  justify-content: center;
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
    color: var(--white);
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
  margin: 0.5rem 0 1rem;
`

export const Forehead = styled.div`
  position: relative;
  height: 12rem;
`

export const Avatar = styled(Img)`
  left: 50%;
  top: 50%;
  border-radius: 50%;
  transform: translate(-50%, -50%);
`
