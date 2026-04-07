import { useState, useEffect } from 'react'
import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Classes from './components/Classes'
import Schedule from './components/Schedule'
import Trainers from './components/Trainers'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import Booking from './components/Booking'
import CTA from './components/CTA'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Modal from './components/Modal'
import BackToTop from './components/BackToTop'

export default function App() {
  const [modalActive, setModalActive] = useState(false)

  // Scroll reveal animation
  useEffect(() => {
    const fadeElements = document.querySelectorAll(
      '.about-grid, .class-card, .trainer-card, .pricing-card, .testimonial-card, .contact-card, .booking-wrapper, .section-header'
    )
    fadeElements.forEach(el => el.classList.add('fade-in'))

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' })

    fadeElements.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Preloader />
      <Navbar />
      <Hero />
      <About />
      <Classes />
      <Schedule />
      <Trainers />
      <Pricing />
      <Testimonials />
      <Booking onBookingSuccess={() => setModalActive(true)} />
      <CTA />
      <Contact />
      <Footer />
      <Modal active={modalActive} onClose={() => setModalActive(false)} />
      <BackToTop />
    </>
  )
}
