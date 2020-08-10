import React from "react"

const Alert = () => {
  return (
    <div
      className="bg-teal-900 py-4 text-white text-center border-b-4 border-teal-500 text-sm"
      role="alert"
    >
      <p>
        Black Lives Matter
      </p>
      <a
        className="text-teal-400 hover:underline"
        href="https://support.eji.org/give/153413/#!/donation/checkout"
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
