import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import * as S from "./styled";

const Avatar = () => {
    const { avatarImage } = useStaticQuery(graphql`
        query {
            avatarImage: file(relativePath: { eq: "johnywalves.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 120) {
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }
        }
    `)

    return <S.AvatarWrapper fluid={avatarImage.childImageSharp.fluid} />
}

export default Avatar