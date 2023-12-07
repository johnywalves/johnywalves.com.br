import React from "react"

import Blueprint from "components/Blueprint"
import Seo from "components/seo"

import CoupCoinPage from "views/CoupCoinPage"

const titlePage = "Coup Coins"
const descriptionPage =
  "Simplifique sua estratégia no jogo Coup com o nosso contador de moedas. Contagem rápida e precisa para maximizar suas jogadas. Baixe agora!"

const CoupCoins = () => {
  return (
    <Blueprint content title={titlePage} description={descriptionPage}>
      <CoupCoinPage />
    </Blueprint>
  )
}

export default CoupCoins

export const Head = ({ location }) => (
  <Seo location={location} title={titlePage} description={descriptionPage} />
)
