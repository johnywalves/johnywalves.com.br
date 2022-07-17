import React from "react"

import Strings from "components/strings"
import SocialLinks from "components/SocialLinks"

import { Wrapper } from "./styled"

const SectionContact = () => {
  return (
    <Wrapper>
      <h2>{Strings.contact.title}</h2>
      <SocialLinks about />
    </Wrapper>
  )
}

export default SectionContact
