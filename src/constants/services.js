import React from "react"
import { FaHandHoldingHeart, FaBed, FaWheelchair } from "react-icons/fa"
import { GiCctvCamera } from "react-icons/gi"
const services = [
  {
    id: 1, 
    icon: <FaHandHoldingHeart className="service-icon" />,
    title: "24/7 Care",
    description: "Caregivers always on site, 24 hours a day, 7 days a week."
  }, 
  {
    id: 2, 
    icon: <GiCctvCamera className="service-icon" />,
    title: "Security",
    description: "CCTV is used for the safety of residents and staff."
  }, 
  {
    id: 3, 
    icon: <FaBed className="service-icon" />,
    title: "6 Bedrooms",
    description: "A small, intimate facility to feel like home."
  },
  {
    id: 4,
    icon: <FaWheelchair className="service-icon" />,
    title: "Personalization",
    description: "Customizable care plans to fit all needs."
  }
]

export default services;