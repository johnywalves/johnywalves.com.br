import React from "react"

import Blueprint from "components/Blueprint"
import NotFoundPage from "components/NotFoundPage"
import Seo from "components/seo"

const title = "Projetos",
  description = "Apresentação de projetos desenvolvidos ou em desenvolvimento"

const Page404 = () => (
  <Blueprint title="404" whiteLogo>
    <NotFoundPage />
  </Blueprint>
)

export default Page404

export const Head = ({ location }) => (
  <Seo location={location} title={title} description={description} />
)
