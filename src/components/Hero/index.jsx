import React, { useCallback, useState } from "react"
import { useStaticQuery, graphql } from "gatsby"

import useListener from 'utils/useListener'

import { Wrapper, ImageBox, ImageCover } from "./styled"

function getPercentHero() {
  const body = document.body
  const docEl = document.documentElement

  const scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop
  const clientTop = docEl.clientTop || body.clientTop || 0
  const top = scrollTop - clientTop

  const clientHeight = docEl.clientHeight || body.clientHeight || 0

  return Math.round(top) / clientHeight
}

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

  useListener('scroll', scrollMove, 100)

  return (
    <Wrapper>
      <ImageBox style={{ opacity: opacities === 0 ? 1 : 0 }}  >
        <ImageCover image={show.childImageSharp.gatsbyImageData} />
      </ImageBox>
      <ImageBox style={{ opacity: opacities === 1 ? 1 : 0 }} >
        <ImageCover image={react.childImageSharp.gatsbyImageData} />
      </ImageBox>
      <ImageBox style={{ opacity: opacities === 2 ? 1 : 0 }} >
        <ImageCover image={down.childImageSharp.gatsbyImageData} />
      </ImageBox>
    </Wrapper>
  )
}

export default Hero
