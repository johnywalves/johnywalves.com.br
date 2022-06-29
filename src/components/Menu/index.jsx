import React, { useState, useMemo, useEffect, useCallback } from "react"

import {
  Wrapper,
  ThemeColorWrapper,
  ThemeColor,
  MenuBox,
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
          <ThemeColor />
        </ThemeColorWrapper>
        <MenuCheck id="menu-hamburger" type="checkbox" />
        <MenuWrapper htmlFor="menu-hamburger"  >
          <Hamburger />
        </MenuWrapper>
        <MenuBox>
        </MenuBox>
      </Wrapper>
    </>
  )
}

export default Menu
