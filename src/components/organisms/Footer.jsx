import React from "react"

export default function Footer() {
  const user = "Iskandar45"
  const link = "http://github.com/iskandar45"

  return (
    <footer className="footer">
      <div className="footer-made">
        Made With{" "}
        <a href="http://react.dev" target="_blank" rel="noreferrer">
          React JS
        </a>
      </div>
      <div className="footer-copyright">
        &copy; {new Date().getFullYear()}{" "}
        <a href={link} target="_blank" rel="noreferrer">
          {user}
        </a>{" "}
        . All right reserved.
      </div>
      <div className="footer-built">
        Built with{" "}
        <a href="https://www.vercel.com" target="_blank" rel="noreferrer">
          Vercel
        </a>
      </div>
    </footer>
  )
}
