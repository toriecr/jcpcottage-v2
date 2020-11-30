import React from "react"
import Title from "./Title"
import amenities from "../constants/amenities"

const Amenities = () => {
  return <section
  style={{
    margin: `0 auto`,
    maxWidth: 1170,
    padding: `0 1.0875rem 1.45rem`,
  }}>
    <Title title="Facility Amenities" />
    <div className="underline"></div>
    <div className="amenities-container">
      <ul
      style={{
        listStyleType: `none`,
      }}>
        {amenities.map(amenity =>{
          const { id, icon, text } = amenity;
          return (
            <li key={id}>
              <span>{icon} {text}</span>
            </li>
          )
        })}
      </ul>
    </div>

  </section>
}

export default Amenities;