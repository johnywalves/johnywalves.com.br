import React from "react"
import PropTypes from "prop-types"

import { Wrapper, Title, Description, List } from "./styled"

const HomeList = ({ children, title, description }) => (
  <Wrapper>
    <Title>{title}</Title>
    <Description>{description}</Description>
    <List>{children}</List>
  </Wrapper>
)

HomeList.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default HomeList
