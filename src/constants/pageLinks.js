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
    url: "/contact"
  }
]

const pageLinks = data.map(link => {
  return (
    <li key={link.id}>
      <Link to={link.url}>{link.text}</Link>
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