import React from "react"
import { Wrapper, Clock } from "@components"
import { About, Skills, Contact, Website } from "@sections"

const Home = () => {
  return (
    <Wrapper>
      <Clock />
      <About />
      <Skills />
      <Contact />
      <Website />
    </Wrapper>
  )
}

export default Home
