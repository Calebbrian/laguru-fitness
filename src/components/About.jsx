export default function About() {
  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-images">
            <div className="about-img-main">
              <img src="/images/about-main.jpg" alt="State-of-the-Art Facility" style={{ width: '100%', height: '450px', objectFit: 'cover', borderRadius: 'var(--radius)' }} />
            </div>
            <div className="about-img-secondary">
              <img src="/images/about-community.jpg" alt="Community" style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: 'var(--radius)' }} />
            </div>
            <div className="experience-badge">
              <span className="exp-number">12+</span>
              <span className="exp-text">Years of Excellence</span>
            </div>
          </div>
          <div className="about-content">
            <div className="section-label">
              <div className="label-line"></div>
              <span>About Us</span>
            </div>
            <h2 className="section-title">We Are <span className="accent">Laguru</span> Fitness Centre</h2>
            <p className="about-text">At Laguru Fitness Centre, we believe fitness is more than exercise -- it's a lifestyle. Our world-class facility combines cutting-edge equipment, expert guidance, and an electrifying community atmosphere to help you achieve results you never thought possible.</p>
            <p className="about-text">Whether you're a beginner taking your first step or an athlete pushing for peak performance, our certified trainers craft personalized programs designed for YOUR goals.</p>
            <div className="about-features">
              <div className="feature">
                <div className="feature-icon"><i className="fas fa-medal"></i></div>
                <div>
                  <h4>Certified Trainers</h4>
                  <p>Internationally accredited fitness professionals</p>
                </div>
              </div>
              <div className="feature">
                <div className="feature-icon"><i className="fas fa-heartbeat"></i></div>
                <div>
                  <h4>Personalized Plans</h4>
                  <p>Custom programs tailored to your unique goals</p>
                </div>
              </div>
              <div className="feature">
                <div className="feature-icon"><i className="fas fa-clock"></i></div>
                <div>
                  <h4>Flexible Hours</h4>
                  <p>Open 5 AM - 11 PM, 7 days a week</p>
                </div>
              </div>
              <div className="feature">
                <div className="feature-icon"><i className="fas fa-spa"></i></div>
                <div>
                  <h4>Recovery Zone</h4>
                  <p>Sauna, steam room & massage therapy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
