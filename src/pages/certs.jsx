import React from 'react';
// components
import CertCard from "components/CertCard";
import CertList from "components/CertList";

const list = [
    {
        date: "2018-03-10",
        name: "Maior Média",
        img: "/cert/fatec_maior_media.jpg"
    },
    {
        date: "2018-03-10",
        name: "Graduação",
        img: "/cert/fatec_graduacao.jpg"
    },
    {
        date: "2018-03-10",
        name: "Lorem Lipsum",
        img: "/cert/fatec_melhor_tcc.jpg"
    },
    {
        date: "2018-03-10",
        name: "Lorem Lipsum",
        img: "/cert/igoralcantara_estatistica_qlik.jpg"
    },
    {
        date: "2018-03-10",
        name: "Lorem Lipsum",
        img: "/cert/igoralcantara_fundamentos_cd.jpg"
    },
    {
        date: "2018-03-10",
        name: "Lorem Lipsum",
        img: "/cert/igoralcantara_ml.jpg"
    },
    {
        date: "2018-03-10",
        name: "Lorem Lipsum",
        img: "/cert/igoralcantara_ml_python.jpg"
    },
    {
        date: "2018-03-10",
        name: "Lorem Lipsum",
        img: "/cert/igoralcantara_qlik.jpg"
    },
    {
        date: "2018-03-10",
        name: "Lorem Lipsum",
        img: "/cert/igoralcantara_r.jpg"
    },
    {
        date: "2018-03-10",
        name: "Lorem Lipsum",
        img: "/cert/igoralcantara_r_qlik.jpg"
    },
    {
        date: "2018-03-10",
        name: "Lorem Lipsum",
        img: "/cert/igoralcantara_rna_dp.jpg"
    },
    {
        date: "2018-03-10",
        name: "Lorem Lipsum",
        img: "/cert/senac_games_2d.jpg"
    },
    {
        date: "2018-03-10",
        name: "Lorem Lipsum",
        img: "/cert/udemy_gatsby.jpg"
    }
]

const Certs = () => (
    <CertList>
        {list.map((cert, index) => <CertCard key={index} index={index} {...cert} />)}
    </CertList>
)

export default Certs;