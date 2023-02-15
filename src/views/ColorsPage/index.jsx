import React, { useState, useCallback, useMemo, useRef } from "react"

import Strings from "components/strings"

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
  ColorsDescriptions,
  ColorsDescriptionsDetails,
  ColorSectionTitle,
  ColorReferenceTitle,
  ColorSectionSubtitle,
  ColorSectionDescription,
  ColorGrid,
  ColorElementContent,
  ColorElementWrapper,
  ColorsSelect,
} from "./styled"

const convertHue = (hue) => hue - Math.floor(hue / 360) * 360

const scale = {
  100: 96,
  200: 90,
  300: 83,
  400: 64,
  500: 45,
  600: 32,
  700: 25,
  800: 15,
  900: 9,
}

const ColorsPage = () => {
  const [currentHex, setCurrentHex] = useState("#e0138c")

  const [valueHex, setValueHex] = useState("#e0138c")

  const savedTimer = useRef(null)

  const changeValueHex = useCallback(
    (e) => {
      if (savedTimer.current) {
        clearTimeout(savedTimer.current)
      }

      setValueHex(e.target.value)
      savedTimer.current = setTimeout(() => setCurrentHex(e.target.value), 500)
    },
    [setCurrentHex]
  )

  const {
    colorRgb,
    colorHsl,
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
    pentaTwo,
    pentaThree,
    pentaFour,
    pentaFive,
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
    hex100,
    hex200,
    hex300,
    hex400,
    hex500,
    hex600,
    hex700,
    hex800,
    hex900,
    neutral100,
    neutral200,
    neutral300,
    neutral400,
    neutral500,
    neutral600,
    neutral700,
    neutral800,
    neutral900,
    paletteOne100,
    paletteOne200,
    paletteOne300,
    paletteOne400,
    paletteOne500,
    paletteOne600,
    paletteOne700,
    paletteOne800,
    paletteOne900,
    paletteTwo100,
    paletteTwo200,
    paletteTwo300,
    paletteTwo400,
    paletteTwo500,
    paletteTwo600,
    paletteTwo700,
    paletteTwo800,
    paletteTwo900,
    paletteThree100,
    paletteThree200,
    paletteThree300,
    paletteThree400,
    paletteThree500,
    paletteThree600,
    paletteThree700,
    paletteThree800,
    paletteThree900,
    paletteFour100,
    paletteFour200,
    paletteFour300,
    paletteFour400,
    paletteFour500,
    paletteFour600,
    paletteFour700,
    paletteFour800,
    paletteFour900,
    ColorElement,
  } = useMemo(() => {
    const [currentHue, currentSaturation, currentLight] = hexToHSL(
      currentHex,
      true
    )

    const calcColor = (hueDiff, saturationDiff, lightDiff) => {
      const hue = convertHue(currentHue + hueDiff),
        saturation = Math.min(currentSaturation + saturationDiff, 100),
        light = Math.min(currentLight + lightDiff, 100)
      return hslToHex(hue, saturation, light)
    }

    const neutralScale = (light) => {
      const calculedLight = scale[light]
      return hslToHex(currentHue, currentSaturation, calculedLight)
    }

    const getScaleLight = (color, scaleLight) => {
      const [hue] = hexToHSL(color, true)
      const calculedLight = scale[scaleLight]
      return hslToHex(hue, 100, calculedLight)
    }

    const ColorElement = ({ color, small, label }) => (
      <ColorElementWrapper>
        <ColorElementContent
          small={small ? 1 : 0}
          color={color}
          text={getContrastColor(color)}
        >
          {color}
          {color !== currentHex && (
            <ColorPalette
              onClick={() => {
                setValueHex(color)
                setCurrentHex(color)
              }}
            >
              ●
            </ColorPalette>
          )}
        </ColorElementContent>
        {label && <label>{label}</label>}
      </ColorElementWrapper>
    )

    const neutralCalc = (percent) =>
      "#" +
      Math.ceil((255 * scale[percent]) / 100)
        .toString(16)
        .padStart(2, "0")
        .repeat(3)

    const [red, green, blue] = hexToRGB(currentHex, true)
    const [cyan, magenta, yellow, black] = rgbToCmyk(red, green, blue)
    const gradeLight = (100 - currentLight) / 9
    const gradeDark = currentLight / 9

    const pentaTwo = calcColor(72, 100, 0)
    const pentaThree = calcColor(144, 100, 0)
    const pentaFour = calcColor(216, 100, 0)
    const pentaFive = calcColor(288, 100, 0)

    return {
      colorRgb: {
        title: `rgb(${+red}, ${+green}, ${+blue})`,
        red: `${+red}`,
        green: `${+green}`,
        blue: `${+blue}`,
      },
      colorHsl: {
        title: `hsl(${currentHue}, ${currentSaturation}, ${currentLight})`,
        hue: currentHue,
        saturation: currentSaturation,
        light: currentLight,
      },
      colorCymk: {
        title: `cymk(${cyan}, ${magenta}, ${yellow}, ${black})`,
        cyan,
        magenta,
        yellow,
        black,
      },
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
      pentaTwo,
      pentaThree,
      pentaFour,
      pentaFive,
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
      hex100: neutralScale(100),
      hex200: neutralScale(200),
      hex300: neutralScale(300),
      hex400: neutralScale(400),
      hex500: neutralScale(500),
      hex600: neutralScale(600),
      hex700: neutralScale(700),
      hex800: neutralScale(800),
      hex900: neutralScale(900),
      neutral100: neutralCalc(100),
      neutral200: neutralCalc(200),
      neutral300: neutralCalc(300),
      neutral400: neutralCalc(400),
      neutral500: neutralCalc(500),
      neutral600: neutralCalc(600),
      neutral700: neutralCalc(700),
      neutral800: neutralCalc(800),
      neutral900: neutralCalc(900),
      paletteOne100: getScaleLight(pentaTwo, 100),
      paletteOne200: getScaleLight(pentaTwo, 200),
      paletteOne300: getScaleLight(pentaTwo, 300),
      paletteOne400: getScaleLight(pentaTwo, 400),
      paletteOne500: getScaleLight(pentaTwo, 500),
      paletteOne600: getScaleLight(pentaTwo, 600),
      paletteOne700: getScaleLight(pentaTwo, 700),
      paletteOne800: getScaleLight(pentaTwo, 800),
      paletteOne900: getScaleLight(pentaTwo, 900),
      paletteTwo100: getScaleLight(pentaThree, 100),
      paletteTwo200: getScaleLight(pentaThree, 200),
      paletteTwo300: getScaleLight(pentaThree, 300),
      paletteTwo400: getScaleLight(pentaThree, 400),
      paletteTwo500: getScaleLight(pentaThree, 500),
      paletteTwo600: getScaleLight(pentaThree, 600),
      paletteTwo700: getScaleLight(pentaThree, 700),
      paletteTwo800: getScaleLight(pentaThree, 800),
      paletteTwo900: getScaleLight(pentaThree, 900),
      paletteThree100: getScaleLight(pentaFour, 100),
      paletteThree200: getScaleLight(pentaFour, 200),
      paletteThree300: getScaleLight(pentaFour, 300),
      paletteThree400: getScaleLight(pentaFour, 400),
      paletteThree500: getScaleLight(pentaFour, 500),
      paletteThree600: getScaleLight(pentaFour, 600),
      paletteThree700: getScaleLight(pentaFour, 700),
      paletteThree800: getScaleLight(pentaFour, 800),
      paletteThree900: getScaleLight(pentaFour, 900),
      paletteFour100: getScaleLight(pentaFive, 100),
      paletteFour200: getScaleLight(pentaFive, 200),
      paletteFour300: getScaleLight(pentaFive, 300),
      paletteFour400: getScaleLight(pentaFive, 400),
      paletteFour500: getScaleLight(pentaFive, 500),
      paletteFour600: getScaleLight(pentaFive, 600),
      paletteFour700: getScaleLight(pentaFive, 700),
      paletteFour800: getScaleLight(pentaFive, 800),
      paletteFour900: getScaleLight(pentaFive, 900),
      ColorElement,
    }
  }, [currentHex])

  return (
    <ColorsWrapper>
      <ColorsTitle>
        {Strings.utils.colorExplorer.title.replace("#e0138c", currentHex)}
      </ColorsTitle>

      <ColorsSelect>
        <label htmlFor="selectColor">Selecione a cor desejada: </label>
        <input
          type="color"
          id="selectColor"
          onChange={changeValueHex}
          value={valueHex}
        />
      </ColorsSelect>

      <ColorSection>
        <ColorSectionTitle>Composição da cor</ColorSectionTitle>

        <ColorsDescriptions>
          <ColorReferenceTitle>
            <strong>Hex</strong> Porcentagens de cores (Vermelho, Verde e Azul)
            em hexadecimal (números na base 16)
          </ColorReferenceTitle>
          <ColorsDescriptionsDetails>
            <p>{currentHex}</p>
          </ColorsDescriptionsDetails>

          <ColorReferenceTitle>
            <strong>RGB</strong> Porcentagens de cores (Vermelho, Verde e Azul)
            em decimal (calculado na referência 0 a 255)
          </ColorReferenceTitle>
          <ColorsDescriptionsDetails>
            <p>{colorRgb.title}</p>
            <p>
              <strong>{colorRgb.red}</strong> <span>●</span>{" "}
              {Math.round(colorRgb.red / 2.55)}% vermelho
            </p>
            <p>
              <strong>{colorRgb.green}</strong> <span>●</span>
              {Math.round(colorRgb.green / 2.55)}% verde
            </p>
            <p>
              <strong>{colorRgb.blue}</strong> <span>●</span>
              {Math.round(colorRgb.blue / 2.55)}% azul
            </p>
          </ColorsDescriptionsDetails>

          <ColorReferenceTitle>
            <strong>HSL</strong> Matiz, Saturação e Luz para geração das cores
          </ColorReferenceTitle>
          <ColorsDescriptionsDetails>
            <p>{colorHsl.title}</p>
            <p>
              <strong>{colorHsl.hue}º</strong> roda cores
            </p>
            <p>
              <strong>{colorHsl.saturation}%</strong> saturação
            </p>
            <p>
              <strong>{colorHsl.light}%</strong> luz
            </p>
          </ColorsDescriptionsDetails>

          <ColorReferenceTitle>
            <strong>CYMK</strong> Configuração para impressão da cor
          </ColorReferenceTitle>
          <ColorsDescriptionsDetails>
            <p>{colorCymk.title}</p>
            <p>{colorCymk.cyan}% ciano</p>
            <p>{colorCymk.magenta}% magenta</p>
            <p>{colorCymk.yellow}% amarelo</p>
            <p>{colorCymk.black}% preto</p>
          </ColorsDescriptionsDetails>
        </ColorsDescriptions>
      </ColorSection>

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

      <ColorSection>
        <ColorSectionTitle>Paleta de cores</ColorSectionTitle>

        <ColorSectionSubtitle>
          <strong>Pentagrama de cores:</strong> Variação de 72º com saturação de
          100%
        </ColorSectionSubtitle>
        <ColorGrid number="5">
          <ColorElement color={currentHex} />
          <ColorElement color={pentaTwo} />
          <ColorElement color={pentaThree} />
          <ColorElement color={pentaFour} />
          <ColorElement color={pentaFive} />
        </ColorGrid>

        <hr />

        <ColorSectionSubtitle>Primária</ColorSectionSubtitle>
        <ColorGrid number="8">
          <ColorElement color={hex100} label="100" />
          <ColorElement color={hex200} label="200" />
          <ColorElement color={hex300} label="300" />
          <ColorElement color={hex400} label="400" />
          <ColorElement color={hex500} label="500" />
          <ColorElement color={hex600} label="600" />
          <ColorElement color={hex700} label="700" />
          <ColorElement color={hex800} label="800" />
          <ColorElement color={hex900} label="900" />
        </ColorGrid>

        <ColorSectionSubtitle>Neutra</ColorSectionSubtitle>
        <ColorGrid number="8">
          <ColorElement color={neutral100} label="100" />
          <ColorElement color={neutral200} label="200" />
          <ColorElement color={neutral300} label="300" />
          <ColorElement color={neutral400} label="400" />
          <ColorElement color={neutral500} label="500" />
          <ColorElement color={neutral600} label="600" />
          <ColorElement color={neutral700} label="700" />
          <ColorElement color={neutral800} label="800" />
          <ColorElement color={neutral900} label="900" />
        </ColorGrid>

        <ColorSectionSubtitle>Secundárias</ColorSectionSubtitle>
        <ColorGrid number="8">
          <ColorElement color={paletteOne100} label="100" />
          <ColorElement color={paletteOne200} label="200" />
          <ColorElement color={paletteOne300} label="300" />
          <ColorElement color={paletteOne400} label="400" />
          <ColorElement color={paletteOne500} label="500" />
          <ColorElement color={paletteOne600} label="600" />
          <ColorElement color={paletteOne700} label="700" />
          <ColorElement color={paletteOne800} label="800" />
          <ColorElement color={paletteOne900} label="900" />
        </ColorGrid>
        <ColorGrid number="8">
          <ColorElement color={paletteTwo100} label="100" />
          <ColorElement color={paletteTwo200} label="200" />
          <ColorElement color={paletteTwo300} label="300" />
          <ColorElement color={paletteTwo400} label="400" />
          <ColorElement color={paletteTwo500} label="500" />
          <ColorElement color={paletteTwo600} label="600" />
          <ColorElement color={paletteTwo700} label="700" />
          <ColorElement color={paletteTwo800} label="800" />
          <ColorElement color={paletteTwo900} label="900" />
        </ColorGrid>
        <ColorGrid number="8">
          <ColorElement color={paletteThree100} label="100" />
          <ColorElement color={paletteThree200} label="200" />
          <ColorElement color={paletteThree300} label="300" />
          <ColorElement color={paletteThree400} label="400" />
          <ColorElement color={paletteThree500} label="500" />
          <ColorElement color={paletteThree600} label="600" />
          <ColorElement color={paletteThree700} label="700" />
          <ColorElement color={paletteThree800} label="800" />
          <ColorElement color={paletteThree900} label="900" />
        </ColorGrid>
        <ColorGrid number="8">
          <ColorElement color={paletteFour100} label="100" />
          <ColorElement color={paletteFour200} label="200" />
          <ColorElement color={paletteFour300} label="300" />
          <ColorElement color={paletteFour400} label="400" />
          <ColorElement color={paletteFour500} label="500" />
          <ColorElement color={paletteFour600} label="600" />
          <ColorElement color={paletteFour700} label="700" />
          <ColorElement color={paletteFour800} label="800" />
          <ColorElement color={paletteFour900} label="900" />
        </ColorGrid>
      </ColorSection>
    </ColorsWrapper>
  )
}

export default ColorsPage
