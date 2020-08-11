import React from "react"
import Metas from "./metas"
import Alert from "./alert"
import Footer from "./footer"
import "../styles/index.scss"
import "typeface-roboto"

const Layout = ({children}) => {
  return (
    <div className="wrapper">
      <Metas />
      <Alert />
      <div className="max-w-4xl mx-auto">
        <div className="mx-8">
          <main role="main">
            {children}
          </main>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Layout
