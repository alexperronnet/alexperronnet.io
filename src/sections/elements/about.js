import React from "react"
import { Copy, Tooltip } from "@components"
import { social } from "@content"

const About = () => {
  return (
    <section id="about">
      <h1 className="mb-16">
        Alex Perronnet
      </h1>
      <h2 className="mb-16 flex items-center">
        About
        <h3 className="ml-2">(He/Him)</h3>
      </h2>
      <div className="content-box">
        <p>
          Hello everyone, welcome to my personal website, I am Alex Perronnet, a french freelance <b>frontend developer</b> and <b>designer</b> junior. I am also an <b>open-source contributor</b> and a <b>content creator</b>.
        </p>
        <p className="mt-10">
          <b>Fun fact:</b> one day my girlfriend left me, so i packed my bags and took the first plane to do over 14,000 miles but now i don't have enough money to go home LOL.
        </p>
      </div>
      <div className="content-box mt-16">
        <Copy
          before      = "Follow me everywhere:"
          placeholder = "@alexperronnet"
          value       = "alexperronnet"
        />
        <div className="flex overflow-auto mt-5">
          {social.map((x) => {
            const Icon = x.icon

            return (
              <Tooltip
                key       = {x.title}
                title     = {x.title}
                placement = "bottom"
                arrow
              >
                <a
                  className = "p-2 bg-pink hover:bg-pink-foreground rounded-sm mr-4"
                  href      = {x.link}
                  target    = "_blank"
                  rel       = "noopener noreferrer"
                >
                  <Icon
                    className = "text-white"
                    size      = {15}
                  />
                </a>
              </Tooltip>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default About
