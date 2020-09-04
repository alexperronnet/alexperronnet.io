import React from "react"
import PropTypes from "prop-types"
import Metas from "./metas"
import Notice from "../sections/notice"
import Footer from "../sections/footer"

const Layout = ({ children }) => {
  return (
    <div className="wrapper">
      <Metas />
      <Notice />
      <main
        className = "container"
        id        = "main"
        role      = "main"
      >
        {children}
      </main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
