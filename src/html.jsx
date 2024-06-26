import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html lang="pt-br" {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes} className="light">
        {props.preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof window !== "undefined" && typeof document !== "undefined") {
                (function() {
                  window.__onThemeChange = function() {};

                  function setTheme(newTheme) {
                      window.__theme = newTheme;
                      preferredTheme = newTheme;
                      document.body.className = newTheme;
                      window.__onThemeChange(newTheme);
                  }

                  var preferredTheme;
                  try {
                      preferredTheme = localStorage.getItem('theme');
                  } catch (err) { }

                  window.__setPreferredTheme = function(newTheme) {
                      setTheme(newTheme);
                      try {
                          localStorage.setItem('theme', newTheme);
                      } catch (err) {}
                  }

                  let defaultTheme = 'light'
                  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                      defaultTheme = 'dark'
                  }
                  
                  setTheme(preferredTheme || defaultTheme);
                })();
              }
            `,
          }}
        />
        <div
          key="body"
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
