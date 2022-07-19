import styled from "styled-components"

export const Wrapper = styled.section`
  position: relative;
  width: 100%;
  padding: 80px 0;
  background-color: var(--background);
  display: flex;
  flex-direction: row;
  justify-content: center;
`

export const Content = styled.div`
  display: grid;
  grid-template-columns: minmax(512px, 40%) minmax(640px, 50%);
  gap: 30px;
  width: min-content;
  margin: 0 auto;
`

export const Line = styled.div`
  display: block;
  width: 33%;
  height: 15px;
  background: linear-gradient(
    90deg,
    var(--highlight) 0%,
    var(--highlight) 50%,
    transparent 100%
  );
  margin-bottom: 25px;
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
`

export const Description = styled.p`
  color: var(--texts);
  font-size: 1.1rem;
  margin: 15px 0;
`

export const SocialWrapper = styled.div`
  a,
  a:hover,
  a:visited {
    color: var(--highlight) !important;
  }
`

export const Box = styled.div`
  width: 150px;
  height: 150px;
  background: linear-gradient(transparent, transparent) padding-box,
    linear-gradient(45deg, slateblue, coral) border-box;
  border: 5px solid transparent;
  border-radius: 50px;
`

export const Image = styled.div`
  width: 100%;
  height: 100%;
  background-color: red;
`
