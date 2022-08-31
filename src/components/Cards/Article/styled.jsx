import styled from "styled-components"

export const Content = styled.div`
  position: relative;
  left: 0;
  top: 226px;
  height: 400px;
  padding: 20px 30px;
  border-top-left-radius: 30px;
  border-top-right-radius: 5px;
  display: flex;
  flex-direction: column;
  color: var(--highlight);
  background-color: var(--background-card);
  box-shadow: 0 -2px 8px var(--shadow-colors);
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Category = styled.p`
  padding: 4px 8px;
  font-size: 1.25rem;
  font-weight: 900;
  color: var(--background);
  background-color: var(--highlight);
  border-radius: 15px;
  text-transform: uppercase;
`

export const Subtitle = styled.small`
  width: 100%;
  margin: 0 0 5px;
  font-size: 1.25rem;
  font-weight: 400;
  text-align: right;
`

export const Title = styled.h3`
  font-size: 2rem;
  margin: 10px 0;
`

export const Description = styled.p`
  font-size: 1.25rem;
  font-weight: 500;
  color: var(--texts);
`
