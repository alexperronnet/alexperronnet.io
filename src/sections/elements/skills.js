import React from "react"
import { skills } from "@content"
import { Tooltip } from "@components"

const Skills = () => {
  return (
    <section id="skills">
      <h2 className="mb-16">
        Skills
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center text-sm">
        {skills.map((x) => {
          return (
            <Tooltip
              key       = {x.title}
              title     = {x.topic}
              placement = "top"
              arrow
            >
              <div className="p-3 border-2 border-black hover:bg-blue-background hover:border-blue-foreground hover:text-blue-foreground cursor-not-allowed">
                {x.title}
              </div>
            </Tooltip>
          )
        })}
      </div>
      <div className="content-box mt-16">
        <h3 className="mb-5">
          Languages
        </h3>
        <p>
          I speak <b>Baguette</b> because it's my mother tongue (I come from New Caledonia), I also speak <b>English</b>, not perfectly but enough for work. I can say some love words in at least <b>10 different languages</b>, it's useless but it can help during a date...
        </p>
      </div>
    </section>
  )
}

export default Skills
