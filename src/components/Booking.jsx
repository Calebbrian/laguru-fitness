import { useState, useRef } from 'react'

export default function Booking({ onBookingSuccess }) {
  const formRef = useRef(null)
  const today = new Date().toISOString().split('T')[0]

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(formRef.current)
    const data = Object.fromEntries(formData)

    if (!data.firstName || !data.lastName || !data.email || !data.phone || !data.sessionType || !data.date || !data.time) {
      alert('Please fill in all required fields.')
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) {
      alert('Please enter a valid email address.')
      return
    }

    onBookingSuccess()
    formRef.current.reset()
    console.log('Booking submitted:', data)
  }

  return (
    <section className="booking section" id="booking">
      <div className="container">
        <div className="booking-wrapper">
          <div className="booking-info">
            <div className="section-label">
              <div className="label-line"></div>
              <span>Book Now</span>
            </div>
            <h2 className="section-title">Reserve Your <span className="accent">Session</span></h2>
            <p>Take the first step towards your fitness goals. Book a session with one of our expert trainers and experience the Laguru difference.</p>
            <div className="booking-benefits">
              <div className="benefit"><i className="fas fa-check-circle"></i><span>Free first consultation</span></div>
              <div className="benefit"><i className="fas fa-check-circle"></i><span>No commitment required</span></div>
              <div className="benefit"><i className="fas fa-check-circle"></i><span>Personalized fitness assessment</span></div>
              <div className="benefit"><i className="fas fa-check-circle"></i><span>Cancel or reschedule anytime</span></div>
            </div>
            <div className="booking-contact-info">
              <div className="contact-item"><i className="fas fa-phone"></i><span>+254 700 123 456</span></div>
              <div className="contact-item"><i className="fas fa-envelope"></i><span>bookings@lagurufitness.com</span></div>
            </div>
          </div>
          <div className="booking-form-container">
            <form className="booking-form" id="bookingForm" ref={formRef} onSubmit={handleSubmit}>
              <h3>Book Your Session</h3>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">First Name *</label>
                  <input type="text" id="firstName" name="firstName" required placeholder="John" />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name *</label>
                  <input type="text" id="lastName" name="lastName" required placeholder="Doe" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input type="email" id="email" name="email" required placeholder="john@example.com" />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input type="tel" id="phone" name="phone" required placeholder="+254 700 000 000" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="sessionType">Session Type *</label>
                  <select id="sessionType" name="sessionType" required defaultValue="">
                    <option value="" disabled>Select a session</option>
                    <option value="hiit">HIIT Training</option>
                    <option value="cardio">Power Cardio</option>
                    <option value="strength">Strength & Conditioning</option>
                    <option value="yoga">Power Yoga</option>
                    <option value="kickboxing">Kickboxing</option>
                    <option value="spin">Spin Class</option>
                    <option value="personal">Personal Training (1-on-1)</option>
                    <option value="assessment">Free Fitness Assessment</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="trainer">Preferred Trainer</label>
                  <select id="trainer" name="trainer" defaultValue="">
                    <option value="">Any available trainer</option>
                    <option value="marcus">Marcus Johnson</option>
                    <option value="sarah">Sarah Mitchell</option>
                    <option value="david">David Okafor</option>
                    <option value="lisa">Lisa Chen</option>
                  </select>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="date">Preferred Date *</label>
                  <input type="date" id="date" name="date" required min={today} />
                </div>
                <div className="form-group">
                  <label htmlFor="time">Preferred Time *</label>
                  <select id="time" name="time" required defaultValue="">
                    <option value="" disabled>Select time</option>
                    <option value="05:00">5:00 AM</option>
                    <option value="06:00">6:00 AM</option>
                    <option value="07:00">7:00 AM</option>
                    <option value="08:00">8:00 AM</option>
                    <option value="09:00">9:00 AM</option>
                    <option value="10:00">10:00 AM</option>
                    <option value="11:00">11:00 AM</option>
                    <option value="12:00">12:00 PM</option>
                    <option value="14:00">2:00 PM</option>
                    <option value="15:00">3:00 PM</option>
                    <option value="16:00">4:00 PM</option>
                    <option value="17:00">5:00 PM</option>
                    <option value="18:00">6:00 PM</option>
                    <option value="19:00">7:00 PM</option>
                    <option value="20:00">8:00 PM</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="message">Additional Notes</label>
                <textarea id="message" name="message" rows="3" placeholder="Any injuries, goals, or preferences we should know about?"></textarea>
              </div>
              <button type="submit" className="btn btn-primary full-width btn-submit">
                <span>Confirm Booking</span>
                <i className="fas fa-arrow-right"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
