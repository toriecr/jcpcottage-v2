import React from "react"
import { FaHandHoldingHeart, FaBed } from "react-icons/fa"
import { GiCctvCamera } from "react-icons/gi"
import { BsHouseDoorFill } from "react-icons/bs"
const services = [
  {
    id: 1, 
    icon: <FaHandHoldingHeart className="service-icon" />,
    title: "24/7 Care",
    description: "A caregiver is always on site, 24 hours a day, 7 days a week."
  }, 
  {
    id: 2, 
    icon: <GiCctvCamera className="service-icon" />,
    title: "Secured Facility",
    description: "CCTV is used for the safety of residents."
  }, 
  {
    id: 3, 
    icon: <FaBed className="service-icon" />,
    title: "6 Bedrooms",
    description: "Private bedrooms to ensure the comfort of our residents."
  },
  // {
  //   id: 4,
  //   icon: <BsHouseDoorFill className="service-icon" />,
  //   title: "Community",
  //   description: "To feel more like home."
  // }
]

export default services;