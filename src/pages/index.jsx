import React from "react"
import Layout from "../components/layout"
import Gatsby from "../images/gatsby"
import Netlify from "../images/netlify"

const Home = () => {
  return (
    <Layout>
      <h1 className="text-5xl leading-tight font-bold my-16">
        Alex Perronnet
      </h1>
      <section className="text-lg border-l-4 border-teal-500 p-5">
        <p>
          Hello everyone, welcome to my <URL href="/" title="alexperronnet" target="_self">personnal website</URL>.
        </p>
        <p className="my-8">
          I'm Alex Perronnet, a french freelance <b>developer</b> and <b>designer</b>. I'm also an <b>open-source contributor</b> and a <b>content creator</b>.
        </p>
        <p>
          <b>Follw me everywhere:</b> @alexperronnet
        </p>
      </section>
      <h2 className="text-2xl font-bold my-12">
        Skills
      </h2>
      <section className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center text-sm">
        <div className="border-2 border-teal-500 p-3">HTML / CSS</div>
        <div className="border-2 border-teal-500 p-3">JavaScript</div>
        <div className="border-2 border-teal-500 p-3">React</div>
        <div className="border-2 border-teal-500 p-3">Angular</div>
        <div className="border-2 border-teal-500 p-3">Vue</div>
        <div className="border-2 border-teal-500 p-3">JAMstack</div>
        <div className="border-2 border-teal-500 p-3">PHP</div>
        <div className="border-2 border-teal-500 p-3">Ruby</div>
        <div className="border-2 border-teal-500 p-3">Rails</div>
        <div className="border-2 border-teal-500 p-3">NodeJS</div>
        <div className="border-2 border-teal-500 p-3">Figma</div>
        <div className="border-2 border-teal-500 p-3">Adobe</div>
      </section>
      <h2 className="text-2xl font-bold my-12">
        Contact
      </h2>
      <p className="text-lg border-l-4 border-teal-500 p-5 mb-12">
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
            <Gatsby width="175px" className="fill-current text-teal-500 hover:text-teal-700" />
          </URL>
        </div>
        <div className="mx-auto mt-10 sm:mt-0">
          <p className="mb-5">
            Deploys by
          </p>
          <URL href="https://www.netlify.com" title="Netlify website" target="_blank">
            <Netlify width="175px" className="fill-current text-teal-500 hover:text-teal-700" />
          </URL>
        </div>
      </section>
    </Layout>
  )
}

const URL = ({children, title, href, target}) => (
  <a
    className="text-teal-500 hover:underline"
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
    className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 border-b-4 border-teal-700 hover:border-teal-900"
    href={href}
    target={target}
    rel="noopener noreferrer"
    title={title}
  >
    {title}
  </a>
)

export default Home
