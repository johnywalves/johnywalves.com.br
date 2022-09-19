import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Strings from "components/strings"

import * as S from "./styled"
import Avatar from "../Avatar"

const Profile = () => {
  const {
    site: {
      siteMetadata: { title, subtitle },
    },
  } = useStaticQuery(graphql`
    query MySiteMetadata {
      site {
        siteMetadata {
          title
          subtitle
        }
      }
    }
  `)

  return (
    <S.ProfileWrapper>
      <S.ProfileLink
        to={"/"}
        cover
        direction="left"
        bg="var(--background)"
        duration={0.6}
      >
        <Avatar />
        <S.ProfileAuthor>
          {title}
          <S.ProfilePosition>{Strings.position}</S.ProfilePosition>
        </S.ProfileAuthor>
      </S.ProfileLink>
      <S.ProfileDescription>{subtitle}</S.ProfileDescription>
    </S.ProfileWrapper>
  )
}

export default Profile
