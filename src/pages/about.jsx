import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Badge from "components/Badge"
import Strings from "components/strings"
import Layout from "components/Layout"
import SEO from "components/seo"

import { Content, Band, Avatar } from "components/About/styled"

const About = () => {
  const { avatarImage } = useStaticQuery(graphql`
    query {
      avatarImage: file(relativePath: { eq: "johnywalves.jpg" }) {
        childImageSharp {
          fixed(width: 160, height: 160) {
            ...GatsbyImageSharpFixed_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Sobre" />
      <Content>
        <Avatar fixed={avatarImage.childImageSharp.fixed} />
        <h1>Johny W. Alves</h1>
        <h5>{Strings.description}</h5>

        <h2>{Strings.languagesLabel}</h2>
        <h5>{Strings.languagesSubLabel}</h5>
        <Band>
          {Strings.languages.map((language, index) => (
            <Badge key={index}>{language.name}</Badge>
          ))}
        </Band>

        <h2>{Strings.skillsLabel}</h2>
        <h5>{Strings.skillsSubLabel}</h5>
        {Strings.skills.map((group, index) => (
          <div key={index}>
            <h3>{group.type}</h3>
            <Band>
              {group.list.map((skill, idx) => (
                <Badge key={idx}>{skill.title}</Badge>
              ))}
            </Band>
          </div>
        ))}

        <h2>{Strings.socialLabel}</h2>
        <h5>{Strings.socialSubLabel}</h5>
        <Band>
          {Strings.socialSkills.map((skill, index) => (
            <Badge key={index}>{skill}</Badge>
          ))}
        </Band>
      </Content>
    </Layout>
  )
}

export default About
