import React from "react"

import Blueprint from "components/Blueprint"
import NotFoundPage from "components/NotFoundPage"
import Seo from "components/seo"

const title = "404: Não encontrada",
  description = "A página que você procura não existe"

const Page404 = () => (
  <Blueprint whiteLogo title={title} description={description}>
    <NotFoundPage />
  </Blueprint>
)

export default Page404

export const Head = ({ location }) => (
  <Seo location={location} title={title} description={description} />
)
