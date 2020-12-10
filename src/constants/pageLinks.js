import React from "react"
import { Link } from "gatsby"
const data = [
  {
    id: 1, 
    text: "HOME",
    url: "/"
  }, 
  {
    id: 2, 
    text: "PICTURES",
    url: "/pictures"
  }, 
  {
    id: 3,
    text: "AMENITIES",
    url: "/amenities"
  },
  {
    id: 4,
    text: "CONTACT",
    url: "/#contact"
  }
]

const pageLinks = data.map(link => {
  return (
    <li 
      key={link.id}
      style={{
        listStyle: `none`
      }}
    >
      <Link 
        to={link.url}
        style={{
          display: `block`,
          textAlign: `center`,
          textTransform: `capitalize`,
          color: `black`,
          letterSpacing: `0.2rem`,
          marginBottom: `2rem`,
          fontSize: `2rem`,
          textDecoration: `none`
        }}
      >{link.text}</Link>
    </li>
  )
});

export default ({ styleClass }) => {
  return (
    <ul className={`${styleClass ? styleClass : ""}`}>
      {pageLinks}
    </ul>
  )
}