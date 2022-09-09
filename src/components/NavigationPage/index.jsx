import React from "react"
import PropTypes from "prop-types"

import { ArrowLeft } from "icons"

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
    <LinkNavigation
      swipe
      to={prevPage}
      direction="left"
      duration={0.6}
      disabled={isFirst}
    >
      <ArrowLeft /> página anterior
    </LinkNavigation>
    <p>
      {currentPage} de {numPages}
    </p>
    <LinkNavigation
      swipe
      mirror
      to={nextPage}
      direction="right"
      duration={0.6}
      disabled={isLast}
    >
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
