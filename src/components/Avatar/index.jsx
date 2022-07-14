import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import * as S from "./styled"

const Avatar = () => {
  const { avatarImage } = useStaticQuery(graphql`
    query {
      avatarImage: file(relativePath: { eq: "johnywalves.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 120
            layout: CONSTRAINED
            placeholder: TRACED_SVG
          )
        }
      }
    }
  `)

  return (
    <S.AvatarWrapper
      image={avatarImage.childImageSharp.gatsbyImageData}
      alt=""
    />
  )
}

export default Avatar
