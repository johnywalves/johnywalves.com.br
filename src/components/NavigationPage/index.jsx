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
      to={prevPage}
      cover
      direction="left"
      bg="var(--background)"
      duration={0.6}
      disabled={isFirst}
    >
      <ArrowLeft /> página anterior
    </LinkNavigation>
    <p>
      {currentPage} de {numPages}
    </p>
    <LinkNavigation
      to={nextPage}
      cover
      mirror
      direction="right"
      bg="var(--background)"
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
