import React from "react"
import PropTypes from "prop-types"

import { Wrapper, Link, Title, Description } from "./styled"

const OnePage = ({ name, description, url }) => (
  <Wrapper>
    <Link href={url} target="_target" rel="noreferrer noopener">
      <Title>{name}</Title>
      <Description>{description}</Description>
    </Link>
  </Wrapper>
)

OnePage.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}

export default OnePage
