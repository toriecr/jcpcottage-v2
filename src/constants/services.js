import React from "react"
import { FaHandHoldingHeart, FaBed } from "react-icons/fa"
import { GiCctvCamera } from "react-icons/gi"
import { BsHouseDoorFill } from "react-icons/bs"
const services = [
  {
    id: 1, 
    icon: <FaHandHoldingHeart className="service-icon" />,
    title: "24/7 Care and Supervision"
  }, 
  {
    id: 2, 
    icon: <GiCctvCamera className="service-icon" />,
    title: "Secured Facility"
  }, 
  {
    id: 3, 
    icon: <FaBed className="service-icon" />,
    title: "Six Private Bedrooms"
  },
  {
    id: 4,
    icon: <BsHouseDoorFill className="service-icon" />,
    title: "Peaceful Neighborhood"
  }
]

export default services;