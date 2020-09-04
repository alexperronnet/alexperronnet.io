import React from "react"
import Content from "../components/content"

const Languages = () => {
  return (
    <section
      className = "mb-16"
      id        = "languages"
    >
      <h2 className="mb-16">
        Languages
      </h2>
      <Content>
        I speak <b>French</b> because it's my mother tongue (I come from New Caledonia), I also speak <b>English</b>, not perfectly but enough for work. I can say "<i>you are beautiful</i>" in at least 10 different languages, it's useless but it can help during a date...
      </Content>
    </section>
  )
}

export default Languages
