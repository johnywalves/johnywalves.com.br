import React, { useCallback, useState } from "react"
import { Parallax } from "react-scroll-parallax"
import { useStaticQuery, graphql } from "gatsby"

import getPercentHero from 'utils/getPercentHero'
import useListener from 'utils/useListener'

import { Box, BoxTop, BoxBack, BoxText, Wrapper, ImageBox, ImageCover } from "./styled"

const Hero = () => {
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

  useListener('scroll', scrollMove, 10)

  return (
    <Wrapper>
      <BoxTop>
        <Parallax speed={50} translateY={[-2000, 200]}>
          <Box />
        </Parallax>
      </BoxTop>

      <BoxBack>
        <Parallax speed={-50}>
          <Box />
        </Parallax>
      </BoxBack>

      <BoxText>
        <h1>JOHNY</h1>
        <p>Web Developer</p>
      </BoxText>

      <ImageBox style={{ opacity: opacities === 0 ? 1 : 0 }}  >
        <Parallax speed={-10}>
          <ImageCover image={show.childImageSharp.gatsbyImageData} />
        </Parallax>
      </ImageBox>
      <ImageBox style={{ opacity: opacities === 1 ? 1 : 0 }} >
        <Parallax speed={-10}>
          <ImageCover image={react.childImageSharp.gatsbyImageData} />
        </Parallax>
      </ImageBox>
      <ImageBox style={{ opacity: opacities === 2 ? 1 : 0 }} >
        <Parallax speed={-10}>
          <ImageCover image={down.childImageSharp.gatsbyImageData} />
        </Parallax>
      </ImageBox>
    </Wrapper>
  )
}

export default Hero
