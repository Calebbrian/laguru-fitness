export default function CTA() {
  const handleClick = (e) => {
    e.preventDefault()
    const target = document.querySelector('#booking')
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-content">
          <h2>Ready to Start Your <span className="accent">Transformation?</span></h2>
          <p>Join thousands of members who chose to invest in themselves. Your first session is on us.</p>
          <div className="cta-buttons">
            <a href="#booking" className="btn btn-primary btn-large" onClick={handleClick}>
              <span>Claim Free Session</span>
              <i className="fas fa-arrow-right"></i>
            </a>
            <a href="tel:+254700123456" className="btn btn-outline btn-large">
              <i className="fas fa-phone"></i>
              <span>Call Us Now</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
