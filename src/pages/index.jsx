import React from "react"
import { ParallaxProvider } from "react-scroll-parallax"

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
} from "views/Sections"

const Home = () => {
  return (
    <ParallaxProvider>
      <Blueprint>
        <Hero />
        <About />
        <Experience />
        <Articles />
        <Comics />
        <Projects />
        <Contact />
      </Blueprint>
    </ParallaxProvider>
  )
}

export default Home

export const Head = ({ location }) => <Seo location={location} title="" />
