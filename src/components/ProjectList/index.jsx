import React from "react"
import styled from "styled-components"

import Strings from "components/strings"
import HomeCard from "components/HomeCard"
import HomeList from "components/HomeList"

const ImageCover = styled.img`
  height: 8rem;
  width: 100%;
  object-fit: cover;
  object-position: top;
`

const ProjectList = () => (
  <HomeList
    title={Strings.projects.title}
    description={Strings.projects.description}
  >
    {Strings.projects.list.map((project, index) => (
      <HomeCard
        key={index}
        {...project}
        cover={
          <a href={project.view} target="_blank" rel="noreferrer">
            <ImageCover
              src={project.cover}
              style={{ objectPosition: project.coverPosition || "top" }}
            />
          </a>
        }
      />
    ))}
  </HomeList>
)

export default ProjectList
