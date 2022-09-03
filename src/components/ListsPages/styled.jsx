import styled from "styled-components"

export const ArticlesWrapper = styled.section`
  background: var(--background);
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 80px);
  width: 100%;
  transition: opacity 0.4s;
  padding: var(--padding-content);

  background: url("/vectors/triangle-wall-top.svg"),
    url("/vectors/triangle-wall-bottom.svg");
  background-color: var(--background);
  background-size: 30%;
  background-repeat: no-repeat;
  background-position: top left, bottom right;
`
