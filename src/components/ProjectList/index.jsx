import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Strings from "components/strings"
import HomeCard from "components/HomeCard"
import HomeList from "components/HomeList"

import { ImageCover, ShowAllWrapper, ShowAll } from "./styled"

const ProjectList = ({ simple }) => {
  const images = useStaticQuery(graphql`
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

  const getImage = (name) => images[name] || images.firemakebetter

  return (
    <>
      <HomeList
        title={Strings.projects.title}
        description={Strings.projects.description}
      >
        {Strings.projects.list
          .slice(0, !simple ? 12 : 3)
          .map((project, index) => (
            <HomeCard
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
      </HomeList>
      {simple && (
        <ShowAllWrapper>
          <ShowAll
            to="/projects"
            cover
            direction="right"
            bg="var(--background)"
            duration={0.6}
          >
            {Strings.projects.viewAll}
          </ShowAll>
        </ShowAllWrapper>
      )}
    </>
  )
}

export default ProjectList
