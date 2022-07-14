import React from "react"
import PropTypes from "prop-types"

import { Wrapper, Cover } from "./styled"

const Card = ({
  title,
  subtitle,
  description,
  tags,
  sourceCode,
  view,
  cover,
}) => {
  return (
    <Wrapper>
      <Cover>
        {cover}
      </Cover>
      {title && <h3>{title}</h3>}
      {subtitle && <small>{subtitle}</small>}
      {description && <p>{description}</p>}
    </Wrapper>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  description: PropTypes.string.isRequired,
  tags: PropTypes.array,
  code: PropTypes.string,
  view: PropTypes.string,
  to: PropTypes.string,
}


export default Card
