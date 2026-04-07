const trainersData = [
  {
    name: 'Marcus Johnson',
    role: 'Head Coach & HIIT Specialist',
    bio: '15+ years transforming bodies and minds. NASM & ACE certified.',
    gradient: 'linear-gradient(135deg, #1a1a2e, #e63946)',
    image: '/images/trainer-marcus.jpg',
  },
  {
    name: 'Sarah Mitchell',
    role: 'Yoga & Pilates Instructor',
    bio: 'Certified RYT-500 with a holistic approach to fitness and wellness.',
    gradient: 'linear-gradient(135deg, #1a1a2e, #2196F3)',
    image: '/images/trainer-sarah.jpg',
  },
  {
    name: 'David Okafor',
    role: 'Strength & Boxing Coach',
    bio: 'Former national athlete. Specializes in combat sports and powerlifting.',
    gradient: 'linear-gradient(135deg, #1a1a2e, #FF9800)',
    image: '/images/trainer-david.jpg',
  },
  {
    name: 'Lisa Chen',
    role: 'Nutrition & Cardio Expert',
    bio: 'Sports nutritionist who combines diet science with dynamic training.',
    gradient: 'linear-gradient(135deg, #1a1a2e, #9C27B0)',
    image: '/images/trainer-lisa.jpg',
  },
]

export default function Trainers() {
  return (
    <section className="trainers section" id="trainers">
      <div className="container">
        <div className="section-header center">
          <div className="section-label center-label">
            <div className="label-line"></div>
            <span>Expert Team</span>
            <div className="label-line"></div>
          </div>
          <h2 className="section-title">Meet Our <span className="accent">Trainers</span></h2>
          <p className="section-subtitle">Our certified professionals are dedicated to helping you reach your full potential.</p>
        </div>
        <div className="trainers-grid">
          {trainersData.map((trainer, i) => (
            <div className="trainer-card" key={i}>
              <div className="trainer-image">
                <img src={trainer.image} alt={trainer.name} className="trainer-photo" style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
                <div className="trainer-social">
                  <a href="#"><i className="fab fa-instagram"></i></a>
                  <a href="#"><i className="fab fa-twitter"></i></a>
                  <a href="#"><i className="fab fa-linkedin"></i></a>
                </div>
              </div>
              <div className="trainer-info">
                <h3>{trainer.name}</h3>
                <span className="trainer-role">{trainer.role}</span>
                <p>{trainer.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
