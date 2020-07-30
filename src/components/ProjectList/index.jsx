import React from "react"

import Strings from "components/strings"
import HomeCard from "components/HomeCard"
import HomeList from "components/HomeList"

const ProjectList = () => (
  <HomeList
    title={Strings.projects.title}
    description={Strings.projects.description}
  >
    {Strings.projects.list.map((project, index) => (
      <a key={index} href={project.view} target="_blank" rel="noreferrer">
        <HomeCard {...project} />
      </a>
    ))}
  </HomeList>
)

export default ProjectList
