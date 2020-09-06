import React from "react"
import Gatsby from "../images/gatsby"
import Netlify from "../images/netlify"
import Copy from "../components/copy"
import ToTop from "../components/to-top"
import Content from "../components/content"
import lighthouse from "../data/lighthouse"

const Website = () => {
  return (
    <section
      className = "mb-16"
      id        = "website"
    >
      <h2 className="mb-16">
        This Website
      </h2>
      <Content>
        This website is fully open source and under MIT license. It was built with Gatsby and deployed on Netlify.
      </Content>
      <Content>
        <div className="mt-16">
          <h3 className="mb-5">
            Clone with HTTPS
          </h3>
          <Copy
            before      = "$"
            placeholder = "git clone https://github.com/alexperronnet/alexperronnet.io.git"
            value       = "git clone https://github.com/alexperronnet/alexperronnet.io.git"
          />
        </div>
      </Content>
      <Content>
        <div className="mt-16">
          <h3 className="mb-5">
            Lighthouse <span className="lowercase">(for desktop device)</span>
          </h3>
          <div className="flex whitespace-pre overflow-x-auto mt-5">
            {lighthouse.map((x) => {
              return (
                <div
                  key       = {x.title}
                  className = "p-2 bg-green-200 text-green-800 flex mr-4 text-xs"
                >
                  <div className="font-bold mr-2">
                    {x.title}
                  </div>
                  <div>
                    {x.score}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </Content>
      <ToTop />
      <div className="flex flex-col sm:flex-row text-center mt-10 pt-16 border-t-2">
        <div className="mx-auto">
          <a
            href   = "https://www.gatsbyjs.org"
            target = "_blank"
            rel    = "noreferrer"
          >
            <p className="mb-5">
              Build with
            </p>
            <Gatsby
              width     = "175px"
              className = "fill-current text-red-700 opacity-50 hover:opacity-100"
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
              Deploys by
            </p>
            <Netlify
              width     = "175px"
              className = "fill-current text-red-700 opacity-50 hover:opacity-100"
            />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Website
