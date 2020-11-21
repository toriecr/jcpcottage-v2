import React from "react"
import Title from "./Title"
import amenities from "../constants/amenities"

const Amenities = () => {
  return <section>
    <Title title="Facility Amenities" />
    <div className="amenities-container">
      <ul>
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