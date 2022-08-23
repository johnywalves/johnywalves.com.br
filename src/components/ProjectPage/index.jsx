import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Strings from "components/strings"
import { Header } from "components/Cards"

import OnePageList from "./OnePageList"
import Project from "./Project"
import { Wrapper, List } from "./styled"

const ProjectPage = () => {
  const images = useStaticQuery(graphql`
    query {
      machadoalves: file(relativePath: { eq: "machadoalves.png" }) {
        ...extractFields
      }
      registerSwitch: file(relativePath: { eq: "register-switch.png" }) {
        ...extractFields
      }
      devflix: file(relativePath: { eq: "devflix.png" }) {
        ...extractFields
      }
      cssanimatic: file(relativePath: { eq: "cssanimatic.png" }) {
        ...extractFields
      }
      bomdia: file(relativePath: { eq: "bomdia.png" }) {
        ...extractFields
      }
      daisybell: file(relativePath: { eq: "daisybell.png" }) {
        ...extractFields
      }
      wolt: file(relativePath: { eq: "wolt.png" }) {
        ...extractFields
      }
      comicscreator: file(relativePath: { eq: "comicscreator.png" }) {
        ...extractFields
      }
      steamLibrary: file(relativePath: { eq: "steamLibrary.png" }) {
        ...extractFields
      }
      firemakebetter: file(relativePath: { eq: "firemakebetter.png" }) {
        ...extractFields
      }
    }

    fragment extractFields on File {
      childImageSharp {
        gatsbyImageData(
          height: 140
          placeholder: DOMINANT_COLOR
          formats: [AUTO, WEBP]
        )
      }
    }
  `)

  const getImage = (name) => images[name] || images.firemakebetter

  return (
    <Wrapper>
      <Header title={Strings.projects.title} left light />
      <List>
        {Strings.projects.list.map((project, index) => (
          <Project
            key={index}
            image={getImage(project.cover).childImageSharp.gatsbyImageData}
            {...project}
          />
        ))}
      </List>
      <OnePageList />
    </Wrapper>
  )
}

export default ProjectPage
