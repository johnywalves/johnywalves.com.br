import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

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
  font-size: 1.125rem;
  margin: 15px 0;
  line-height: 150%;
`

export const SocialWrapper = styled.div`
  a,
  a:hover,
  a:visited {
    color: var(--highlight) !important;
  }
`

export const Box = styled.div`
  display: flex;
  justify-content: flex-end;
  opacity: 0.85;
`

export const Image = styled(GatsbyImage)`
  width: 400px;
  height: 400px;
  border-radius: 50%;
  align-self: center;
  justify-self: center;
  mask-image: linear-gradient(45deg, black 25%, transparent);
  mask-mode: alpha;
`
