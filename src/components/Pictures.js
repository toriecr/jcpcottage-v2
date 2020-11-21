import React from "react"
import Image from "./Image"
import Title from "./Title"

const Pictures = () => {
  return <section>
    <Title title="Explore Our Facility" />
    <div className="pictures-container">
      <div className="pic1">
        <Image imgsrc="bedroom.jpg" />
      </div>
      <div className="pic2">
        <Image imgsrc="backyard.jpg" />
      </div>
      <div className="pic3">
        <Image imgsrc="livingroom.jpg" />
      </div>
    </div>
    <div className="pictures-button">
      <button>View more</button>
    </div>
  </section>
}

export default Pictures;