import React from "react"
import { Toolbox } from "@styled-icons/fa-solid/Toolbox"
import { School } from "@styled-icons/ionicons-sharp/School"
import { Award } from "@styled-icons/fa-solid/Award"
import { ChartPie } from "@styled-icons/fa-solid/ChartPie"
import { Language } from "@styled-icons/ionicons-solid/Language"

import HomeCard from "components/HomeCard"

import { Icon } from "./styled"

const FormatDate = (text) => {
  const date = new Date(text),
    day = date.getDate().toString().padStart(2, "0"),
    month = (date.getMonth() + 1).toString().padStart(2, "0"),
    year = date.getFullYear()
  return `${day}/${month}/${year}`
}

const CertCard = ({ name, date, institute, img, icon }) => {
  return (
    <a href={img} target="_blank" rel="noreferrer">
      <HomeCard
        title={name}
        subtitle={FormatDate(date)}
        description={institute}
        cover={
          <Icon>
            {icon === "toolbox" && <Toolbox />}
            {icon === "school" && <School />}
            {icon === "award" && <Award />}
            {icon === "chartpie" && <ChartPie />}
            {icon === "language" && <Language />}
          </Icon>
        }
      />
    </a>
  )
}

export default CertCard
