import React from "react"
import services from "../constants/services"

const Services = () => {
  return <section>
    <h1>What we offer</h1>
    <div className="services-container">
      {services.map(service => {
        const { id, icon, title } = service;
        return (
          <article key={id} className="service">
            <div className="service-children">
              <div className="service-icon-container">
                {icon}
              </div>
              <h4>{title}</h4>
            </div>
          </article>
        )
      })}
    </div>
  </section>
}

export default Services;