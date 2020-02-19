import React from "react"

import {
  FaGithub as Github,
  FaLinkedinIn as Linkedin,
  FaEnvelope as Mail,
} from "react-icons/fa"

export default function info() {
  return (
    <div className="container">
      <div className="my-5"></div>
      <div className="display-3" style={{ color: "#FF8A00" }}>
        <span style={{ color: "white" }}>Hello, I'm</span> <br />
        Joanna.
      </div>
      <div className="h1 code mt-4 mb-3">async {"{"}</div>
      <div className="text-muted mx-5 my-4 h3 text-justify info">
        A Passionate Front-end Developer, UI/UX Enthusiast and Web Developer.
        <br /> Love to learn about the latest technologies and learn how to
        develop my skills.
      </div>
      <div className="h1 code mt-2 mb-3">{"}"}</div>
      <div className="h1 mt-5">
        <a
          className="mr-5 icon"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/Joanna-Chadzynska"
        >
          <Github />
        </a>
        <a
          className="mr-5 icon"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/joanna-chądzyńska"
        >
          <Linkedin />
        </a>
        <a
          className="mr-5 icon"
          target="_blank"
          rel="noopener noreferrer"
          href="mailto://joanna.chadzynska87@gmail.com"
        >
          <Mail />
        </a>
      </div>
    </div>
  )
}
