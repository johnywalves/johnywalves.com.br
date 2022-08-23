import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

export const Wrapper = styled.section`
  position: relative;
  width: 100%;
  padding: 80px 0 0;
  display: flex;
  flex-direction: row;
  justify-content: center;

  background: url("/vectors/triwallTL.svg"), url("/vectors/triwallBR.svg");
  background-color: var(--background);
  background-size: 30%;
  background-repeat: no-repeat;
  background-position: top left, bottom right;
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
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 0 0 250px;
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
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 250px;
  width: 250px;
  opacity: 0.85;
  overflow: hidden;
  margin: 0 0 var(--32px) 0;
`

export const BoxSide = styled.div`
  position: absolute;
  top: 0;
  left: -125px;
  height: 100%;
  opacity: 0.85;
  overflow: hidden;

  svg {
    display: flex;
    justify-content: center;
    align-items: center;
  }
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
