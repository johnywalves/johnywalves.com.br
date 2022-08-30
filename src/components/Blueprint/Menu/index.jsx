import React, { useState, useMemo, useEffect, useCallback } from "react"
import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"

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
    <Wrapper>
      <MenuCheck id="menu-hamburger" type="checkbox" />
      <MenuBar className={classMenuBar}>
        <Logo
          cover
          direction="left"
          bg="var(--background)"
          duration={0.6}
          to={"/new/"}
          activeClassName="active"
        >
          {"{JWA}"}
        </Logo>
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

Menu.propTypes = {
  hero: PropTypes.bool,
}

Menu.defaultTypes = {
  hero: false,
}

export default Menu
