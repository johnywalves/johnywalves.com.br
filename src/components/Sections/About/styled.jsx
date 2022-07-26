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

export const Languages = styled.ul`
  margin: 50px 0;
`
