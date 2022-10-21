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
    <LinkNavigation fade to={prevPage} duration={0.75} disabled={isFirst}>
      <ArrowLeft /> página anterior
    </LinkNavigation>
    <p>
      {currentPage} de {numPages}
    </p>
    <LinkNavigation
      fade
      mirror={1}
      to={nextPage}
      duration={0.75}
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
