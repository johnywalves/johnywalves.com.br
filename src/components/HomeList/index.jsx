import React from "react"
import PropTypes from "prop-types"

import { Wrapper, Header, Title, Description, List } from "./styled"

const HomeList = ({ children, title, description }) => (
  <Wrapper>
    <Header>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Header>
    <List>{children}</List>
  </Wrapper>
)

HomeList.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default HomeList
