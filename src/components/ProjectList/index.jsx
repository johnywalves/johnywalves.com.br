import React, { useState } from "react"
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

const ShowAll = styled.p`
  width: 100%;
  color: var(--highlight);
  text-align: center;
  cursor: pointer;
`

const ProjectList = () => {
  const [showAll, setShowAll] = useState(false)

  return (
    <>
      <HomeList
        title={Strings.projects.title}
        description={Strings.projects.description}
      >
        {Strings.projects.list
          .slice(0, showAll ? 12 : 3)
          .map((project, index) => (
            <HomeCard
              key={index}
              {...project}
              cover={
                project.cover && (
                  <a href={project.view} target="_blank" rel="noreferrer">
                    <ImageCover
                      src={project.cover}
                      style={{ objectPosition: project.coverPosition || "top" }}
                    />
                  </a>
                )
              }
            />
          ))}
      </HomeList>
      <ShowAll onClick={() => setShowAll(!showAll)}>
        Visualizar {showAll ? "somente destaques" : "todos"}
      </ShowAll>
    </>
  )
}

export default ProjectList
