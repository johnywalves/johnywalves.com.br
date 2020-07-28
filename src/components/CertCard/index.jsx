import React from "react"
import { Tools } from "@styled-icons/fa-solid/Tools"
import { University } from "@styled-icons/fa-solid/University"
import { Award } from "@styled-icons/fa-solid/Award"
import { ChartPie } from "@styled-icons/fa-solid/ChartPie"

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
    <a href={img}>
      <HomeCard
        title={name}
        subtitle={FormatDate(date)}
        description={institute}
        cover={
          <Icon>
            {icon === "tools" && <Tools />}
            {icon === "university" && <University />}
            {icon === "award" && <Award />}
            {icon === "chartpie" && <ChartPie />}
          </Icon>
        }
      />
    </a>
  )
}

export default CertCard
