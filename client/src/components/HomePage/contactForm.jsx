import React from 'react'

const contactForm = () => {
  return (
    <div className='email-card'>
      <div className='email-form'>
        <input type='text' className='contact-input' name="name" placeholder="Name"/>
        <input type='text' className='contact-input' name="email" placeholder="e-mail"/>
        <input type='text' className='contact-input' name="phone" placeholder="Phone"/>
      </div>
    </div>
  )
}

export default contactForm
