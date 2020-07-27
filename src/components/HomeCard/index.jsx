import React from "react"
import PropTypes from "prop-types"
import { Github } from "@styled-icons/fa-brands/Github"
import { ExternalLinkAlt } from "@styled-icons/fa-solid/ExternalLinkAlt"

import Badge from "components/Badge"

import * as S from "./styled"

const HomeCard = ({
  title,
  subtitle,
  description,
  tags,
  sourceCode,
  view,
  cover,
  centerDescription,
}) => {
  return (
    <S.Wrapper cover={cover}>
      {cover}
      <S.Content>
        <S.Title>{title}</S.Title>
        <S.Subtitle>{subtitle}</S.Subtitle>
        <S.Description centerDescription={centerDescription}>
          {description}
        </S.Description>
        {(sourceCode || view) && (
          <S.Navicon>
            {sourceCode && (
              <S.Icon
                href={sourceCode}
                target="_blank"
                rel="noreferrer noopener"
              >
                <Github />
              </S.Icon>
            )}
            {view && (
              <S.Icon href={view} target="_blank" rel="noreferrer noopener">
                <ExternalLinkAlt />
              </S.Icon>
            )}
          </S.Navicon>
        )}
        {tags && (
          <S.Tags>
            {tags.map((tag, index) => (
              <Badge key={index}>{tag}</Badge>
            ))}
          </S.Tags>
        )}
      </S.Content>
    </S.Wrapper>
  )
}

HomeCard.propTypes = {
  centerDescription: false,
}

HomeCard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.array,
  code: PropTypes.string,
  view: PropTypes.string,
  to: PropTypes.string,
  centerDescription: PropTypes.bool.isRequired,
}

export default HomeCard
