import { createGlobalStyle } from "styled-components"

const GeneralStyles = createGlobalStyle`
  /* Reset CSS */
  *,
  *:before,
  *:after {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html {
    --2px: 0.125rem;
    --4px: 0.25rem;
    --8px: 0.5rem;
    --14px: 0.875rem;
    --16px: 1rem;
    --18px: 1.125rem;
    --21px: 1.3125rem;
    --24px: 1.5rem;
    --32px: 2rem;
    --36px: 2.25rem;
    --48px: 3rem;
    --56px: 3.5rem;
    --64px: 4rem;
    --72px: 4.5rem;
    --80px: 5rem;
    --96px: 6rem;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }

  a,
  a:hover,
  a:visited {
    text-decoration: none;
    color: inherit;
  }

  ol, ul {
    list-style: none;
  }

  /* Content CSS */
  html, body, #___gatsby, #gatsby-focus-wrapper, .tl-edges, .tl-wrapper {
    min-height: 100%;
  }

  :root {
    --highlight: #e0138c;
    --highlight-dark: #e352a8;
    --highlight-light: #ff89fd;
    --highlight-lighter: #ff6bfd;
    --highlight-lightest: #fdbafd;
    --highlight-semi: #e0138cd8;
    --secondary: #8857c3;
    --third: #44b5ef;
    --third-light: #9fd5fd;
    --white: #fff;
  }

  body.dark {
    --texts: #f8f8f8;
    --background: #222;
    --background-card: #303030;
    --shadowColors: #ffffff88;
  }

  body.light {
    --texts: #333;
    --background: #f6f6f6;
    --background-card: #fafafa;
    --shadowColors: #0000003f;
  }

  body {
    background-color: var(--background);
    --padding-content: var(--36px) calc((100% - 1600px + 50px) / 2);
  }

  @media (max-width: 1600px) {
    body {
      --padding-content: var(--24px);
    }
  }
`

export default GeneralStyles
