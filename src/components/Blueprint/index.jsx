import React from "react"
import { ParallaxProvider } from 'react-scroll-parallax'
import PropTypes from "prop-types"

import { Wrapper } from "./styled"

import GeneralStyles from "../../styles/general"

import "../../styles/styles.css"

const Blueprint = ({ children }) => {
    return (
        <ParallaxProvider>
            <GeneralStyles />
            <Wrapper>
                {children}
            </Wrapper>
        </ParallaxProvider>
    )
}

Blueprint.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Blueprint

