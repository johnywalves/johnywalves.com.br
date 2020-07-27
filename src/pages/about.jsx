import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Strings from "components/strings"
import Layout from "components/Layout"
import SEO from "components/seo"

import { Content, Avatar } from "components/About/styled"

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
        <p>{Strings.description}</p>

        <h2>{Strings.languagesLabel}</h2>
        <p>{Strings.languagesSubLabel}</p>
        <ul>
          {Strings.languages.map((language, index) => (
            <li key={index}>{language.name}</li>
          ))}
        </ul>

        <h2>{Strings.skillsLabel}</h2>
        <p>{Strings.skillsSubLabel}</p>
        {Strings.skills.map((group, index) => (
          <div key={index}>
            <h3>{group.type}</h3>
            <ul>
              {group.list.map((skill) => (
                <li>{skill.title}</li>
              ))}
            </ul>
          </div>
        ))}

        <h2>{Strings.socialLabel}</h2>
        <p>{Strings.socialSubLabel}</p>
        <ul>
          {Strings.socialSkills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </Content>
    </Layout>
  )
}

export default About
