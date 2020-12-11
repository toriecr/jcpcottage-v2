import React from "react"
import { FaFacebookSquare } from "react-icons/fa"
const data = [
  {
    id: 1,
    icon: <FaFacebookSquare className="social-icon"></FaFacebookSquare>,
    url: "https://www.facebook.com/pages/category/Retirement---Assisted-Living-Facility/JCP-Senior-Care-LLC-410260369313127/",
  }
]
const links = data.map(link => {
  return (
    <li 
      key={link.id}
      style={{
        listStyle: `none`,
        textAlign: `center`
      }}
    >
      <a 
        href={link.url} 
        className="social-link"
        style={{
          color: `blue`,
          textDecoration: `none`,
          fontSize: `xxx-large`
        }}
      >
        {link.icon}
      </a>
    </li>
  )
})
export default ({ styleClass }) => {
  return (
    <ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
  )
}