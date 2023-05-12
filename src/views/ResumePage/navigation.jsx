import React from "react"

import {
    ResumeNavigation,
    ResumeSection,
} from "./styled"

const ResumePageNavigation = ({ language }) => (
    <ResumeNavigation>
        <ResumeSection>
            <h1>Johny W. Alves</h1>
            <label>{language.position}</label>
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

        <ResumeSection>
            <h2>{language.skills.title}</h2>
            <hr />
            <ul>
                {language.skills.list.map(({ type, list }, index) => (
                    <li key={index}>
                        <h3>{type}</h3>
                        <ul>
                            {list.map(({ title }) => (
                                <li key={title}>{title}</li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </ResumeSection>

        <ResumeSection>
            <h2>{language.languages.title}</h2>
            <hr />
            <ul>
                {language.languages.list.map(({ name, proficiency }, index) => (
                    <li key={index}>
                        <strong>{name}</strong> ({proficiency})
                    </li>
                ))}
            </ul>
        </ResumeSection>
    </ResumeNavigation>
)

export default ResumePageNavigation