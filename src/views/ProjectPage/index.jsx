import React, { useState, useMemo } from "react"
import { Parallax } from "react-scroll-parallax"
import { useStaticQuery, graphql } from "gatsby"

import Strings from "components/strings"

import TriangleNeon from "assets/vectors/TriangleNeon"

import ProjectCard from "./ProjectCard"
import Hero from "./Hero"
import Button from "components/Button"
import {
  PageWrapper,
  ContainerProject,
  BoxSide,
  BoxTop,
  ListOther,
  FilterContainer,
} from "./styled"

const ProjectPage = () => {
  const images = useStaticQuery(graphql`
    query {
      tcgrp: file(relativePath: { eq: "tcgrp.jpg" }) {
        ...extractFieldsPage
      }
      gigas: file(relativePath: { eq: "gigas.jpg" }) {
        ...extractFieldsPage
      }
      arquivosdaordem: file(relativePath: { eq: "arquivosdaordem.jpg" }) {
        ...extractFieldsPage
      }
      usepython: file(relativePath: { eq: "usepython.jpg" }) {
        ...extractFieldsPage
      }
      machadoalves: file(relativePath: { eq: "machadoalves.jpg" }) {
        ...extractFieldsPage
      }
      registerSwitch: file(relativePath: { eq: "register-switch.png" }) {
        ...extractFieldsPage
      }
      devflix: file(relativePath: { eq: "devflix.jpg" }) {
        ...extractFieldsPage
      }
      cssanimatic: file(relativePath: { eq: "cssanimatic.png" }) {
        ...extractFieldsPage
      }
      boilerplate: file(relativePath: { eq: "boilerplate.png" }) {
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
      thumbnail: file(relativePath: { eq: "thumbnail.png" }) {
        ...extractFieldsPage
      }
      firemakebetter: file(relativePath: { eq: "firemakebetter.png" }) {
        ...extractFieldsPage
      }
    }

    fragment extractFieldsPage on File {
      childImageSharp {
        gatsbyImageData(
          width: 328
          layout: CONSTRAINED
          placeholder: DOMINANT_COLOR
          formats: [AUTO, WEBP]
        )
      }
    }
  `)
  const getImage = (name) => images[name] || images.firemakebetter

  const [activeFilter, setActiveFilter] = useState(null)

  const topTechs = ["Next.js", "Eleventy", "Jekyll"]

  const handleFilterClick = (filter) => {
    setActiveFilter(activeFilter === filter ? null : filter)
  }

  const displayedProjects = useMemo(() => {
    if (activeFilter === "Outdated") {
      return Strings.projects.outdated || []
    }
    if (activeFilter) {
      return Strings.projects.list.filter((p) => {
        if (!p.stack) return false
        const normalizedStack = p.stack.map((s) =>
          s === "React.js" ? "React" : s
        )
        return normalizedStack.includes(activeFilter)
      })
    }
    return Strings.projects.list
  }, [activeFilter])

  return (
    <PageWrapper>
      <Hero />

      <ContainerProject>
        <BoxTop>
          <Parallax translateY={[-30, 50]}>
            <TriangleNeon height="400" width="400" />
          </Parallax>
          <Parallax translateY={[-150, 200]}>
            <TriangleNeon height="250" width="250" />
          </Parallax>
        </BoxTop>

        <FilterContainer>
          {topTechs.map((tech) => (
            <Button
              key={tech}
              selected={activeFilter === tech}
              onClick={() => handleFilterClick(tech)}
              light
            >
              {tech}
            </Button>
          ))}
          <Button
            selected={activeFilter === "Outdated"}
            onClick={() => handleFilterClick("Outdated")}
            light
          >
            Outdated
          </Button>
        </FilterContainer>

        <ListOther>
          {displayedProjects.map((project) => (
            <ProjectCard
              key={project.name}
              {...project}
              image={getImage(project.image).childImageSharp?.gatsbyImageData}
            />
          ))}
        </ListOther>
      </ContainerProject>

      <BoxSide>
        <Parallax translateY={[0, 300]}>
          <TriangleNeon />
        </Parallax>
      </BoxSide>
    </PageWrapper>
  )
}

export default ProjectPage
