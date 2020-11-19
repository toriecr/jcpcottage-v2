import React from "react"
import Image from "./Image"

const Pictures = () => {
  return <section>
    <div className="test">
      <Image imgsrc="bedroom.jpg" />
    </div>
    <div className="test2">
      <Image imgsrc="backyard.jpg" />
    </div>
    <div className="test2">
      <Image imgsrc="livingroom.jpg" />
    </div>
  </section>
}

export default Pictures;