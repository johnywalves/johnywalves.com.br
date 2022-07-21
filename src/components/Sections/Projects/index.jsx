import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Strings from "components/strings"
import { List, Project } from "components/Cards"

import { Wrapper, ImageCover } from "./styled"

const SectionProjects = () => {
  const images = useStaticQuery(graphql`
    query {
      machadoalves: file(relativePath: { eq: "machadoalves.png" }) {
        childImageSharp {
          gatsbyImageData(
            height: 312
            width: 640
            layout: FIXED
            placeholder: DOMINANT_COLOR
            formats: [AUTO, WEBP]
          )
        }
      }
      registerSwitch: file(relativePath: { eq: "register-switch.png" }) {
        childImageSharp {
          gatsbyImageData(
            height: 312
            width: 640
            layout: FIXED
            placeholder: DOMINANT_COLOR
            formats: [AUTO, WEBP]
          )
        }
      }
      devflix: file(relativePath: { eq: "devflix.png" }) {
        childImageSharp {
          gatsbyImageData(
            height: 312
            width: 640
            layout: FIXED
            placeholder: DOMINANT_COLOR
            formats: [AUTO, WEBP]
          )
        }
      }
      cssanimatic: file(relativePath: { eq: "cssanimatic.png" }) {
        childImageSharp {
          gatsbyImageData(
            height: 312
            width: 640
            layout: FIXED
            placeholder: DOMINANT_COLOR
            formats: [AUTO, WEBP]
          )
        }
      }
      bomdia: file(relativePath: { eq: "bomdia.png" }) {
        childImageSharp {
          gatsbyImageData(
            height: 312
            width: 640
            layout: FIXED
            placeholder: DOMINANT_COLOR
            formats: [AUTO, WEBP]
          )
        }
      }
      daisybell: file(relativePath: { eq: "daisybell.png" }) {
        childImageSharp {
          gatsbyImageData(
            height: 312
            width: 640
            layout: FIXED
            placeholder: DOMINANT_COLOR
            formats: [AUTO, WEBP]
          )
        }
      }
      wolt: file(relativePath: { eq: "wolt.png" }) {
        childImageSharp {
          gatsbyImageData(
            height: 312
            width: 640
            layout: FIXED
            placeholder: DOMINANT_COLOR
            formats: [AUTO, WEBP]
          )
        }
      }
      comicscreator: file(relativePath: { eq: "comicscreator.png" }) {
        childImageSharp {
          gatsbyImageData(
            height: 312
            width: 640
            layout: FIXED
            placeholder: DOMINANT_COLOR
            formats: [AUTO, WEBP]
          )
        }
      }
      steamLibrary: file(relativePath: { eq: "steamLibrary.png" }) {
        childImageSharp {
          gatsbyImageData(
            height: 312
            width: 640
            layout: FIXED
            placeholder: DOMINANT_COLOR
            formats: [AUTO, WEBP]
          )
        }
      }
      firemakebetter: file(relativePath: { eq: "firemakebetter.png" }) {
        childImageSharp {
          gatsbyImageData(
            height: 312
            width: 640
            layout: FIXED
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
      <List
        title={Strings.projects.title}
        action={Strings.projects.viewAll}
        url={"/comics"}
      >
        {Strings.projects.list.slice(0, 3).map((project, index) => (
          <Project
            key={index}
            {...project}
            cover={
              project.cover && (
                <a
                  href={project.view}
                  aria-label={project.cover}
                  target="_blank"
                  rel="noreferrer"
                >
                  <ImageCover
                    image={
                      getImage(project.cover).childImageSharp.gatsbyImageData
                    }
                    style={{ objectPosition: project.coverPosition || "top" }}
                    alt=""
                  />
                </a>
              )
            }
          />
        ))}
      </List>
    </Wrapper>
  )
}

export default SectionProjects
