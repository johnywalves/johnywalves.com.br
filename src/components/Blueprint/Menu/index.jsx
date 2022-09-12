import React, { useState, useMemo, useEffect, useCallback } from "react"
import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"

import getPercentHero from "utils/getPercentHero"
import useListener from "utils/useListener"

import Strings from "components/strings"

import Logo from "../Logo"
import {
  HeaderWrapper,
  MenuBar,
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

const Menu = ({ hero }) => {
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

  const [classMenuBar, setClassMenuBar] = useState("")

  useEffect(() => !hero && setClassMenuBar("nohero"), [hero])

  const scrollMove = useCallback(() => {
    const percent = getPercentHero()
    setClassMenuBar(percent < 0.6 && hero ? "" : "nohero")
  }, [hero])

  useListener("scroll", scrollMove, hero ? 10 : -1)

  return (
    <HeaderWrapper>
      <MenuCheck id="menu-hamburger" type="checkbox" />
      <MenuBar className={classMenuBar}>
        <Logo />
        <div>
          <MenuTop>
            {Strings.menuLinks.map(({ label, url }) => (
              <li key={label}>
                <MenuTopLink
                  fade
                  to={url}
                  duration={0.75}
                  activeClassName="active"
                >
                  <span>{label}</span>.
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
          {Strings.menuLinks.map(({ label, url }) => (
            <li key={label}>
              <MenuLinksLink
                fade
                to={url}
                duration={0.75}
                activeClassName="active"
              >
                {label}
                <span>.</span>
              </MenuLinksLink>
            </li>
          ))}
        </MenuLinks>
      </MenuBox>
    </HeaderWrapper>
  )
}

Menu.propTypes = {
  hero: PropTypes.bool,
}

Menu.defaultTypes = {
  hero: false,
}

export default Menu
