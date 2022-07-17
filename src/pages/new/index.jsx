import React from "react"

import Blueprint from "components/Blueprint"
import Seo from "components/seo"

import {
  Hero,
  About,
  Experience,
  Articles,
  Comics,
  Projects,
  Contact,
} from "components/Sections"

const Home = () => {
  return (
    <Blueprint>
      <Seo title="" />
      <Hero />
      <About />
      <Experience />
      <Articles />
      <Comics />
      <Projects />
      <Contact />
    </Blueprint>
  )
}

export default Home
