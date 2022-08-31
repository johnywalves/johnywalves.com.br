import React from "react"
import { Parallax } from "react-scroll-parallax"
import { useStaticQuery, graphql } from "gatsby"

import Strings from "components/strings"
import { Header } from "components/Cards"

import OnePage from "./OnePage"
import Highlight from "./Highlight"
import Project from "./Project"
import Other from "./Other"
import Hero from "./Hero"
import {
  PageWrapper,
  BoxTop,
  BoxSide,
  BoxRight,
  Container,
  ContainerProject,
  List,
  ListOther,
  ListOnePage,
} from "./styled"

import TriangleNeon from "../../vectors/TriangleNeon"

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
          height: 160
          placeholder: DOMINANT_COLOR
          formats: [AUTO, WEBP]
        )
      }
    }
  `)
  const getImage = (name) => images[name] || images.firemakebetter

  return (
    <PageWrapper>
      <Hero />

      <Container>
        <BoxTop>
          <Parallax translateY={[-30, 50]}>
            <TriangleNeon height="400" width="400" />
          </Parallax>
          <Parallax translateY={[-150, 200]}>
            <TriangleNeon height="250" width="250" />
          </Parallax>
        </BoxTop>

        {Strings.projects.list.slice(0, 1).map((project, index) => (
          <Highlight key={index} {...project} />
        ))}
      </Container>

      <ContainerProject>
        <Header title={"Top projects"} />
        <List>
          {Strings.projects.list.slice(1, 4).map((project, index) => (
            <Project
              key={index}
              image={getImage(project.cover).childImageSharp.gatsbyImageData}
              {...project}
            />
          ))}
        </List>

        <BoxRight>
          <Parallax translateY={[50, 200]}>
            <TriangleNeon />
          </Parallax>
        </BoxRight>
      </ContainerProject>

      <Container>
        {Strings.projects.list.slice(4, 5).map((project, index) => (
          <Highlight key={index} revert {...project} />
        ))}
      </Container>

      <ContainerProject>
        <Header title={"Others projects"} />
        <ListOther>
          {Strings.projects.list.slice(5).map((project, index) => (
            <Other key={index} {...project} />
          ))}
        </ListOther>
      </ContainerProject>

      <Container>
        <Header title={"One page projects"} dark />
        <ListOnePage>
          {Strings.samples.list.map((props, index) => (
            <OnePage key={index} {...props} />
          ))}
        </ListOnePage>
      </Container>

      <BoxSide>
        <Parallax translateY={[0, 300]}>
          <TriangleNeon />
        </Parallax>
      </BoxSide>
    </PageWrapper>
  )
}

export default ProjectPage