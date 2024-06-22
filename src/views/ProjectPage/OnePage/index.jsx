import React from "react"
import PropTypes from "prop-types"

import { Wrapper, Link, Title, Description } from "./styled"

const OnePage = ({ title, description, link }) => (
  <Wrapper>
    <Link href={link} target="_target" rel="noreferrer noopener">
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Link>
  </Wrapper>
)

OnePage.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
}

export default OnePage
