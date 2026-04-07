const plans = [
  {
    name: 'Starter',
    price: '29',
    featured: false,
    features: [
      { text: 'Access to gym floor', enabled: true },
      { text: '2 group classes/week', enabled: true },
      { text: 'Locker room access', enabled: true },
      { text: 'Free fitness assessment', enabled: true },
      { text: 'Personal training', enabled: false },
      { text: 'Recovery zone access', enabled: false },
      { text: 'Nutrition consultation', enabled: false },
    ],
  },
  {
    name: 'Pro',
    price: '59',
    featured: true,
    features: [
      { text: 'Full gym access', enabled: true },
      { text: 'Unlimited group classes', enabled: true },
      { text: 'Locker room & towel service', enabled: true },
      { text: '2 PT sessions/month', enabled: true },
      { text: 'Recovery zone access', enabled: true },
      { text: 'Nutrition consultation', enabled: true },
      { text: 'VIP priority booking', enabled: false },
    ],
  },
  {
    name: 'Elite',
    price: '99',
    featured: false,
    features: [
      { text: '24/7 unlimited access', enabled: true },
      { text: 'All classes & workshops', enabled: true },
      { text: 'Premium locker & amenities', enabled: true },
      { text: '8 PT sessions/month', enabled: true },
      { text: 'Full recovery zone & sauna', enabled: true },
      { text: 'Monthly nutrition plans', enabled: true },
      { text: 'VIP priority booking', enabled: true },
    ],
  },
]

export default function Pricing() {
  const handleClick = (e) => {
    e.preventDefault()
    const target = document.querySelector('#booking')
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="pricing section" id="pricing">
      <div className="container">
        <div className="section-header center">
          <div className="section-label center-label">
            <div className="label-line"></div>
            <span>Membership Plans</span>
            <div className="label-line"></div>
          </div>
          <h2 className="section-title">Choose Your <span className="accent">Plan</span></h2>
          <p className="section-subtitle">Flexible membership options to fit your goals and budget.</p>
        </div>
        <div className="pricing-grid">
          {plans.map((plan, i) => (
            <div className={`pricing-card${plan.featured ? ' featured' : ''}`} key={i}>
              {plan.featured && <div className="popular-badge">Most Popular</div>}
              <div className="pricing-header">
                <span className="plan-name">{plan.name}</span>
                <div className="plan-price">
                  <span className="currency">$</span>
                  <span className="amount">{plan.price}</span>
                  <span className="period">/month</span>
                </div>
              </div>
              <ul className="plan-features">
                {plan.features.map((f, j) => (
                  <li key={j} className={f.enabled ? '' : 'disabled'}>
                    <i className={`fas fa-${f.enabled ? 'check' : 'times'}`}></i> {f.text}
                  </li>
                ))}
              </ul>
              <a
                href="#booking"
                className={`btn ${plan.featured ? 'btn-primary' : 'btn-outline'} full-width`}
                onClick={handleClick}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
