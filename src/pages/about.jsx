import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { FileDownload } from "@styled-icons/fa-solid/FileDownload"

import Badge from "components/Badge"
import Strings from "components/strings"
import Layout from "components/Layout"
import Seo from "components/seo"
import Experience from "components/Experience"
import SocialLinks from "components/SocialLinks"

import * as S from "components/About/styled"

const FormatDate = (text) => {
  const date = new Date(text),
    month = (date.getMonth() + 1).toString().padStart(2, "0"),
    year = date.getFullYear()
  return `${month}/${year}`
}

const About = () => {
  const { avatarImage } = useStaticQuery(graphql`
    query {
      avatarImage: file(relativePath: { eq: "johnywalves.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 160
            height: 160
            layout: FIXED
            placeholder: TRACED_SVG
          )
        }
      }
    }
  `)

  const [openExperience, setOpenExperience] = useState(false)

  return (
    <Layout>
      <Seo title="Sobre" />
      <S.Forehead>
        <S.Avatar image={avatarImage.childImageSharp.gatsbyImageData} alt="" />
      </S.Forehead>
      <S.Content>
        <S.HeadSector>
          <h1>Johny W. Alves</h1>
          <h5>{Strings.description}</h5>
        </S.HeadSector>

        <S.Curriculium>
          <h2>{Strings.resume}</h2>
          <div>
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
          </div>
        </S.Curriculium>

        <S.HeadSector>
          <h2>{Strings.languages.title}</h2>
          <h5>{Strings.languages.description}</h5>
        </S.HeadSector>
        <S.Band>
          {Strings.languages.list.map((language, index) => (
            <Badge key={index} skill>
              {language.name} <span>({language.proficiency})</span>
            </Badge>
          ))}
        </S.Band>

        <S.HeadSector>
          <h2>{Strings.hardSkills.title}</h2>
          <h5>{Strings.hardSkills.description}</h5>
        </S.HeadSector>
        {Strings.hardSkills.list.map((group, index) => (
          <div key={index}>
            <h3>{group.type}</h3>
            <S.Band>
              {group.list.map((skill, idx) => (
                <Badge key={idx} skill>
                  {skill.title}
                </Badge>
              ))}
            </S.Band>
          </div>
        ))}

        <S.HeadSector>
          <h2>{Strings.softSkills.title}</h2>
          <h5>{Strings.softSkills.description}</h5>
        </S.HeadSector>
        <S.Band>
          {Strings.softSkills.list.map((skill, index) => (
            <Badge key={index} skill>
              {skill}
            </Badge>
          ))}
        </S.Band>

        <S.HeadSector>
          <h2>{Strings.experience.title}</h2>
          <h5>{Strings.experience.description}</h5>
        </S.HeadSector>
        <div>
          {Strings.experience.list.slice(0, 3).map((exp, index) => (
            <Experience key={index} job={true}  {...exp} />
          ))}
          {Strings.experience.list.length > 3 && (
            <>
              <S.FullHistory open={openExperience}>
                {Strings.experience.list.slice(3).map((exp, index) => (
                  <Experience key={index} job={true} {...exp} />
                ))}
              </S.FullHistory>
              <S.SeeMore onClick={() => setOpenExperience(!openExperience)}>
                {openExperience ? "Ocultar" : "Mostrar"} anteriores
              </S.SeeMore>
            </>
          )}
        </div>

        <S.HeadSector>
          <h2>{Strings.education.title}</h2>
          <h5>{Strings.education.description}</h5>
        </S.HeadSector>
        <div>
          {Strings.education.list.map((edu, index) => (
            <Experience key={index} {...edu} />
          ))}
        </div>

        <S.HeadSector>
          <h2>{Strings.courses.title}</h2>
          <h5>{Strings.courses.description}</h5>
        </S.HeadSector>
        <div>
          {Strings.certification.list
            .filter((cert) => ["chartpie", "tools"].includes(cert.icon))
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .map((cert, index) => (
              <Experience
                key={index}
                date={FormatDate(cert.date)}
                title={cert.name}
                institution={cert.institute}
              />
            ))}
        </div>
        <S.SeeCertificates
          to={"/certs"}
          cover
          direction="left"
          bg="var(--background)"
          duration={0.6}
        >
          Ver certificados
        </S.SeeCertificates>

        <S.HeadSector>
          <h2>{Strings.contact.title}</h2>
          <h5>{Strings.contact.description}</h5>
        </S.HeadSector>
        <SocialLinks about={true} />
      </S.Content>
    </Layout>
  )
}

export default About
