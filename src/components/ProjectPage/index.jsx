import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import SampleList from "components/SampleList"
import Strings from "components/strings"
import { Header, Article } from "components/Cards"

import { Wrapper, List, ImageCover } from "./styled"

const ProjectPage = () => {
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
      <Header title={Strings.projects.title} left light />
      <List>
        {Strings.projects.list.slice(0, 6).map((project, index) => (
          <Article
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
      <Header title={"One page projects"} left light small />
      <SampleList />
    </Wrapper>
  )
}

export default ProjectPage
