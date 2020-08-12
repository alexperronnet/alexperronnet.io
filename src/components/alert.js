import React from "react"

const Alert = () => {
  return (
    <div
      className="bg-blue-900 py-4 text-white text-center border-b-4 border-blue-500 text-sm"
      role="alert"
    >
      <p>
        Black Lives Matter
      </p>
      <a
        className="text-blue-400 hover:underline"
        href="https://eji.org"
        target="_blank"
        rel="noopener noreferrer"
        title="Support the Equal Justice Initiative"
      >
        Support the Equal Justice Initiative
      </a>
    </div>
  )
}

export default Alert
