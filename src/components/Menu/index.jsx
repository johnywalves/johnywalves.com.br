import React, { useState, useMemo, useEffect, useCallback } from "react"

import strings from "components/strings"

import {
  Wrapper,
  ThemeColorWrapper,
  ThemeColor,
  MenuBox,
  MenuLinks,
  MenuLinksLink,
  MenuWrapper,
  MenuCheck,
  Hamburger
} from "./styled"

const Menu = () => {
  const [theme, setTheme] = useState(null)

  const isDarkMode = useMemo(() => theme === "dark", [theme])

  useEffect(() => {
    setTheme(window.__theme)
    window.__onThemeChange = () => setTheme(window.__theme)
  }, [])

  const toggleTheme = useCallback(() => {
    const newTheme = isDarkMode ? "light" : "dark"
    window.__setPreferredTheme(newTheme)

    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({
      event: "changeTheme",
      preferred_theme: newTheme,
    })
  }, [isDarkMode])

  return (
    <>
      <Wrapper>
        <ThemeColorWrapper onClick={toggleTheme}>
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <ThemeColor />
        </ThemeColorWrapper>
        <MenuCheck id="menu-hamburger" type="checkbox" />
        <MenuWrapper htmlFor="menu-hamburger"  >
          <Hamburger />
        </MenuWrapper>
        <MenuBox>
          <MenuLinks>
            {strings.menuLinks.map(({ label, url }) => (
              <li key={label} >
                <MenuLinksLink
                  cover
                  direction="left"
                  bg="var(--background)"
                  duration={0.6}
                  to={url}
                  activeClassName="active"
                >
                  {label}
                </MenuLinksLink>
              </li>
            ))}
          </MenuLinks>
        </MenuBox>
      </Wrapper>
    </>
  )
}

export default Menu
