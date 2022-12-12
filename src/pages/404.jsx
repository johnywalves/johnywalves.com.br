import React from "react"

import Blueprint from "components/Blueprint"
import Seo from "components/seo"

import NotFoundPage from "views/NotFoundPage"

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
