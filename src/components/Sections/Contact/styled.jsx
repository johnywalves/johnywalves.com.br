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

export const Box = styled.div``

export const CurvePrimary = styled.div`
  width: 230px;
  height: 150px;
  border: 15px solid;
  border-image-slice: 1;
  border-image-source: linear-gradient(
    90deg,
    var(--secondary) 10%,
    transparent 60%
  );
  border-radius: 75px;
`

export const CurveSecondary = styled.div`
  width: 230px;
  height: 150px;
  border: 15px solid;
  border-image-slice: 1;
  border-image-source: linear-gradient(
    90deg,
    transparent 40%,
    var(--highlight) 90%
  );
  border-radius: 75px;
  transform: translateY(-75px);
`

export const Image = styled(GatsbyImage)`
  width: 65%;
  height: 65%;
  border-radius: 50%;
  align-self: center;
  justify-self: center;
  box-shadow: 0 0 4px 1px var(--shadowColors),
    8px 8px 8px 1px var(--shadowColors);
`
