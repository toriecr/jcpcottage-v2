import React from "react"
import { Link } from "gatsby"
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
            <h3 style={{ display: `inline` }}><BiRightArrow></BiRightArrow></h3>&nbsp;&nbsp;
            <p style={{ display: `inline` }}>{text}</p>
          </div>
        )
      })}
    </div>
    <h2>Non-Care Services</h2>
    <div className="care-services">
      <div className="non-care-service">
        <h3 style={{ display: `inline` }}><MdLocalLaundryService></MdLocalLaundryService></h3>&nbsp;&nbsp;
        <p style={{ display: `inline` }}>Housekeeping and linen services</p>
      </div>
      <div className="non-care-service">
        <h3 style={{ display: `inline` }}><RiCommunityLine></RiCommunityLine></h3>&nbsp;&nbsp;
        <p style={{ display: `inline` }}>Community-sponsored activities</p>
      </div>
    </div>
    <h2>Room Amenities</h2>
    <div className="care-services">
      <div className="room-amenity">
        <h3 style={{ display: `inline` }}><FaPhone></FaPhone></h3>&nbsp;&nbsp;
        <p style={{ display: `inline` }}>Telephone</p>
      </div>
      <div className="room-amenity">
        <h3 style={{ display: `inline` }}><FaWifi></FaWifi></h3>&nbsp;&nbsp;
        <p style={{ display: `inline` }}>Wifi</p>
      </div>
    </div>
    <div className="pictures-button" 
      style={{
        marginTop: `5rem`
      }}>
      <Link to="/">
        <button>Back to home</button>
      </Link>
    </div>
  </section>
}
export default AllAmenities;