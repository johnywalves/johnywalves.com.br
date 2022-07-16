import styled from "styled-components"
import media from "styled-media-query"

export const Wrapper = styled.nav`
  margin: 2rem auto;
  width: 100%;

  &.about {
    ${media.lessThan("large")`
      display: none;
    `}
  }

  &.vertical {
    a,
    a:hover,
    a:visited {
        color: var(--highlight);
    }

    ul {
        width: 2rem;
    }

    li {
        margin: 1rem 0;
        transition: 0.25s ease-in-out;

        div {
            transition: 0.25s ease-in-out;
        }
    }

    li:hover {
        margin: 0.5rem 0;

        div {
            width: 2.5rem;
            height: 2.5rem;
        }
    }
  }
`

export const List = styled.ul`
  align-items: center;
  display: flex;
  justify-content: space-around;
  list-style: none;

  .about & {
    align-items: flex-start;
    justify-content: flex-start;
  }

  .vertical & {
    flex-direction: column;
  }
`

export const Item = styled.li`
  .about & {
    margin-right: 1rem;
  }
`

export const Link = styled.a`
  color: var(--texts);
  text-decoration: none;
  transition: color 0.5s;

  &:hover {
    color: var(--highlight);
  }
`

export const IconWrapper = styled.div`
  fill: #bbb;
  width: 1.5rem;
  height: 1.5rem;
`
