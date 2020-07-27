import React from "react"

import CertCard from "components/CertCard"
import CertList from "components/CertList"
import Layout from "components/Layout"
import SEO from "components/seo"

const list = [
  {
    date: "2018-03-10 00:00:00 -0300",
    name: "Maior Média",
    institute: "Fatec Rio Preto",
    img: "/cert/fatec_maior_media.jpg",
    icon: "award",
  },
  {
    date: "2018-03-10 00:00:00 -0300",
    name: "Melhor TCC",
    institute: "Fatec Rio Preto",
    img: "/cert/fatec_melhor_tcc.jpg",
    icon: "award",
  },
  {
    date: "2018-03-10 00:00:00 -0300",
    name: "Graduação em Tecnologia em Informática para Negócios",
    institute: "Fatec Rio Preto",
    img: "/cert/fatec_graduacao.jpg",
    icon: "university",
  },
  {
    date: "2018-07-22 00:00:00 -0300",
    name: "Estatística em Qlik",
    institute: "Igor Alcantara",
    img: "/cert/igoralcantara_estatistica_qlik.jpg",
    icon: "chartpie",
  },
  {
    date: "2018-03-13 00:00:00 -0300",
    name: "Fundamentos da Ciência de Dados",
    institute: "Igor Alcantara",
    img: "/cert/igoralcantara_fundamentos_cd.jpg",
    icon: "chartpie",
  },
  {
    date: "2017-09-24 00:00:00 -0300",
    name: "Introdução à Machine Learning",
    institute: "Igor Alcantara",
    img: "/cert/igoralcantara_ml.jpg",
    icon: "chartpie",
  },
  {
    date: "2018-09-16 00:00:00 -0300",
    name: "Ciência de Dados e Machine Learing em Python",
    institute: "Igor Alcantara",
    img: "/cert/igoralcantara_ml_python.jpg",
    icon: "chartpie",
  },
  {
    date: "2018-07-10 00:00:00 -0300",
    name: "Introdução ao Qlik Sense",
    institute: "Igor Alcantara",
    img: "/cert/igoralcantara_qlik.jpg",
    icon: "chartpie",
  },
  {
    date: "2017-08-27 00:00:00 -0300",
    name: "Linguagem R",
    institute: "Igor Alcantara",
    img: "/cert/igoralcantara_r.jpg",
    icon: "chartpie",
  },
  {
    date: "2018-07-18 00:00:00 -0300",
    name: "Linguagem R para Desenvolvedores Qlik",
    institute: "Igor Alcantara",
    img: "/cert/igoralcantara_r_qlik.jpg",
    icon: "chartpie",
  },
  {
    date: "2018-03-10 00:00:00 -0300",
    name: "Redes Neurais Artificiais e Deep Learning",
    institute: "Igor Alcantara",
    img: "/cert/igoralcantara_rna_dp.jpg",
    icon: "chartpie",
  },
  {
    date: "2018-07-27 00:00:00 -0300",
    name: "Games 2D - Criando seu Primeiro Jogo",
    institute: "Senac São José do Rio Preto",
    img: "/cert/senac_games_2d.jpg",
    icon: "tools",
  },
  {
    date: "2020-04-19 00:00:00 -0300",
    name: "Gatsby: Crie um site PWA com React, GraphQL e Netlify CMS",
    institute: "Udemy",
    img: "/cert/udemy_gatsby.jpg",
    icon: "tools",
  },
]

const Certs = () => (
  <Layout>
    <SEO title="Certificados" />
    <CertList>
      {list
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .map((cert, index) => (
          <CertCard key={index} index={index} {...cert} />
        ))}
    </CertList>
  </Layout>
)

export default Certs
