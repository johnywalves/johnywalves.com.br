import React from "react"

import Blueprint from "components/Blueprint"
import NotFoundPage from "components/NotFoundPage"
import Seo from "components/seo"

const Page404 = () => (
  <Blueprint whiteLogo>
    <NotFoundPage />
  </Blueprint>
)

export default Page404

export const Head = ({ location }) => <Seo location={location} title="404" />
