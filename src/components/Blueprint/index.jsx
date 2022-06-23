import React from "react"
import PropTypes from "prop-types"

import { Wrapper } from "./styled"

import GlobalStyles from "../../styles/global"

import "../../styles/styles.css"

const Blueprint = ({ children }) => {
    return (
        <Wrapper>
            <GlobalStyles />
            {children}
        </Wrapper>
    )
}

Blueprint.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Blueprint

