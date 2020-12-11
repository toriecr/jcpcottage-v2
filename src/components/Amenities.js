import React from "react"
import { Link } from "gatsby"
import Title from "./Title"
import amenities from "../constants/amenities"

const Amenities = () => {
  return <section
  style={{
    margin: `0 auto`,
    marginBottom: `2rem`,
    maxWidth: 1170,
    padding: `0 2rem 1.45rem`,
  }}>
    <Title title="Facility Amenities" />
    <div className="underline"></div>
    <div className="amenities-container">
      {amenities.map(amenity =>{
        const { id, icon, text } = amenity;
        return (
          <div key={id} className="amenity">
            <h3 style={{ display: `inline` }}>{icon}</h3>&nbsp;&nbsp;
            <p style={{ display: `inline` }}>{text}</p>
          </div>
        )
      })}
    </div>
    <div className="primary-button" style={{ marginTop: `4rem` }}>
      <Link to="/amenities">
        <button>View all amenities</button>
      </Link>
    </div>
  </section>
}

export default Amenities;