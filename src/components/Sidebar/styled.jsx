import styled from "styled-components"
import media from "styled-media-query"

export const SidebarWrapper = styled.aside`
  border-right: 1px solid var(--borders);
  background: var(--mediumBackground);
  position: fixed;
  height: 100vh;
  width: 20rem;
  padding: 2rem;
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  ${media.lessThan("large")`
    align-items: flex-start;
    height: auto;
    padding: 1rem 2rem;
    width: 100%;
  `}
`

export const ProfileWrapper = styled.div`
  justify-content: flex-start;
`
