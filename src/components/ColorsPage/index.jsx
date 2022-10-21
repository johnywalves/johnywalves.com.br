import React, { useState, useMemo } from "react"

import { ColorPalette } from "assets/icons"

import {
  hexToHSL,
  hexToRGB,
  hslToHex,
  rgbToCmyk,
  getContrastColor,
} from "utils/colorsFunctions"

import {
  ColorsWrapper,
  ColorSection,
  ColorsTitle,
  ColorSectionTitle,
  ColorSectionSubtitle,
  ColorSectionDescription,
  ColorGrid,
  ColorElementWrapper,
} from "./styled"

const convertHue = (hue) => hue - Math.floor(hue / 360) * 360

const ColorsPage = () => {
  const [currentHex, setCurrentHex] = useState("#e0138c")

  const {
    colorRgb,
    colorCymk,
    additional,
    analogousPrev,
    analogousPrevPrev,
    analogousNext,
    analogousNextNext,
    additionalPrev,
    additionalNext,
    triadPrev,
    triadNext,
    tetradTwo,
    tetradThree,
    tetradFour,
    light2,
    light3,
    light4,
    light5,
    light6,
    light7,
    light8,
    light9,
    light10,
    dark2,
    dark3,
    dark4,
    dark5,
    dark6,
    dark7,
    dark8,
    dark9,
    dark10,
    ColorElement,
  } = useMemo(() => {
    const [currentHue, currentSaturation, currentLight] = hexToHSL(
        currentHex,
        true
      ),
      calcColor = (hueDiff, saturationDiff, lightDiff) => {
        const hue = convertHue(currentHue + hueDiff),
          saturation = currentSaturation + saturationDiff,
          light = currentLight + lightDiff

        return hslToHex(hue, saturation, light)
      }
    const ColorElement = ({ color, small }) => (
        <ColorElementWrapper
          small={small ? 1 : 0}
          color={color}
          text={getContrastColor(color)}
        >
          {color}
          {color !== currentHex && (
            <ColorPalette onClick={() => setCurrentHex(color)}>●</ColorPalette>
          )}
        </ColorElementWrapper>
      ),
      [red, green, blue] = hexToRGB(currentHex, true),
      [cyan, magenta, yellow, black] = rgbToCmyk(red, green, blue),
      gradeLight = (100 - currentLight) / 9,
      gradeDark = currentLight / 9

    return {
      colorRgb: `rgb(${+red}, ${+green}, ${+blue})`,
      colorCymk: `cymk(${cyan}, ${magenta}, ${yellow}, ${black})`,
      additional: calcColor(180, 0, 0),
      analogousPrev: calcColor(-30, 0, 0),
      analogousPrevPrev: calcColor(-60, 0, 0),
      analogousNext: calcColor(30, 0, 0),
      analogousNextNext: calcColor(60, 0, 0),
      additionalPrev: calcColor(-150, 0, 0),
      additionalNext: calcColor(150, 0, 0),
      triadPrev: calcColor(-120, 0, 0),
      triadNext: calcColor(120, 0, 0),
      tetradTwo: calcColor(120, 0, 0),
      tetradThree: calcColor(180, 0, 0),
      tetradFour: calcColor(240, 0, 0),
      light2: calcColor(0, 0, gradeLight),
      light3: calcColor(0, 0, gradeLight * 2),
      light4: calcColor(0, 0, gradeLight * 3),
      light5: calcColor(0, 0, gradeLight * 4),
      light6: calcColor(0, 0, gradeLight * 5),
      light7: calcColor(0, 0, gradeLight * 6),
      light8: calcColor(0, 0, gradeLight * 7),
      light9: calcColor(0, 0, gradeLight * 8),
      light10: calcColor(0, 0, gradeLight * 9),
      dark2: calcColor(0, 0, gradeDark * -1),
      dark3: calcColor(0, 0, gradeDark * -2),
      dark4: calcColor(0, 0, gradeDark * -3),
      dark5: calcColor(0, 0, gradeDark * -4),
      dark6: calcColor(0, 0, gradeDark * -5),
      dark7: calcColor(0, 0, gradeDark * -6),
      dark8: calcColor(0, 0, gradeDark * -7),
      dark9: calcColor(0, 0, gradeDark * -8),
      dark10: calcColor(0, 0, gradeDark * -9),
      ColorElement,
    }
  }, [currentHex])

  return (
    <ColorsWrapper>
      <ColorsTitle>Magenta</ColorsTitle>
      <h2>{currentHex}</h2>
      <h2>{colorRgb}</h2>
      <h2>{colorCymk}</h2>

      <ColorSection>
        <ColorSectionTitle>Complementação de cores</ColorSectionTitle>

        <ColorSectionSubtitle>
          <strong>Cor complementar:</strong> Cor oposta na roda de cores,
          somando 180º
        </ColorSectionSubtitle>

        <ColorGrid number="2">
          <ColorElement color={currentHex} />
          <ColorElement color={additional} />
        </ColorGrid>

        <ColorSectionSubtitle>
          <strong>Cores complementares dividida:</strong> Pegar como referência
          a cor complementar somar 150º e subtrair 150º
        </ColorSectionSubtitle>

        <ColorGrid number="3">
          <ColorElement color={additionalPrev} />
          <ColorElement color={currentHex} />
          <ColorElement color={additionalNext} />
        </ColorGrid>
      </ColorSection>

      <ColorSection>
        <ColorSectionTitle>Cores Análogas</ColorSectionTitle>

        <ColorSectionSubtitle>
          Cores que estão a 30º de diferença
        </ColorSectionSubtitle>

        <ColorSectionDescription>Duas cores após</ColorSectionDescription>
        <ColorGrid number="3">
          <ColorElement color={currentHex} />
          <ColorElement color={analogousNext} />
          <ColorElement color={analogousNextNext} />
        </ColorGrid>

        <ColorSectionDescription>Antes e depois</ColorSectionDescription>
        <ColorGrid number="3">
          <ColorElement color={analogousPrevPrev} />
          <ColorElement color={analogousPrev} />
          <ColorElement color={currentHex} />
        </ColorGrid>

        <ColorSectionDescription>Duas cores depois</ColorSectionDescription>
        <ColorGrid number="3">
          <ColorElement color={analogousPrev} />
          <ColorElement color={currentHex} />
          <ColorElement color={analogousNext} />
        </ColorGrid>
      </ColorSection>

      <ColorSection>
        <ColorSectionTitle>Cores Análogas</ColorSectionTitle>

        <ColorSectionSubtitle>
          <strong>Triade de cores:</strong> Complementares somando 120º no
          círculo cromático
        </ColorSectionSubtitle>
        <ColorGrid number="3">
          <ColorElement color={triadPrev} />
          <ColorElement color={currentHex} />
          <ColorElement color={triadNext} />
        </ColorGrid>

        <ColorSectionSubtitle>
          <strong>Tetrádica de cores:</strong> Dentro do círculo cromático
          somando 120º, 60º e 120º
        </ColorSectionSubtitle>
        <ColorGrid number="4">
          <ColorElement color={currentHex} />
          <ColorElement color={tetradTwo} />
          <ColorElement color={tetradThree} />
          <ColorElement color={tetradFour} />
        </ColorGrid>
      </ColorSection>

      <ColorSection>
        <ColorSectionTitle>Tons claros e escuros</ColorSectionTitle>

        <ColorSectionSubtitle>
          <strong>Cores parceiras</strong>: aumento
        </ColorSectionSubtitle>
        <ColorGrid number="10">
          <ColorElement small color={currentHex} />
          <ColorElement small color={light2} />
          <ColorElement small color={light3} />
          <ColorElement small color={light4} />
          <ColorElement small color={light5} />
          <ColorElement small color={light6} />
          <ColorElement small color={light7} />
          <ColorElement small color={light8} />
          <ColorElement small color={light9} />
          <ColorElement small color={light10} />
        </ColorGrid>

        <ColorSectionSubtitle>
          <strong>Cores parceiras</strong>: Lorem lipsum liore avava
        </ColorSectionSubtitle>
        <ColorGrid number="10">
          <ColorElement small color={currentHex} />
          <ColorElement small color={dark2} />
          <ColorElement small color={dark3} />
          <ColorElement small color={dark4} />
          <ColorElement small color={dark5} />
          <ColorElement small color={dark6} />
          <ColorElement small color={dark7} />
          <ColorElement small color={dark8} />
          <ColorElement small color={dark9} />
          <ColorElement small color={dark10} />
        </ColorGrid>
      </ColorSection>
    </ColorsWrapper>
  )
}

export default ColorsPage
