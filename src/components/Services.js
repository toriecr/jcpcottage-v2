import React from "react"
import services from "../constants/services"
import Title from "./Title"

const Services = () => {
  return <section>
    <Title title="What we offer" />
    <div className="services-container">
      {services.map(service => {
        const { id, icon, title, description } = service;
        return (
          <article key={id} className="service">
            <div className="service-children">
              <div className="service-icon-container">
                {icon}
              </div>
              <h4>{title}</h4>
              <p>{description}</p>
            </div>
          </article>
        )
      })}
    </div>
  </section>
}

export default Services;