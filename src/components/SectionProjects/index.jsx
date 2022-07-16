import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Strings from "components/strings"
import Card from "components/Card"
import CardContainer from "components/CardContainer"

import { Wrapper, ImageCover } from "./styled"

const SectionProjects = () => {
  const images = useStaticQuery(graphql`
    query {
      machadoalves: file(relativePath: { eq: "machadoalves.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 640
            placeholder: DOMINANT_COLOR
            formats: [AUTO, WEBP]
          )
        }
      }
      registerSwitch: file(relativePath: { eq: "register-switch.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 640
            placeholder: DOMINANT_COLOR
            formats: [AUTO, WEBP]
          )
        }
      }
      devflix: file(relativePath: { eq: "devflix.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 640
            placeholder: DOMINANT_COLOR
            formats: [AUTO, WEBP]
          )
        }
      }
      cssanimatic: file(relativePath: { eq: "cssanimatic.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 640
            placeholder: DOMINANT_COLOR
            formats: [AUTO, WEBP]
          )
        }
      }
      bomdia: file(relativePath: { eq: "bomdia.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 640
            placeholder: DOMINANT_COLOR
            formats: [AUTO, WEBP]
          )
        }
      }
      daisybell: file(relativePath: { eq: "daisybell.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 640
            placeholder: DOMINANT_COLOR
            formats: [AUTO, WEBP]
          )
        }
      }
      wolt: file(relativePath: { eq: "wolt.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 640
            placeholder: DOMINANT_COLOR
            formats: [AUTO, WEBP]
          )
        }
      }
      comicscreator: file(relativePath: { eq: "comicscreator.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 640
            placeholder: DOMINANT_COLOR
            formats: [AUTO, WEBP]
          )
        }
      }
      steamLibrary: file(relativePath: { eq: "steamLibrary.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 640
            placeholder: DOMINANT_COLOR
            formats: [AUTO, WEBP]
          )
        }
      }
      firemakebetter: file(relativePath: { eq: "firemakebetter.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 640
            placeholder: DOMINANT_COLOR
            formats: [AUTO, WEBP]
          )
        }
      }
    }
  `)

  const getImage = (name) => images[name] || images.firemakebetter

  return (
    <Wrapper>
      <h2>{Strings.projects.title}</h2>
      <CardContainer>
        {Strings.projects.list
          .slice(0, 3)
          .map((project, index) => (
            <Card
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
      </CardContainer>
    </Wrapper>
  )
}

export default SectionProjects
