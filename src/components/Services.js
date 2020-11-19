import React from "react"
import services from "../constants/services"

const Services = () => {
  return <section className="services">
    <h1>What we offer</h1>
    <div>
      {services.map(service => {
        const { id, icon, title, description } = service;
        return (
          <article key={id}>
            {icon}
            <h4>{title}</h4>
            <p>{description}</p>
          </article>
        )
      })}
    </div>
  </section>
}

export default Services;