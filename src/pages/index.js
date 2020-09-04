import React from "react"
import Layout from "../components/layout"
import About from "../sections/about"
import Skills from "../sections/skills"
import Languages from "../sections/languages"
import Contact from "../sections/contact"
import Website from "../sections/website"

import Clock from "../components/clock"

const Home = () => {
  return (
    <Layout>
      <Clock />
      <About />
      <Skills />
      <Languages />
      <Contact />
      <Website />
    </Layout>
  )
}

export default Home
