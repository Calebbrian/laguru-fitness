export default function Footer() {
  const handleSubmit = (e) => {
    e.preventDefault()
    const email = e.target.querySelector('input').value
    if (email) {
      alert("Thank you for subscribing! You'll receive our latest updates.")
      e.target.reset()
    }
  }

  const handleClick = (e, href) => {
    if (href === '#') return
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#" className="logo" onClick={(e) => handleClick(e, '#home')}>
              <i className="fas fa-dumbbell"></i>
              <span>LAGURU</span>
            </a>
            <p>Transform your body, transform your life. Laguru Fitness Centre is your partner in achieving peak physical and mental performance.</p>
            <div className="footer-social">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
          <div className="footer-links-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#about" onClick={(e) => handleClick(e, '#about')}>About Us</a></li>
              <li><a href="#classes" onClick={(e) => handleClick(e, '#classes')}>Our Classes</a></li>
              <li><a href="#trainers" onClick={(e) => handleClick(e, '#trainers')}>Trainers</a></li>
              <li><a href="#pricing" onClick={(e) => handleClick(e, '#pricing')}>Pricing</a></li>
              <li><a href="#booking" onClick={(e) => handleClick(e, '#booking')}>Book Session</a></li>
            </ul>
          </div>
          <div className="footer-links-section">
            <h4>Programs</h4>
            <ul className="footer-links">
              <li><a href="#">HIIT Training</a></li>
              <li><a href="#">Strength Training</a></li>
              <li><a href="#">Yoga & Pilates</a></li>
              <li><a href="#">Kickboxing</a></li>
              <li><a href="#">Personal Training</a></li>
            </ul>
          </div>
          <div className="footer-newsletter">
            <h4>Newsletter</h4>
            <p>Get fitness tips, class updates, and exclusive offers.</p>
            <form className="newsletter-form" onSubmit={handleSubmit}>
              <input type="email" placeholder="Your email address" required />
              <button type="submit"><i className="fas fa-paper-plane"></i></button>
            </form>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Laguru Fitness Centre. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
