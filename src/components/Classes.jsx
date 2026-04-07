const classesData = [
  {
    image: '/images/class-hiit.jpg',
    gradient: 'linear-gradient(135deg, #e63946, #ff6b35)',
    icon: 'fas fa-fire-flame-curved',
    category: 'High Intensity',
    name: 'HIIT Training',
    description: 'Explosive full-body workouts that torch calories and build lean muscle in record time.',
    duration: '45 min',
    level: 'Advanced',
  },
  {
    image: '/images/class-cardio.jpg',
    gradient: 'linear-gradient(135deg, #2196F3, #00BCD4)',
    icon: 'fas fa-person-running',
    category: 'Cardio',
    name: 'Power Cardio',
    description: 'Heart-pumping sessions designed to boost endurance and maximize fat burn.',
    duration: '50 min',
    level: 'All Levels',
  },
  {
    image: '/images/class-strength.jpg',
    gradient: 'linear-gradient(135deg, #9C27B0, #E040FB)',
    icon: 'fas fa-dumbbell',
    category: 'Strength',
    name: 'Strength & Conditioning',
    description: 'Build raw power and functional strength with progressive resistance training.',
    duration: '60 min',
    level: 'Intermediate',
  },
  {
    image: '/images/class-yoga.jpg',
    gradient: 'linear-gradient(135deg, #4CAF50, #8BC34A)',
    icon: 'fas fa-spa',
    category: 'Mind & Body',
    name: 'Power Yoga',
    description: 'Strengthen your body and calm your mind with flowing yoga sequences.',
    duration: '60 min',
    level: 'All Levels',
  },
  {
    image: '/images/class-kickboxing.jpg',
    gradient: 'linear-gradient(135deg, #FF9800, #FFC107)',
    icon: 'fas fa-hand-fist',
    category: 'Combat',
    name: 'Kickboxing',
    description: 'Unleash your inner fighter with high-energy kickboxing combinations.',
    duration: '45 min',
    level: 'Intermediate',
  },
  {
    image: '/images/class-spin.jpg',
    gradient: 'linear-gradient(135deg, #607D8B, #90A4AE)',
    icon: 'fas fa-bicycle',
    category: 'Endurance',
    name: 'Spin Class',
    description: 'Rhythm-driven cycling sessions with immersive lighting and music.',
    duration: '40 min',
    level: 'All Levels',
  },
]

export default function Classes() {
  const handleClick = (e) => {
    e.preventDefault()
    const target = document.querySelector('#booking')
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="classes section" id="classes">
      <div className="container">
        <div className="section-header center">
          <div className="section-label center-label">
            <div className="label-line"></div>
            <span>Our Programs</span>
            <div className="label-line"></div>
          </div>
          <h2 className="section-title">Explore Our <span className="accent">Classes</span></h2>
          <p className="section-subtitle">From high-intensity training to mindful yoga, find the perfect class to match your fitness journey.</p>
        </div>
        <div className="classes-grid">
          {classesData.map((cls, i) => (
            <div className="class-card" key={i}>
              <div className="class-image" style={{ background: cls.gradient }}>
                <img src={cls.image} alt={cls.name} style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }} />
                <i className={cls.icon} style={{ position: 'relative', zIndex: 1 }}></i>
              </div>
              <div className="class-overlay">
                <div className="class-info">
                  <span className="class-category">{cls.category}</span>
                  <h3>{cls.name}</h3>
                  <p>{cls.description}</p>
                  <div className="class-meta">
                    <span><i className="fas fa-clock"></i> {cls.duration}</span>
                    <span><i className="fas fa-bolt"></i> {cls.level}</span>
                  </div>
                  <a href="#booking" className="btn btn-small" onClick={handleClick}>Book Now</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
