import React from "react"

const Contact = () => {
  return <section className="contact">
    <form>
      <div className="form-inputs">
        <input type="text" name="name" placeholder="Name" className="input" />
        <input type="email" name="email" placeholder="Email" className="input"/>
        <textarea
          name="message"
          rows="5"
          placeholder="message"
          className="input"
        ></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  </section>
//   return <section className="contact-page">
//   <article className="contact-form">
//     <h3>get in touch</h3>
//     <form action="https://formspree.io/f/xbjpowrd" method="POST">
//       <div className="form-group">
//         <input type="text" name="name" placeholder="name" className="form-control" />
//         <input type="email" name="email" placeholder="email" className="form-control" />
//         <textarea 
//           name="message" 
//           rows="5"
//           placeholder="message"
//           className="form-control"
//           ></textarea>
//       </div>
//       <button type="submit" className="submit-btn btn">
//         submit here
//       </button>
//     </form>
//   </article>
// </section>
}

export default Contact;