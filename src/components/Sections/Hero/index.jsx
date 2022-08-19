import React, { useCallback, useState } from "react"
import { Parallax } from "react-scroll-parallax"
import { useStaticQuery, graphql } from "gatsby"

import Strings from "components/strings"
import SocialLinks from "components/SocialLinks"

import getPercentHero from "utils/getPercentHero"
import useListener from "utils/useListener"

import Triangle from "../Vectors/Triangle"
import Arrow from "../Vectors/Arrow"
import ArrowOutline from "../Vectors/ArrowOutline"

import {
  BoxTop,
  BoxBack,
  BoxShadow,
  BoxText,
  Wrapper,
  ImageBox,
  ImageCover,
  WrapperSocial,
} from "./styled"

const SectionHero = () => {
  const { show, react, down } = useStaticQuery(graphql`
    query {
      show: file(relativePath: { eq: "profile_show.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 800
            height: 600
            layout: CONSTRAINED
            placeholder: TRACED_SVG
          )
        }
      }
      react: file(relativePath: { eq: "profile_react.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 800
            height: 600
            layout: CONSTRAINED
            placeholder: TRACED_SVG
          )
        }
      }
      down: file(relativePath: { eq: "profile_down.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 800
            height: 600
            layout: CONSTRAINED
            placeholder: TRACED_SVG
          )
        }
      }
    }
  `)

  const [opacities, setOpacities] = useState(0)

  const scrollMove = useCallback(() => {
    const percent = getPercentHero()
    if (percent >= 0 && percent < 0.1 && opacities !== 0) {
      setOpacities(0)
    } else if (percent >= 0.1 && percent < 0.5 && opacities !== 1) {
      setOpacities(1)
    } else if (percent >= 0.5 && percent <= 1 && opacities !== 2) {
      setOpacities(2)
    }
  }, [opacities])

  useListener("scroll", scrollMove, 10)

  return (
    <Wrapper>
      <BoxTop>
        <Parallax translateY={[-1500, 150]}>
          <Triangle width="456" height="314" />
        </Parallax>
      </BoxTop>

      <BoxBack>
        <Parallax speed={-100}>
          <Arrow width="750" height="750" />
        </Parallax>
      </BoxBack>

      <BoxShadow>
        <Parallax translateY={[0, 50]}>
          <ArrowOutline width="750" height="750" />
        </Parallax>
      </BoxShadow>

      <BoxText>
        <h1>JOHNY</h1>
        <p>{Strings.position}</p>
      </BoxText>

      <ImageBox style={{ opacity: opacities === 0 ? 1 : 0 }}>
        <Parallax speed={-10}>
          <ImageCover image={show.childImageSharp.gatsbyImageData} alt="" />
        </Parallax>
      </ImageBox>
      <ImageBox style={{ opacity: opacities === 1 ? 1 : 0 }}>
        <Parallax speed={-10}>
          <ImageCover image={react.childImageSharp.gatsbyImageData} alt="" />
        </Parallax>
      </ImageBox>
      <ImageBox style={{ opacity: opacities === 2 ? 1 : 0 }}>
        <Parallax speed={-10}>
          <ImageCover image={down.childImageSharp.gatsbyImageData} alt="" />
        </Parallax>
      </ImageBox>

      <WrapperSocial>
        <SocialLinks vertical />
      </WrapperSocial>
    </Wrapper>
  )
}

export default SectionHero
