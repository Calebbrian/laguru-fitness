import { useState, useEffect, useCallback } from 'react'

const testimonials = [
  {
    text: '"Laguru completely changed my life. I lost 30kg in 8 months with their personalized training program. The trainers genuinely care about your progress."',
    name: 'James Mwangi',
    since: 'Member since 2022',
    color: '#e63946',
    initial: 'J',
  },
  {
    text: '"The HIIT classes are absolutely incredible. The energy, the music, the coaching -- everything is top-notch. Best gym I\'ve ever been to, hands down."',
    name: 'Amina Osei',
    since: 'Member since 2023',
    color: '#2196F3',
    initial: 'A',
  },
  {
    text: '"As a busy professional, the flexible hours and online booking make it so easy to stay consistent. The recovery zone after a hard session is pure bliss."',
    name: 'Robert Kamau',
    since: 'Member since 2021',
    color: '#4CAF50',
    initial: 'R',
  },
  {
    text: '"I was intimidated at first, but the Laguru community welcomed me with open arms. The trainers made sure I felt comfortable and confident from day one."',
    name: 'Faith Njeri',
    since: 'Member since 2024',
    color: '#FF9800',
    initial: 'F',
  },
]

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [slidesVisible, setSlidesVisible] = useState(3)

  const updateSlidesVisible = useCallback(() => {
    if (window.innerWidth < 768) setSlidesVisible(1)
    else if (window.innerWidth < 1024) setSlidesVisible(2)
    else setSlidesVisible(3)
  }, [])

  useEffect(() => {
    updateSlidesVisible()
    window.addEventListener('resize', updateSlidesVisible)
    return () => window.removeEventListener('resize', updateSlidesVisible)
  }, [updateSlidesVisible])

  const totalSlides = Math.max(testimonials.length - slidesVisible + 1, 1)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % totalSlides)
    }, 5000)
    return () => clearInterval(interval)
  }, [totalSlides])

  const goToSlide = (index) => {
    setCurrentSlide(Math.max(0, Math.min(index, totalSlides - 1)))
  }

  const percentage = (currentSlide * 100) / testimonials.length

  return (
    <section className="testimonials section" id="testimonials">
      <div className="container">
        <div className="section-header center">
          <div className="section-label center-label">
            <div className="label-line"></div>
            <span>Success Stories</span>
            <div className="label-line"></div>
          </div>
          <h2 className="section-title">What Our <span className="accent">Members</span> Say</h2>
        </div>
        <div className="testimonials-slider" id="testimonialSlider">
          <div
            className="testimonial-track"
            style={{ transform: `translateX(-${percentage}%)` }}
          >
            {testimonials.map((t, i) => (
              <div className="testimonial-card" key={i}>
                <div className="testimonial-stars">
                  {[...Array(5)].map((_, j) => (
                    <i className="fas fa-star" key={j}></i>
                  ))}
                </div>
                <p>{t.text}</p>
                <div className="testimonial-author">
                  <div className="author-avatar" style={{ background: t.color }}>{t.initial}</div>
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.since}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="slider-controls">
            <button className="slider-btn prev" onClick={() => goToSlide(currentSlide - 1)}>
              <i className="fas fa-chevron-left"></i>
            </button>
            <div className="slider-dots">
              {[...Array(totalSlides)].map((_, i) => (
                <div
                  key={i}
                  className={`slider-dot${i === currentSlide ? ' active' : ''}`}
                  onClick={() => goToSlide(i)}
                ></div>
              ))}
            </div>
            <button className="slider-btn next" onClick={() => goToSlide(currentSlide + 1)}>
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
