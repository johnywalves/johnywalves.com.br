import styled from "styled-components"
import Img from "gatsby-image"

export const Content = styled.article`
  color: var(--texts);
  padding: 2rem 3rem;

  h1 {
    font-size: 2rem;
    font-weight: 700;
    text-align: center;
    margin: 0.8rem 0;
  }

  h2 {
    font-size: 1.5rem;
    font-weight: 500;
    text-align: center;
    margin: 1.5rem 0 0.15rem;
  }

  h3 {
    font-size: 1.2rem;
    font-weight: 500;
    margin: 0.35rem 0 0.25rem;
  }

  h5 {
    font-size: 1rem;
    font-weight: 400;
    text-align: center;
    margin: 0.5rem 10%;
    width: 80%;
  }
`

export const Band = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 1rem 0;
`

export const Avatar = styled(Img)`
  margin: 0 auto;
`
