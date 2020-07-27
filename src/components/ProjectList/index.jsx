import React from "react"

import Strings from "components/strings"
import HomeCard from "components/HomeCard"
import HomeList from "components/HomeList"

const ProjectList = () => (
  <HomeList
    title={Strings.projectsLabel}
    description={Strings.projectsSubLabel}
  >
    {Strings.projects.map((project, index) => (
      <HomeCard key={index} {...project} />
    ))}
  </HomeList>
)

export default ProjectList
