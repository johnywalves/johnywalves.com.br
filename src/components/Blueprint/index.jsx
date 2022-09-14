import React from "react"
import { ParallaxProvider } from "react-scroll-parallax"
import PropTypes from "prop-types"

import Menu from "./Menu"
import Footer from "./Footer"
import { Wrapper } from "./styled"

import GeneralStyles from "styles/general"

import "styles/styles.css"

const Blueprint = ({ children, content }) => {
  return (
    <ParallaxProvider>
      <GeneralStyles />
      <Wrapper content={content ? 1 : 0}>
        <Menu hero={!content} />
        {children}
        {content && <Footer />}
      </Wrapper>
    </ParallaxProvider>
  )
}

Blueprint.propTypes = {
  children: PropTypes.node.isRequired,
  content: PropTypes.bool,
}

Blueprint.defaultTypes = {
  content: false,
}

export { default as Container } from "./Container"

export default Blueprint
