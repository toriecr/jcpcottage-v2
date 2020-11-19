import React from "react"
import { FaHandHoldingHeart, FaBed } from "react-icons/fa"
import { GiCctvCamera } from "react-icons/gi"
const services = [
  {
    id: 1, 
    icon: <FaHandHoldingHeart />,
    title: "24/7 Care and Supervision",
    description: "A caregiver is always on site 24 hours a day, 7 days a week."
  }, 
  {
    id: 2, 
    icon: <GiCctvCamera />,
    title: "Secured Facility",
    description: "This facility uses surveillance cameras to protect the safety of residents."
  }, 
  {
    id: 3, 
    icon: <FaBed />,
    title: "Six Private Bedrooms",
    description: "Our facility consists of six private bedrooms to ensure the privacy and comfort of our residents."
  }
]

export default services;