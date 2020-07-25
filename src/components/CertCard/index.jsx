import React from "react"
// style
import { Card, Icon, Name, Institute, Moment } from "./styled"
// assets
import { Tools } from "@styled-icons/fa-solid/Tools"
import { University } from "@styled-icons/fa-solid/University"
import { Award } from "@styled-icons/fa-solid/Award"
import { ChartPie } from "@styled-icons/fa-solid/ChartPie"

const FormatDate = (text) => {
  const date = new Date(text),
    day = date.getDate().toString().padStart(2, "0"),
    month = (date.getMonth() + 1).toString().padStart(2, "0"),
    year = date.getFullYear()
  return `${day}/${month}/${year}`
}

const CertCard = ({ name, date, institute, img, icon }) => {
  return (
    <Card href={img} target="_blank">
      <Icon>
        {icon === "tools" && <Tools />}
        {icon === "university" && <University />}
        {icon === "award" && <Award />}
        {icon === "chartpie" && <ChartPie />}
      </Icon>
      <Name>{name}</Name>
      <Institute>{institute}</Institute>
      <Moment>{FormatDate(date)}</Moment>
    </Card>
  )
}

export default CertCard
