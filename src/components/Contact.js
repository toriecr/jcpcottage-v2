import React from "react"

const Contact = () => {
  return <section>
    <form>
      <label htmlFor="nameInput">Name</label>
      <input type="text" name="name" placeholder="NAME" id="nameInput" required />
      <label htmlFor="emailInput">Email</label>
      <input type="email" name="email" placeholder="EMAIL" id="emailInput" required />
      <label htmlFor="message">Message</label>
      <textarea name="message" placeholder="MESSAGE" id="message" required></textarea>
      <button type="submit">Send</button>
    </form>
  </section>
}

export default Contact;