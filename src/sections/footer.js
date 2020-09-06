import React from "react"
import CustomTooltip from "../components/tooltip"
import { FiCode, FiGitBranch } from "../components/icons"

const Footer = () => {
  return (
    <footer
      className = "bg-gray-200 py-6 text-sm"
      id        = "footer"
      role      = "contentinfo"
    >
      <div className="container flex flex-col sm:flex-row items-center justify-between">
        <div>
          <CustomTooltip 
            title     = "alexperronnet.io"
            placement = "top"
            arrow
          >
            <a
              className = "text-gray-700 hover:text-black flex items-center"
              href      = "/"
            >
              <FiCode 
                className = "mr-2"
                size      = {15}
              />
              Made by @alexperronnet
            </a>
          </CustomTooltip>
        </div>
        <div className="mt-2 sm:m-0">
          <CustomTooltip 
            title     = "Under MIT"
            placement = "top"
            arrow
          >
            <a 
              className = "text-gray-700 hover:text-black flex items-center"
              href      = "https://github.com/alexperronnet/alexperronnet.io"
              target    = "_blank"
              rel       = "noopener noreferrer"
            >
              <FiGitBranch 
                className = "mr-2"
                size      = {15}
              />
              View the source on Github
            </a>
          </CustomTooltip>
        </div>
      </div>
    </footer>
  )
}

export default Footer
