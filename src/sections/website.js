import React from "react"
import Gatsby from "../images/gatsby"
import Netlify from "../images/netlify"
import Copy from "../components/copy"
import ToTop from "../components/to-top"
import Content from "../components/content"

const Website = () => {
  return (
    <section
      className = "mb-16"
      id        = "website"
    >
      <h2 className="mb-16">
        This Website
      </h2>
      <div className="flex gap-4 overflow-x-auto mb-16">
        <img
          alt       = "Netlify Status"
          src       = "https://img.shields.io/netlify/e5073c18-184b-4be1-ae29-299b33725c9f?color=brghtgreen&style=flat-square"
        />
        <img
          alt       = "Last Commit"
          src       = "https://img.shields.io/github/last-commit/alexperronnet/alexperronnet.io?color=brightgreen&style=flat-square"
        />
        <img
          alt       = "Dependencies"
          src       = "https://img.shields.io/david/alexperronnet/alexperronnet.io?color=brightgreen&style=flat-square"
        />
        <img
          alt       = "Dev Dependencies"
          src       = "https://img.shields.io/david/dev/alexperronnet/alexperronnet.io?color=brightgreen&style=flat-square"
        />
        <img
          alt       = "Code Size"
          src       = "https://img.shields.io/github/languages/code-size/alexperronnet/alexperronnet.io?color=brightgreen&style=flat-square"
        />
        <img
          alt       = "License"
          src       = "https://img.shields.io/github/license/alexperronnet/alexperronnet.io?color=brightgreen&style=flat-square"
        />
      </div>
      <Content>
        This website is open source and under MIT license
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
      <ToTop />
      <div className="flex flex-col sm:flex-row text-center mt-10 pt-16 border-t-2">
        <div className="mx-auto">
          <p className="mb-5">
            Build with
          </p>
          <a
            href   = "https://www.gatsbyjs.org"
            target = "_blank"
            rel    = "noreferrer"
          >
            <Gatsby
              width     = "175px"
              className = "fill-current text-blue-500 opacity-50 hover:opacity-100"
            />
          </a>
        </div>
        <div className="mx-auto mt-10 sm:mt-0">
          <p className="mb-5">
            Deploys by
          </p>
          <a
            href   = "https://www.netlify.com"
            target = "_blank"
            rel    = "noreferrer"
          >
            <Netlify
              width     = "175px"
              className = "fill-current text-blue-500 opacity-50 hover:opacity-100"
            />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Website
