import React from "react"
import PropTypes from "prop-types"
import { MdContentCopy } from "./icons"
import CustomTooltip from "./tooltip"

const Copy = ({ value, before, placeholder }) => {
  const handleClick = value => {
    const dummy = document.createElement("input")
    document.body.appendChild(dummy)
    dummy.setAttribute("value", value)
    dummy.select()
    document.execCommand("copy")
    document.body.removeChild(dummy)

    setOpen(true)
    setTimeout(() => setOpen(false), 1000)
  }

  const [open, setOpen] = React.useState(false)

  return (
    <div className="flex items-center">
      <CustomTooltip
        title     = "Copied to clipboard"
        placement = "top"
        open      = {open}
        arrow
      >
        <button
          className = "focus:outline-none bg-gray-200 p-2 mr-4"
          value     = {value}
          onClick   = {() => {
            handleClick(value)
          }}
        >
          <MdContentCopy
            className = "text-gray-600"
            size      = "20"
          />
        </button>
      </CustomTooltip>
      <div className="flex relative p-2 whitespace-pre overflow-x-auto bg-gray-200">
        <div className="select-all inline-block text-sm text-gray-600">
          <span className="select-none mr-1 font-bold">
            {before}
          </span>
          {placeholder}
        </div>
      </div>
    </div>
  )
}

Copy.propTypes = {
  value: PropTypes.node.isRequired,
  before: PropTypes.node.isRequired,
  placeholder: PropTypes.node.isRequired
}

export default Copy
