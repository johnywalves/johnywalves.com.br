import React from "react"

import {
  ResumeWrapper,
  ResumeNavigation,
  ResumeContent,
  ResumeSection,
} from "../ResumePage/styled"

const CoverLetterPage = ({ language }) => {
  return (
    <ResumeWrapper>
      <ResumeNavigation>
        <ResumeSection>
          <img src="/figures/johnywalves.png" alt="" />
          <h1>Johny W. Alves</h1>
          <label>{language.position}</label>
        </ResumeSection>

        <ResumeSection>
          <h2>{language.languages.title}</h2>
          <hr />
          <ul>
            {language.languages.list.map(({ name, proficiency }) => (
              <li>
                <strong>{name}</strong> ({proficiency})
              </li>
            ))}
          </ul>
        </ResumeSection>

        <ResumeSection>
          <h2>{language.contact.title}</h2>
          <hr />
          <ul>
            <li>
              <strong>contato</strong>@johnywalves.com.br
            </li>
            <li>
              <strong>www</strong>.johnywalves.com.br
            </li>
            <li>
              <strong>github</strong>.com/johnywalves
            </li>
            <li>
              <strong>linkedin</strong>.com/in/johnywalves
            </li>
          </ul>
        </ResumeSection>
      </ResumeNavigation>
      <ResumeContent>
        <ResumeSection>
          <p className="cover">Prezado(a) contratante,</p>
          <p className="cover">Gostaria de me apresentar como um desenvolvedor frontend sênior com mais de 15 anos de experiência na criação de interfaces de usuário e utilização de diversas tecnologias. Estou atualmente buscando uma nova alocação e adoraria trabalhar com uma equipe de pessoas engajadas e colaborativas.</p>
          <p className="cover">Ao longo de minha carreira, tenho tido a oportunidade de trabalhar com uma ampla variedade de tecnologias, incluindo HTML, CSS, JavaScript, React, Next.js e muitas outras. Isso me permitiu desenvolver uma compreensão profunda das melhores práticas de desenvolvimento frontend, bem como a capacidade de aprender novas tecnologias rapidamente.</p>
          <p className="cover">Uma das coisas que mais me motiva como desenvolvedor é produzir conhecimento e compartilhar o que aprendi com colegas de equipe e a comunidade em geral. Acredito firmemente que o compartilhamento de conhecimento é essencial para um ambiente de trabalho saudável e colaborativo.</p>
          <p className="cover">Se você estiver procurando por um desenvolvedor frontend sênior com uma paixão por aprender, crescer e trabalhar em equipe, eu seria um ótimo candidato para sua empresa. Agradeço antecipadamente a oportunidade de discutir mais sobre como posso contribuir para o sucesso da sua empresa.</p>
          <p className="cover">Atenciosamente,</p>
          <p className="cover">Johny W. Alves</p>
        </ResumeSection>
      </ResumeContent>
    </ResumeWrapper>
  )
}

export default CoverLetterPage
