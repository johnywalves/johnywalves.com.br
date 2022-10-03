import styled from "styled-components"
import media from "styled-media-query"

export const ShareWrapper = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;

  margin: auto;
  max-width: 70rem;
  padding: var(--8px) var(--80px);

  ${media.lessThan("large")`
    padding: var(--48px) var(--24px) 0;
    max-width: 100%;
  `}

  ${media.lessThan("large")`
    padding: var(--16px) var(--24px) 0;
  `}
`

export const ShareTitle = styled.h2`
  color: var(--highlight);
  font-size: 1.75rem;
  font-weight: 700;

  ${media.lessThan("large")`
    font-size: 1.375rem;
  `}
`

export const ShareLinks = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: var(--16px);
  gap: var(--16px);
  color: var(--texts);

  svg {
    width: 2rem;
    height: 2rem;
    opacity: 0.8;
    transition: all 0.25s ease-in;

    &:hover {
      color: var(--highlight);
    }
  }
`
