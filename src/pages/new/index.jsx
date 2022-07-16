import React from "react"

import Blueprint from "components/Blueprint"
import Seo from "components/seo"

import SectionHero from "components/SectionHero"
import SectionAbout from "components/SectionAbout"
import SectionExperience from "components/SectionExperience"
import SectionArticles from "components/SectionArticles"
import SectionComics from "components/SectionComics"
import SectionProjects from "components/SectionProjects"
import SectionContact from "components/SectionContact"

const New = () => {
  return (
    <Blueprint>
      <Seo title="" />
      <SectionHero />
      <SectionAbout />
      <SectionExperience />
      <SectionArticles />
      <SectionComics />
      <SectionProjects />
      <SectionContact />
    </Blueprint>
  )
}

export default New
