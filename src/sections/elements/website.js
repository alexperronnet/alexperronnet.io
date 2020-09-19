import React from "react"
import { Gatsby, Netlify } from "@images"
import { Copy, Tooltip, ToTop } from "@components"

const Website = () => {
  return (
    <section id="website">
      <h2 className="mb-16">
        This Website
      </h2>
      <div className="content-box">
        This website is fully <b>open source</b> and under MIT license. It was built with {gatsby} and deployed on {netlify}.
      </div>
      <div className="content-box mt-16">
        <h3 className="mb-5">
          Clone with HTTPS
        </h3>
        <Copy
          before      = "$"
          placeholder = "git clone https://github.com/alexperronnet/alexperronnet.io.git"
          value       = "git clone https://github.com/alexperronnet/alexperronnet.io.git"
        />
      </div>
      <ToTop />
      <div className="flex flex-col sm:flex-row text-center mt-16 pt-16 border-t-2 border-gray-background">
        <div className="mx-auto">
          <a
            href   = "https://www.gatsbyjs.org"
            target = "_blank"
            rel    = "noreferrer"
          >
            <p className="mb-5">
              Built with
            </p>
            <Gatsby
              width     = "175px"
              className = "fill-current text-pink-background hover:text-pink"
            />
          </a>
        </div>
        <div className="mx-auto mt-10 sm:mt-0">
          <a
            href   = "https://www.netlify.com"
            target = "_blank"
            rel    = "noreferrer"
          >
            <p className="mb-5">
              Deployed on
            </p>
            <Netlify
              width     = "175px"
              className = "fill-current text-pink-background hover:text-pink"
            />
          </a>
        </div>
      </div>
    </section>
  )
}

const gatsby = (
  <Tooltip
    title     = "Gatsby website"
    placement = "top"
    arrow
  >
    <a
      className = "highlight-link"
      href      = "https://gatsbyjs.com"
      target    = "_blank"
      rel       = "noopener noreferrer"
    >
      Gatsby
    </a>
  </Tooltip>
)

const netlify = (
  <Tooltip
    title     = "Netlify website"
    placement = "top"
    arrow
  >
    <a
      className = "highlight-link"
      href      = "https://netlify.com"
      target    = "_blank"
      rel       = "noopener noreferrer"
    >
      Netlify
    </a>
  </Tooltip>
)

export default Website
