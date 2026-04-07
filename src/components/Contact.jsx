export default function Contact() {
  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info-section">
            <div className="section-label">
              <div className="label-line"></div>
              <span>Get In Touch</span>
            </div>
            <h2 className="section-title">Contact <span className="accent">Us</span></h2>
            <p>Have questions? We'd love to hear from you. Reach out through any channel below.</p>
            <div className="contact-cards">
              <div className="contact-card">
                <div className="contact-icon"><i className="fas fa-map-marker-alt"></i></div>
                <div>
                  <h4>Visit Us</h4>
                  <p>123 Fitness Avenue, Westlands<br />Nairobi, Kenya</p>
                </div>
              </div>
              <div className="contact-card">
                <div className="contact-icon"><i className="fas fa-phone-alt"></i></div>
                <div>
                  <h4>Call Us</h4>
                  <p>+254 700 123 456<br />+254 711 987 654</p>
                </div>
              </div>
              <div className="contact-card">
                <div className="contact-icon"><i className="fas fa-envelope"></i></div>
                <div>
                  <h4>Email Us</h4>
                  <p>info@lagurufitness.com<br />bookings@lagurufitness.com</p>
                </div>
              </div>
              <div className="contact-card">
                <div className="contact-icon"><i className="fas fa-clock"></i></div>
                <div>
                  <h4>Working Hours</h4>
                  <p>Mon - Fri: 5:00 AM - 11:00 PM<br />Sat - Sun: 6:00 AM - 9:00 PM</p>
                </div>
              </div>
            </div>
            <div className="social-links">
              <a href="#" className="social-link"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="social-link"><i className="fab fa-instagram"></i></a>
              <a href="#" className="social-link"><i className="fab fa-twitter"></i></a>
              <a href="#" className="social-link"><i className="fab fa-youtube"></i></a>
              <a href="#" className="social-link"><i className="fab fa-tiktok"></i></a>
            </div>
          </div>
          <div className="map-container">
            <div className="map-placeholder">
              <i className="fas fa-map-marked-alt"></i>
              <p>Interactive Map</p>
              <span>123 Fitness Avenue, Westlands, Nairobi</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
