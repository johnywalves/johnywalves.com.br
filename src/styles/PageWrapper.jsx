import { css } from "styled-components"

const PageWrapper = css`
  display: flex;
  flex-direction: column;
  min-height: var(--min-height);
  width: 100%;
  transition: opacity 0.4s;
  padding: var(--padding-content);
  padding-bottom: var(--96px);

  background: url("/vectors/triangle-wall-top.svg"),
    url("/vectors/triangle-wall-bottom.svg");
  background-color: var(--background);
  background-size: 30%;
  background-repeat: no-repeat;
  background-position: top left, bottom right;
`

export default PageWrapper
