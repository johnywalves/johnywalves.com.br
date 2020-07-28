import React from "react"
import PropTypes from "prop-types"

import * as S from "./styled"

const HomeList = ({ children, title, description }) => (
  <S.Wrapper>
    <S.Header>
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
    </S.Header>
    <S.List>{children}</S.List>
  </S.Wrapper>
)

HomeList.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default HomeList
