import { useEffect, useRef, useState } from 'react'

export default function Hero() {
  const particlesRef = useRef(null)
  const statsRef = useRef(null)
  const [countersStarted, setCountersStarted] = useState(false)

  useEffect(() => {
    // Create particles
    const container = particlesRef.current
    for (let i = 0; i < 30; i++) {
      const particle = document.createElement('div')
      particle.classList.add('particle')
      particle.style.left = Math.random() * 100 + '%'
      particle.style.animationDuration = (Math.random() * 10 + 8) + 's'
      particle.style.animationDelay = Math.random() * 10 + 's'
      particle.style.width = (Math.random() * 4 + 2) + 'px'
      particle.style.height = particle.style.width
      container.appendChild(particle)
    }
  }, [])

  useEffect(() => {
    const statsEl = statsRef.current
    if (!statsEl) return

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !countersStarted) {
          setCountersStarted(true)
          const counters = statsEl.querySelectorAll('.stat-number')
          counters.forEach(counter => {
            const target = +counter.getAttribute('data-target')
            const duration = 2000
            const startTime = performance.now()

            function update(currentTime) {
              const elapsed = currentTime - startTime
              const progress = Math.min(elapsed / duration, 1)
              const eased = 1 - Math.pow(1 - progress, 3)
              counter.textContent = Math.floor(eased * target)
              if (progress < 1) {
                requestAnimationFrame(update)
              } else {
                counter.textContent = target
              }
            }
            requestAnimationFrame(update)
          })
        }
      })
    }, { threshold: 0.3 })

    observer.observe(statsEl)
    return () => observer.disconnect()
  }, [countersStarted])

  const handleClick = (e, href) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero" id="home">
      <div className="hero-overlay"></div>
      <div className="hero-particles" id="particles" ref={particlesRef}></div>
      <div className="hero-content">
        <div className="hero-badge">
          <i className="fas fa-fire"></i>
          <span>No. 1 Fitness Centre</span>
        </div>
        <h1>
          <span className="hero-line">TRANSFORM</span>
          <span className="hero-line accent">YOUR BODY</span>
          <span className="hero-line">TRANSFORM YOUR <span className="accent">LIFE</span></span>
        </h1>
        <p className="hero-subtitle">Push beyond limits. Build strength. Achieve greatness. Join Laguru Fitness Centre and unleash the champion within you.</p>
        <div className="hero-buttons">
          <a href="#booking" className="btn btn-primary" onClick={(e) => handleClick(e, '#booking')}>
            <span>Book a Session</span>
            <i className="fas fa-arrow-right"></i>
          </a>
          <a href="#about" className="btn btn-outline" onClick={(e) => handleClick(e, '#about')}>
            <span>Explore More</span>
          </a>
        </div>
        <div className="hero-stats" ref={statsRef}>
          <div className="stat">
            <span className="stat-number" data-target="5000">0</span><span className="stat-suffix">+</span>
            <span className="stat-label">Active Members</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat">
            <span className="stat-number" data-target="25">0</span><span className="stat-suffix">+</span>
            <span className="stat-label">Expert Trainers</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat">
            <span className="stat-number" data-target="50">0</span><span className="stat-suffix">+</span>
            <span className="stat-label">Weekly Classes</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat">
            <span className="stat-number" data-target="12">0</span>
            <span className="stat-label">Years Experience</span>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <span>Scroll Down</span>
        <div className="scroll-arrow"></div>
      </div>
    </section>
  )
}
