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

export const Head = ({ location }) => <Seo location={location} title="" />
