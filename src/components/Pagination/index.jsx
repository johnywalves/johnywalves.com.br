import React from "react"
import PropTypes from "prop-types"
import Anilink from "gatsby-plugin-transition-link/AniLink"

import * as S from "./styled"

const Pagination = ({
  isFirst,
  isLast,
  currentPage,
  numPages,
  prevPage,
  nextPage,
}) => (
  <S.PaginationWrapper>
    {!isFirst && (
      <Anilink
        to={prevPage}
        cover
        direction="left"
        bg="var(--background)"
        duration={0.6}
      >
        ← página anterior
      </Anilink>
    )}
    <p>
      {currentPage} de {numPages}
    </p>
    {!isLast && (
      <Anilink
        to={nextPage}
        cover
        direction="right"
        bg="var(--background)"
        duration={0.6}
      >
        proxima página →
      </Anilink>
    )}
  </S.PaginationWrapper>
)

Pagination.propTypes = {
  isFirst: PropTypes.bool.isRequired,
  isLast: PropTypes.bool.isRequired,
  currentPage: PropTypes.number.isRequired,
  numPages: PropTypes.number.isRequired,
  prevPage: PropTypes.string,
  nextPage: PropTypes.string,
}

export default Pagination
