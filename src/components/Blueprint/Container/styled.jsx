import styled from "styled-components"

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  padding: var(--24px) calc((100% - 1600px + 50px) / 2) 80px;

  background: url("/vectors/triwallTL.svg"), url("/vectors/triwallBR.svg");
  background-color: var(--background);
  background-size: 30%;
  background-repeat: no-repeat;
  background-position: top left, bottom right;
`
