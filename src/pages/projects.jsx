import React from "react"
import { graphql } from "gatsby"

import ProjectPage from "components/ProjectPage"
import Blueprint from "components/Blueprint"
import Seo from "components/seo"

const title = "Projetos e Desenvolvimento",
  description = "Apresentação de projetos desenvolvidos ou em desenvolvimento"

const Projects = ({ data }) => {
  return (
    <Blueprint
      content
      openGraphImage={data.thumbnail}
      title={title}
      description={description}
    >
      <ProjectPage />
    </Blueprint>
  )
}

export const query = graphql`
  query ProjectPages {
    thumbnail: file(relativePath: { eq: "thumbnail_project.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 900
          aspectRatio: 1.5
          layout: FIXED
          placeholder: NONE
          formats: [JPG]
        )
      }
    }
  }
`

export default Projects

export const Head = ({ location, data }) => (
  <Seo
    location={location}
    title={title}
    description={description}
    image={
      data.thumbnail?.childImageSharp?.gatsbyImageData?.images?.fallback.src
    }
    imagenWidth={data.thumbnail?.childImageSharp?.gatsbyImageData?.width}
    imageHeight={data.thumbnail?.childImageSharp?.gatsbyImageData?.height}
  />
)
