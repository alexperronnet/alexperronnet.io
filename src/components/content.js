import React from "react"
import PropTypes from "prop-types"

const Content = ({ children }) => {
  return (
    <div className="border-l-4 border-red-500 pl-5">
      {children}
    </div>
  )
}

Content.propTypes = {
  children: PropTypes.node.isRequired
}

export default Content
