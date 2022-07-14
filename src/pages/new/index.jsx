import React from "react"

import Blueprint from "components/Blueprint"
import SectionAbout from "components/SectionAbout"
import SectionExperience from "components/SectionExperience"
import SectionArticles from "components/SectionArticles"
import SectionComics from "components/SectionComics"
import SectionHero from "components/SectionHero"
import SectionProjects from "components/SectionProjects"
import Seo from "components/seo"

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
    </Blueprint>
  )
}

export default New
