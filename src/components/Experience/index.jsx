import React from "react"
import { Award } from "@styled-icons/fa-solid/Award"

import * as S from "./styled"

const Experience = ({
  date,
  title,
  institution,
  description,
  awards,
  production,
  job,
}) => (
  <S.Content>
    <S.Title>
      {title}
      <S.Institution> - {institution}</S.Institution>
    </S.Title>
    <S.Date>{date}</S.Date>
    {description && (
      <S.Description job={job}>
        {description.map((text, index) => (
          <li key={index}>{text}</li>
        ))}
      </S.Description>
    )}
    {awards &&
      awards.map((text, index) => (
        <S.Award key={index}>
          <Award />
          <p>{text}</p>
        </S.Award>
      ))}
    {production && (
      <S.Production
        href={production.file}
        target="_blank"
        rel="noreferrer noopener"
      >
        {production.title}
      </S.Production>
    )}
  </S.Content>
)

export default Experience
