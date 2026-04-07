import { useState, useEffect } from 'react'

export default function Preloader() {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setHidden(true), 800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div id="preloader" className={hidden ? 'hidden' : ''}>
      <div className="loader">
        <div className="loader-ring"></div>
        <span className="loader-text">LAGURU</span>
      </div>
    </div>
  )
}
