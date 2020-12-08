import React from "react"
import Title from "./Title"
import AllCare from "../constants/allCare"
import { BiRightArrow } from "react-icons/bi"
import { MdLocalLaundryService } from "react-icons/md"
import { RiCommunityLine } from "react-icons/ri"
import { FaWifi, FaPhone } from "react-icons/fa"

const AllAmenities = () => {
  return <section className="all-amenities">
    <Title title="All Amenities and Services" />
    <div className="underline"></div>
    <h2>Care Services</h2>
    <div className="care-services">
      {AllCare.map(amenity =>{
        const { id, text } = amenity;
        return (
          <div key={id} className="care-service">
            <p>
              <BiRightArrow></BiRightArrow>
              {text}
            </p>
          </div>
        )
      })}
    </div>
    <h2>Non-Care Services</h2>
    <div className="non-care-services">
      <div className="non-care-service">
        <p>
          <MdLocalLaundryService></MdLocalLaundryService>
          Housekeeping and linen services
        </p>
      </div>
      <div className="non-care-service">
        <p>
          <RiCommunityLine></RiCommunityLine>
          Community-sponsored activities
        </p>
      </div>
    </div>
    <h2>Room Amenities</h2>
    <div className="room-amenities">
      <div className="room-amenity">
        <p>
          <FaPhone></FaPhone>
          Telephone
        </p>
      </div>
      <div className="room-amenity">
        <p>
          <FaWifi></FaWifi>
          Wifi 
        </p>
      </div>
    </div>
  </section>
}

export default AllAmenities;