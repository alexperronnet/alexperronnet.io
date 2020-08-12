import React from "react"

const Footer = () => {
  return (
    <footer
      className="text-sm flex flex-col sm:flex-row items-center justify-between py-6 border-t-4 border-blue-500"
      role="contentinfo"
    >
      <p>
        Made by <URL title="@alexperronnet" href="/" target="_self" />
      </p>
      <p className="mt-2 sm:m-0">
        Open-sourced on <URL title="Github" href="https://github.com/alexperronnet/alexperronnet.io" target="_blank" />
      </p>
    </footer>
  )
}

const URL = ({title, href, target}) => (
  <a
    className="text-blue-600 hover:underline"
    href={href}
    target={target}
    rel="noopener noreferrer"
    title={title}
  >
    {title}
  </a>
)

export default Footer
