import styled from "styled-components"

export const PageWrapper = styled.main`
  position: relative;
  width: 100%;
  background: url("/vectors/mountains.svg"),
    linear-gradient(180deg, #e352a83f 0%, #e352a800 10%);
  background-size: 100%;
  background-color: var(--background);
  background-repeat: no-repeat;
  background-position: bottom center, top center;
`

export const BoxTop = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;

  svg:nth-child(1) {
    filter: blur(2px);
  }

  svg:nth-child(2) {
    filter: blur(1px);
  }
`

export const BoxSide = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  height: 40%;
  overflow: hidden;
`

export const Container = styled.section`
  padding: var(--36px) 0;
`

export const ContainerProject = styled.section`
  padding: var(--36px) 0;
  background-color: var(--highlight-semi);
`

export const List = styled.ul`
  padding: var(--padding-content);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--48px);
`

export const ListOther = styled.ul`
  padding: var(--padding-content);
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: var(--48px);
`

export const ListOnePage = styled.ul`
  padding: var(--padding-content);
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: var(--24px);
`
