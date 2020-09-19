import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { Tooltip } from "@components"
import { MdContentCopy, MdCheck } from "@components/elements/icons"

const Copy = ({ value, before, placeholder }) => {
  const handleClick = value => {
    const dummy = document.createElement("input")
    document.body.appendChild(dummy)
    dummy.setAttribute("value", value)
    dummy.select()
    document.execCommand("copy")
    document.body.removeChild(dummy)

  }

  const [isCopied, setCopied] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCopied(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [isCopied]);

  return (
    <div className="flex items-center">
      <Tooltip
        title     = "Copy to clipboard"
        placement = "top"
        arrow
      >
        <button
          className = "focus:outline-none bg-gray-background p-2 mr-4"
          value     = {value}
          onClick   = {() => {
            handleClick(value)
            setCopied(true)
          }}
        >
          {isCopied ? <CheckIcon /> : <CopyIcon />}
        </button>
      </Tooltip>
      <div className="flex relative p-2 whitespace-pre overflow-x-auto bg-gray-background">
        <div className="select-all inline-block text-sm text-gray-foreground">
          <span className="select-none mr-1 font-bold">
            {before}
          </span>
          {placeholder}
        </div>
      </div>
    </div>
  )
}

const CopyIcon = () => (
  <MdContentCopy
    className = "text-gray-foreground"
    size      = {20}
  />
)

const CheckIcon = () => (
  <MdCheck
    className = "text-pink"
    size      = {20}
  />
)

Copy.propTypes = {
  value      : PropTypes.node.isRequired,
  before     : PropTypes.node.isRequired,
  placeholder: PropTypes.node.isRequired
}

export default Copy
