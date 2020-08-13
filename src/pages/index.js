import React from "react"
import Layout from "../components/layout"
import Gatsby from "../components/gatsby"
import Netlify from "../components/netlify"

const Home = () => {
  return (
    <Layout>
      <h1 className="text-5xl leading-tight font-bold my-16">
        Alex Perronnet
      </h1>
      <section className="text-lg border-l-4 border-blue-600 p-5">
        <p>
          Hello everyone, welcome to my <URL href="/" title="alexperronnet" target="_self">personnal website</URL>
        </p>
        <p className="my-8">
          I'm Alex Perronnet, a french freelance <b>developer</b> and <b>designer</b>. I'm also an <b>open-source contributor</b> and a <b>content creator</b>
        </p>
        <p>
          <b>Follw me everywhere:</b> @alexperronnet
        </p>
      </section>
      <h2 className="text-2xl font-bold my-12">
        Skills
      </h2>
      <section className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center text-sm">
        <Skills>HTML / CSS</Skills>
        <Skills>JavaScript</Skills>
        <Skills>React</Skills>
        <Skills>Angular</Skills>
        <Skills>Vue</Skills>
        <Skills>JAMstack</Skills>
        <Skills>PHP</Skills>
        <Skills>Ruby</Skills>
        <Skills>Rails</Skills>
        <Skills>NodeJS</Skills>
        <Skills>Figma</Skills>
        <Skills>Adobe</Skills>
      </section>
      <h2 className="text-2xl font-bold my-12">
        Contact
      </h2>
      <p className="text-lg border-l-4 border-blue-600 p-5 mb-12">
        I'm open to lots of new opportunities, freelance or a fulltime position. Feel free to contact me by email at <URL href="mailto:alex@alexperronnet.io" title="Send an email" target="_self">alex@alexperronnet.io</URL>
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center text-sm">
        <Btn title="Github" href="https://github.com/alexperronnet" target="_blank" />
        <Btn title="Behance" href="https://behance.net/alexperronnet" target="_blank" />
        <Btn title="Linkedin" href="https://linkedin.com/in/alexperronnet" target="_blank" />
      </div>
      <section className="flex flex-col sm:flex-row text-center my-20">
        <div className="mx-auto">
          <p className="mb-5">
            Build with
          </p>
          <URL href="https://www.gatsbyjs.org" title="Gatsby website" target="_blank">
            <Gatsby width="175px" className="fill-current text-blue-800 hover:text-blue-600" />
          </URL>
        </div>
        <div className="mx-auto mt-10 sm:mt-0">
          <p className="mb-5">
            Deploys by
          </p>
          <URL href="https://www.netlify.com" title="Netlify website" target="_blank">
            <Netlify width="175px" className="fill-current text-blue-800 hover:text-blue-600" />
          </URL>
        </div>
      </section>
    </Layout>
  )
}

const Skills = ({children}) => (
  <div className="border-2 border-blue-600 p-3 hover:bg-blue-900">{children}</div>
)

const URL = ({children, title, href, target}) => (
  <a
    className="text-blue-600 hover:underline"
    href={href}
    target={target}
    rel="noopener noreferrer"
    title={title}
  >
    {children}
  </a>
)

const Btn = ({title, href, target}) => (
  <a
    className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4"
    href={href}
    target={target}
    rel="noopener noreferrer"
    title={title}
  >
    {title}
  </a>
)

export default Home
