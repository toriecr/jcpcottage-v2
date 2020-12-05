import React from "react"
import { FaUtensils, FaWalking, FaAirFreshener, FaUserNurse, FaCarSide, FaToilet } from "react-icons/fa"
import { GiBroom, GiScissors } from "react-icons/gi"

const amenities = [
  {
    id: 1, 
    icon: <FaUtensils className="amenities-icon" />,
    text: "Three delicious and balanced meals a day, with dietary needs considered."
  },
  {
    id: 2, 
    icon: <FaWalking className="amenities-icon" />,
    text: "Daily physical fitness activities and planned event coordination."
  },
  {
    id: 3,
    icon: <GiScissors className="amenities-icon" />,
    text: "Coordinated beautician appointments including haircuts, manicures, and pedicures."
  },
  {
    id: 4,
    icon: <FaAirFreshener className="amenities-icon" />,
    text: "Aromatherapy throughout the facility to promote mental alertness."
  },
  {
    id: 5,
    icon: <FaCarSide className="amenities-icon" />,
    text: "Coordinated transportation to attend medical appointments."
  },
  {
    id: 6,
    icon: <FaToilet className="amenities-icon" />,
    text: "Customized bathrooms tailored to seniors."
  },
  {
    id: 7, 
    icon: <GiBroom className="amenities-icon" />,
    text: "Daily Housekeeping."
  },
  {
    id: 8,
    icon: <FaUserNurse className="amenities-icon" />,
    text: "Trained staff 24/7."
  }
]

export default amenities;