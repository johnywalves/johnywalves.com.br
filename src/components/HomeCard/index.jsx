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
        {subtitle && <S.Subtitle>{subtitle}</S.Subtitle>}
        <S.Title>{title}</S.Title>
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
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  description: PropTypes.string.isRequired,
  tags: PropTypes.array,
  code: PropTypes.string,
  view: PropTypes.string,
  to: PropTypes.string,
  centerDescription: PropTypes.bool,
}

export default HomeCard
