import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Strings from "components/strings"
import { CardList, Project } from "components/Cards"

import { Wrapper, ImageCover } from "./styled"

const SectionProjects = () => {
  const images = useStaticQuery(graphql`
    query {
      machadoalves: file(relativePath: { eq: "machadoalves.png" }) {
        ...extractFieldsHome
      }
      registerSwitch: file(relativePath: { eq: "register-switch.png" }) {
        ...extractFieldsHome
      }
      devflix: file(relativePath: { eq: "devflix.png" }) {
        ...extractFieldsHome
      }
      cssanimatic: file(relativePath: { eq: "cssanimatic.png" }) {
        ...extractFieldsHome
      }
      bomdia: file(relativePath: { eq: "bomdia.png" }) {
        ...extractFieldsHome
      }
      daisybell: file(relativePath: { eq: "daisybell.png" }) {
        ...extractFieldsHome
      }
      wolt: file(relativePath: { eq: "wolt.png" }) {
        ...extractFieldsHome
      }
      comicscreator: file(relativePath: { eq: "comicscreator.png" }) {
        ...extractFieldsHome
      }
      steamLibrary: file(relativePath: { eq: "steamLibrary.png" }) {
        ...extractFieldsHome
      }
      thumbnail: file(relativePath: { eq: "thumbnail.png" }) {
        ...extractFieldsHome
      }
      firemakebetter: file(relativePath: { eq: "firemakebetter.png" }) {
        ...extractFieldsHome
      }
    }

    fragment extractFieldsHome on File {
      childImageSharp {
        gatsbyImageData(
          height: 312
          width: 512
          placeholder: DOMINANT_COLOR
          formats: [AUTO, WEBP]
        )
      }
    }
  `)

  const getImage = (name) => images[name] || images.firemakebetter

  return (
    <Wrapper>
      <CardList
        title={Strings.projects.title}
        action={Strings.projects.viewAll}
        url="/projects/"
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
      </CardList>
    </Wrapper>
  )
}

export default SectionProjects
