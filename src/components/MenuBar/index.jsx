import React, { useState, useEffect, useCallback, useMemo } from "react"

import { Home } from "@styled-icons/boxicons-solid/Home"
import { SearchAlt2 as Search } from "@styled-icons/boxicons-regular/SearchAlt2"
import { UpArrowAlt as Arrow } from "@styled-icons/boxicons-regular/UpArrowAlt"
import { Bulb } from "@styled-icons/boxicons-regular/Bulb"
import { Grid } from "@styled-icons/boxicons-solid/Grid"
import { ListUl } from "@styled-icons/boxicons-regular/ListUl"
import { Newspaper } from "@styled-icons/fa-regular/Newspaper"
import { Person } from "@styled-icons/evaicons-solid/Person"

import * as S from "./styled"

const MenuBar = () => {
  const [theme, setTheme] = useState(null)
  const [display, setDisplay] = useState(null)

  const url = useMemo(
    () => (typeof window !== "undefined" ? window.location.pathname : ""),
    []
  )
  const isDarkMode = useMemo(() => theme === "dark", [theme])
  const isListMode = useMemo(() => display === "list", [display])

  useEffect(() => {
    setTheme(window.__theme)
    setDisplay(window.__display)

    window.__onThemeChange = () => setTheme(window.__theme)
    window.__onDisplayChange = () => setDisplay(window.__display)
  }, [])

  const goToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
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

  const toggleDisplay = useCallback(() => {
    const newDisplay = isListMode ? "grid" : "list"
    window.__setPreferredDisplay(newDisplay)

    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({
      event: "changeDisplay",
      preferred_display: newDisplay,
    })
  }, [isListMode])

  return (
    <S.MenuBarWrapper>
      <S.MenuBarGroup>
        <S.MenuBarLink
          to="/"
          title="Voltar para Home"
          cover
          direction="left"
          bg="var(--background)"
          duration={0.6}
          activeClassName="active"
        >
          <S.MenuBarItem>
            <Home />
          </S.MenuBarItem>
        </S.MenuBarLink>
        <S.MenuBarLink
          to="/blog/"
          title="Artigos"
          cover
          direction="left"
          bg="var(--background)"
          duration={0.6}
          activeClassName="active"
        >
          <S.MenuBarItem>
            <Newspaper />
          </S.MenuBarItem>
        </S.MenuBarLink>
        <S.MenuBarLink
          to="/search/"
          title="Pesquisar"
          cover
          direction="left"
          bg="var(--background)"
          duration={0.6}
          activeClassName="active"
        >
          <S.MenuBarItem>
            <Search />
          </S.MenuBarItem>
        </S.MenuBarLink>
        <S.MenuBarLink
          to="/about/"
          title="Sobre"
          cover
          direction="left"
          bg="var(--background)"
          duration={0.6}
          activeClassName="active"
        >
          <S.MenuBarItem>
            <Person />
          </S.MenuBarItem>
        </S.MenuBarLink>
      </S.MenuBarGroup>
      <S.MenuBarGroup>
        <S.MenuBarItem
          title="Mudar o tema"
          onClick={toggleTheme}
          className={theme}
        >
          <Bulb />
        </S.MenuBarItem>
        {(url === "/blog/" || url === "/search/") && (
          <S.MenuBarItem
            title="Mudar visualização"
            className="display"
            onClick={toggleDisplay}
          >
            {isListMode ? <Grid /> : <ListUl />}
          </S.MenuBarItem>
        )}
        <S.MenuBarItem title="Ir para o topo">
          <Arrow onClick={goToTop} />
        </S.MenuBarItem>
      </S.MenuBarGroup>
    </S.MenuBarWrapper>
  )
}

export default MenuBar
