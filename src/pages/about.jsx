import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { FileDownload } from "@styled-icons/fa-solid/FileDownload"

import Badge from "components/Badge"
import Strings from "components/strings"
import Layout from "components/Layout"
import SEO from "components/seo"
import Experience from "components/Experience"

import * as S from "components/About/styled"

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
      <S.Forehead>
        <S.Avatar fixed={avatarImage.childImageSharp.fixed} />
      </S.Forehead>
      <S.Content>
        <h1>Johny W. Alves</h1>
        <h5>{Strings.description}</h5>

        <S.Curriculium>
          {Strings.files.map((file, index) => (
            <a
              key={index}
              href={file.file}
              target="_blank"
              rel="noreferrer noopener"
            >
              <FileDownload />
              <p>{file.name}</p>
            </a>
          ))}
        </S.Curriculium>

        <h2>{Strings.languages.title}</h2>
        <h5>{Strings.languages.description}</h5>
        <S.Band>
          {Strings.languages.list.map((language, index) => (
            <Badge key={index}>{language.name}</Badge>
          ))}
        </S.Band>

        <h2>{Strings.hardSkills.title}</h2>
        <h5>{Strings.hardSkills.description}</h5>
        {Strings.hardSkills.list.map((group, index) => (
          <div key={index}>
            <h3>{group.type}</h3>
            <S.Band>
              {group.list.map((skill, idx) => (
                <Badge key={idx}>{skill.title}</Badge>
              ))}
            </S.Band>
          </div>
        ))}

        <h2>{Strings.experience.title}</h2>
        <h5>{Strings.experience.description}</h5>
        {Strings.experience.list.slice(0, 3).map((exp, index) => (
          <Experience key={index} {...exp} />
        ))}

        <h2>{Strings.education.title}</h2>
        <h5>{Strings.education.description}</h5>
        {Strings.education.list.map((edu, index) => (
          <Experience key={index} {...edu} />
        ))}
      </S.Content>
    </Layout>
  )
}

export default About
