import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import * as S from "./styled"
import Avatar from "../Avatar"

const Profile = () => {
    const {
        site: {
            siteMetadata: { title, position, description }
        }
    } = useStaticQuery(graphql`
        query MySiteMetadata {
            site {
                siteMetadata {
                    title
                    position
                    description
                }
            }
        }
    `)

    return (<S.ProfileWrapper>
        <S.ProfileLink
            to={"/blog"}
            cover direction="left" bg="var(--background)" duration={0.6}
        >
            <Avatar />
            <S.ProfileAuthor>
                {title}
                <S.ProfilePosition>
                    {position}
                </S.ProfilePosition>
            </S.ProfileAuthor>
        </S.ProfileLink>
        <S.ProfileDescription >
            {description}
        </S.ProfileDescription>
    </S.ProfileWrapper>
    )
}

export default Profile