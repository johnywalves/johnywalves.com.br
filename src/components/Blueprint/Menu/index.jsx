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

const Menu = ({ hero, whiteLogo }) => {
  const { jellyfish } = useStaticQuery(graphql`
    query {
      jellyfish: file(relativePath: { eq: "jellyfish.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            height: 600
            layout: CONSTRAINED
            placeholder: BLURRED
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

  useEffect(() => {
    !hero && setClassMenuBar("nohero")
  }, [hero])

  const scrollMove = useCallback(() => {
    const percent = getPercentHero()
    setClassMenuBar(percent < 0.6 && hero ? "" : "nohero")
  }, [hero])

  useListener("scroll", scrollMove, hero ? 10 : -1)

  return (
    <HeaderWrapper>
      <MenuCheck id="menu-hamburger" type="checkbox" />
      <MenuBar className={classMenuBar}>
        <Logo whiteLogo={whiteLogo ? 1 : 0} />
        <div>
          <MenuTop>
            {Strings.menuLinks.map(({ label, url }) => (
              <li key={label}>
                <MenuTopLink to={url} activeClassName="active">
                  <span>{label}</span>.
                </MenuTopLink>
              </li>
            ))}
          </MenuTop>
          <ThemeColorWrapper id="change-theme-icon" onClick={toggleTheme}>
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
        <MenuBackground
          image={jellyfish.childImageSharp.gatsbyImageData}
          alt=""
        />
        <MenuLinks>
          {Strings.menuLinks.map(({ label, url }) => (
            <li key={label}>
              <MenuLinksLink to={url} activeClassName="active">
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
  whiteLogo: PropTypes.bool,
}

Menu.defaultTypes = {
  hero: false,
  whiteLogo: false,
}

export default Menu
