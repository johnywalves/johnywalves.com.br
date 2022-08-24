import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Strings from "components/strings"
import { Header } from "components/Cards"

import OnePageList from "./OnePageList"
import Project from "./Project"
import { List } from "./styled"

const ProjectPage = () => {
  const images = useStaticQuery(graphql`
    query {
      machadoalves: file(relativePath: { eq: "machadoalves.png" }) {
        ...extractFieldsPage
      }
      registerSwitch: file(relativePath: { eq: "register-switch.png" }) {
        ...extractFieldsPage
      }
      devflix: file(relativePath: { eq: "devflix.png" }) {
        ...extractFieldsPage
      }
      cssanimatic: file(relativePath: { eq: "cssanimatic.png" }) {
        ...extractFieldsPage
      }
      bomdia: file(relativePath: { eq: "bomdia.png" }) {
        ...extractFieldsPage
      }
      daisybell: file(relativePath: { eq: "daisybell.png" }) {
        ...extractFieldsPage
      }
      wolt: file(relativePath: { eq: "wolt.png" }) {
        ...extractFieldsPage
      }
      comicscreator: file(relativePath: { eq: "comicscreator.png" }) {
        ...extractFieldsPage
      }
      steamLibrary: file(relativePath: { eq: "steamLibrary.png" }) {
        ...extractFieldsPage
      }
      firemakebetter: file(relativePath: { eq: "firemakebetter.png" }) {
        ...extractFieldsPage
      }
    }

    fragment extractFieldsPage on File {
      childImageSharp {
        gatsbyImageData(
          width: 360
          height: 140
          placeholder: DOMINANT_COLOR
          formats: [AUTO, WEBP]
        )
      }
    }
  `)

  const getImage = (name) => images[name] || images.firemakebetter

  return (
    <>
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
    </>
  )
}

export default ProjectPage
