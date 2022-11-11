import React from "react"
import PropTypes from "prop-types"

import { ArrowLeft } from "assets/icons"

import { NavigationWrapper, LinkNavigation } from "./styled"

const NavigationPage = ({
  isFirst,
  isLast,
  currentPage,
  numPages,
  prevPage,
  nextPage,
}) => (
  <NavigationWrapper>
    <LinkNavigation to={prevPage} disabled={isFirst}>
      <ArrowLeft /> página anterior
    </LinkNavigation>
    <p>
      {currentPage} de {numPages}
    </p>
    <LinkNavigation mirror={1} to={nextPage} disabled={isLast}>
      próxima página <ArrowLeft />
    </LinkNavigation>
  </NavigationWrapper>
)

NavigationPage.propTypes = {
  isFirst: PropTypes.bool.isRequired,
  isLast: PropTypes.bool.isRequired,
  currentPage: PropTypes.number.isRequired,
  numPages: PropTypes.number.isRequired,
  prevPage: PropTypes.string,
  nextPage: PropTypes.string,
}

export default NavigationPage
