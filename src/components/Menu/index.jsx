import React, { useState, useMemo, useEffect, useCallback } from "react"
import { useStaticQuery, graphql } from "gatsby"

import getPercentHero from "utils/getPercentHero"
import useListener from "utils/useListener"

import strings from "components/strings"

import {
  Wrapper,
  MenuBar,
  Logo,
  MenuTop,
  MenuTopLink,
  ThemeColorWrapper,
  ThemeColor,
  MenuBox,
  MenuBackground,
  MenuLinks,
  MenuLinksLink,
  MenuWrapper,
  MenuCheck,
  Hamburger,
} from "./styled"

const Menu = () => {
  const { jellyfish } = useStaticQuery(graphql`
    query {
      jellyfish: file(relativePath: { eq: "jellyfish.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 800
            height: 600
            layout: CONSTRAINED
            placeholder: TRACED_SVG
          )
        }
      }
    }
  `)

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

  const [classMenuBar, setClassMenuBar] = useState(false)

  const scrollMove = useCallback(() => {
    const percent = getPercentHero()
    setClassMenuBar(percent < 0.6 ? "" : "nohero")
  }, [])

  useListener("scroll", scrollMove, 10)

  return (
    <Wrapper>
      <MenuCheck id="menu-hamburger" type="checkbox" />
      <MenuBar className={classMenuBar}>
        <Logo>{"{JWA}"}</Logo>
        <div>
          <MenuTop>
            {strings.menuLinks.map(({ label, url }) => (
              <li key={label}>
                <MenuTopLink
                  cover
                  direction="left"
                  bg="var(--background)"
                  duration={0.6}
                  to={url}
                  activeClassName="active"
                >
                  {label}
                  <span>.</span>
                </MenuTopLink>
              </li>
            ))}
          </MenuTop>
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
          <MenuWrapper htmlFor="menu-hamburger">
            <Hamburger />
          </MenuWrapper>
        </div>
      </MenuBar>
      <MenuBox>
        <MenuBackground image={jellyfish.childImageSharp.gatsbyImageData} />
        <MenuLinks>
          {strings.menuLinks.map(({ label, url }) => (
            <li key={label}>
              <MenuLinksLink
                cover
                direction="left"
                bg="var(--background)"
                duration={0.6}
                to={url}
                activeClassName="active"
              >
                {label}
                <span>.</span>
              </MenuLinksLink>
            </li>
          ))}
        </MenuLinks>
      </MenuBox>
    </Wrapper>
  )
}

export default Menu
