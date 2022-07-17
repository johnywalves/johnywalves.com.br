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
    --14px: 0.875rem;
    --16px: 1rem;
    --18px: 1.125rem;
    --21px: 1.3125rem;
    --24px: 1.5rem;
    --36px: 2.25rem;
    --48px: 3rem;
    --64px: 4rem;
    --80px: 5rem;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }

  a,
  a:hover,
  a:visited {
    text-decoration: none;
    color: inherit;
  }

  /* Content CSS */
  html, body, #___gatsby, #gatsby-focus-wrapper, .tl-edges, .tl-wrapper {
    min-height: 100%;
  }

  body.dark {
    --borders: #38444d;
    --texts: #8899a6;
    --titles: #fff;
    --postColor: #fff;
    --highlightDark: #e352a8;
    --highlightSemi: #de128cc0;
    --highlight: #de128c;
    --mediumBackground: #192734;
    --background: #16202c;
    --white: #eee;
    --shadowColors: #ffffff88;
    --bagdeSkill: #6f6f6f;
  }

  body.light {
    --borders: #dedede;
    --postColor: #111;
    --texts: #555555;
    --titles: #222;
    --highlightDark: #cb1080;
    --highlightSemi: #de128cc0;
    --highlight: #de128c;
    --mediumBackground: #f0f0f3;
    --background: #fff;
    --white: #fff;
    --shadowColors: #0000003f;
    --bagdeSkill: #6f6f6f;
  }  

  body {
    background-color: var(--background);
  }
`

export default GeneralStyles
