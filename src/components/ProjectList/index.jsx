import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"

import Strings from "components/strings"
import HomeCard from "components/HomeCard"
import HomeList from "components/HomeList"

import { ImageCover, ShowAll } from "./styled"

const ProjectList = () => {
  const [showAll, setShowAll] = useState(false)

  const {
    machadoalves,
    registerSwitch,
    devflix,
    cssanimatic,
    bomdia,
    daisybell,
    wolt,
    comicscreator,
    carreirapolicial,
    steamLibrary,
    firemakebetter,
  } = useStaticQuery(graphql`
    query {
      machadoalves: file(relativePath: { eq: "machadoalves.png" }) {
        childImageSharp {
          gatsbyImageData(
            height: 256
            placeholder: DOMINANT_COLOR
            formats: [AUTO, WEBP]
          )
        }
      }
      registerSwitch: file(relativePath: { eq: "register-switch.png" }) {
        childImageSharp {
          gatsbyImageData(
            height: 256
            placeholder: DOMINANT_COLOR
            formats: [AUTO, WEBP]
          )
        }
      }
      devflix: file(relativePath: { eq: "devflix.png" }) {
        childImageSharp {
          gatsbyImageData(
            height: 256
            placeholder: DOMINANT_COLOR
            formats: [AUTO, WEBP]
          )
        }
      }
      cssanimatic: file(relativePath: { eq: "cssanimatic.png" }) {
        childImageSharp {
          gatsbyImageData(
            height: 256
            placeholder: DOMINANT_COLOR
            formats: [AUTO, WEBP]
          )
        }
      }
      bomdia: file(relativePath: { eq: "bomdia.png" }) {
        childImageSharp {
          gatsbyImageData(
            height: 256
            placeholder: DOMINANT_COLOR
            formats: [AUTO, WEBP]
          )
        }
      }
      daisybell: file(relativePath: { eq: "daisybell.png" }) {
        childImageSharp {
          gatsbyImageData(
            height: 256
            placeholder: DOMINANT_COLOR
            formats: [AUTO, WEBP]
          )
        }
      }
      wolt: file(relativePath: { eq: "wolt.png" }) {
        childImageSharp {
          gatsbyImageData(
            height: 256
            placeholder: DOMINANT_COLOR
            formats: [AUTO, WEBP]
          )
        }
      }
      comicscreator: file(relativePath: { eq: "comicscreator.png" }) {
        childImageSharp {
          gatsbyImageData(
            height: 256
            placeholder: DOMINANT_COLOR
            formats: [AUTO, WEBP]
          )
        }
      }
      carreirapolicial: file(relativePath: { eq: "carreirapolicial.png" }) {
        childImageSharp {
          gatsbyImageData(
            height: 256
            placeholder: DOMINANT_COLOR
            formats: [AUTO, WEBP]
          )
        }
      }
      steamLibrary: file(relativePath: { eq: "steamLibrary.png" }) {
        childImageSharp {
          gatsbyImageData(
            height: 256
            placeholder: DOMINANT_COLOR
            formats: [AUTO, WEBP]
          )
        }
      }
      firemakebetter: file(relativePath: { eq: "firemakebetter.png" }) {
        childImageSharp {
          gatsbyImageData(
            height: 256
            placeholder: DOMINANT_COLOR
            formats: [AUTO, WEBP]
          )
        }
      }
    }
  `)

  const getImage = (name) => {
    switch (name) {
      case "machadoalves":
        return machadoalves
      case "registerSwitch":
        return registerSwitch
      case "devflix":
        return devflix
      case "cssanimatic":
        return cssanimatic
      case "bomdia":
        return bomdia
      case "daisybell":
        return daisybell
      case "wolt":
        return wolt
      case "comicscreator":
        return comicscreator
      case "carreirapolicial":
        return carreirapolicial
      case "steamLibrary":
        return steamLibrary
      default:
        return firemakebetter
    }
  }

  return (
    <>
      <HomeList
        title={Strings.projects.title}
        description={Strings.projects.description}
      >
        {Strings.projects.list
          .slice(0, showAll ? 12 : 3)
          .map((project, index) => (
            <HomeCard
              key={index}
              {...project}
              cover={
                project.cover && (
                  <a href={project.view} aria-label={project.cover} target="_blank" rel="noreferrer">
                    <ImageCover
                      image={
                        getImage(project.cover).childImageSharp.gatsbyImageData
                      }
                      style={{ objectPosition: project.coverPosition || "top" }}
                    />
                  </a>
                )
              }
            />
          ))}
      </HomeList>
      <ShowAll onClick={() => setShowAll(!showAll)}>
        {showAll ? Strings.projects.viewHighlight : Strings.projects.viewAll}
      </ShowAll>
    </>
  )
}

export default ProjectList
