import React from "react"
import social from "../data/social"
import Copy from "../components/copy"
import Content from "../components/content"
import CustomTooltip from "../components/tooltip"

const About = () => {
  return (
    <section
      className = "my-16"
      id        = "about"
    >
      <h1 className="mb-16">
        Alex Perronnet
      </h1>
      <Content>
        <p>
          Hello everyone, I am Alex Perronnet, a french freelance <b>developer</b> and <b>designer</b>. I am also an <b>open-source contributor</b> and a <b>content creator</b>
        </p>
        <p className="mt-10">
          <b>Fun fact:</b> one day my girlfriend left me, so i packed my bags and took the first plane to do over 14,000 miles but now i don't have enough money to go home LOL
        </p>
      </Content>
      <Content>
        <div className="mt-16">
          <Copy
            before      = "Follow me everywhere:"
            placeholder = "@alexperronnet"
            value       = "alexperronnet"
          />
        </div>
        <div className="flex overflow-auto gap-4 mt-5">
          {social.map((x) => {
            const Icon = x.icon

            return (
              <CustomTooltip
                key       = {x.title}
                title     = {x.title}
                placement = "bottom"
                arrow
              >
                <a
                  className = "p-2 bg-blue-500 opacity-50 hover:opacity-100 rounded-sm"
                  href      = {x.link}
                  target    = "_blank"
                  rel       = "noopener noreferrer"
                >
                  <Icon
                    className = "text-white"
                    size      = {15}
                  />
                </a>
              </CustomTooltip>
            )
          })}
        </div>
      </Content>
    </section>
  )
}

export default About
