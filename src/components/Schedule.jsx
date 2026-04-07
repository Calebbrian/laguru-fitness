import { useState } from 'react'

const scheduleData = {
  monday: [
    { time: '6:00 AM', class: 'HIIT Training', trainer: 'Marcus Johnson' },
    { time: '8:00 AM', class: 'Power Yoga', trainer: 'Sarah Mitchell' },
    { time: '10:00 AM', class: 'Spin Class', trainer: 'Lisa Chen' },
    { time: '12:00 PM', class: 'Strength & Conditioning', trainer: 'David Okafor' },
    { time: '5:00 PM', class: 'Kickboxing', trainer: 'David Okafor' },
    { time: '7:00 PM', class: 'Power Cardio', trainer: 'Marcus Johnson' },
  ],
  tuesday: [
    { time: '6:00 AM', class: 'Power Cardio', trainer: 'Lisa Chen' },
    { time: '8:00 AM', class: 'Strength & Conditioning', trainer: 'Marcus Johnson' },
    { time: '10:00 AM', class: 'Power Yoga', trainer: 'Sarah Mitchell' },
    { time: '3:00 PM', class: 'HIIT Training', trainer: 'Marcus Johnson' },
    { time: '5:00 PM', class: 'Spin Class', trainer: 'Lisa Chen' },
    { time: '7:00 PM', class: 'Kickboxing', trainer: 'David Okafor' },
  ],
  wednesday: [
    { time: '6:00 AM', class: 'HIIT Training', trainer: 'Marcus Johnson' },
    { time: '8:00 AM', class: 'Power Yoga', trainer: 'Sarah Mitchell' },
    { time: '11:00 AM', class: 'Spin Class', trainer: 'Lisa Chen' },
    { time: '2:00 PM', class: 'Power Cardio', trainer: 'Lisa Chen' },
    { time: '5:00 PM', class: 'Strength & Conditioning', trainer: 'David Okafor' },
    { time: '7:00 PM', class: 'Kickboxing', trainer: 'David Okafor' },
  ],
  thursday: [
    { time: '6:00 AM', class: 'Power Cardio', trainer: 'Marcus Johnson' },
    { time: '8:00 AM', class: 'Kickboxing', trainer: 'David Okafor' },
    { time: '10:00 AM', class: 'Power Yoga', trainer: 'Sarah Mitchell' },
    { time: '12:00 PM', class: 'HIIT Training', trainer: 'Marcus Johnson' },
    { time: '5:00 PM', class: 'Spin Class', trainer: 'Lisa Chen' },
    { time: '7:00 PM', class: 'Strength & Conditioning', trainer: 'David Okafor' },
  ],
  friday: [
    { time: '6:00 AM', class: 'HIIT Training', trainer: 'Marcus Johnson' },
    { time: '8:00 AM', class: 'Strength & Conditioning', trainer: 'David Okafor' },
    { time: '10:00 AM', class: 'Power Yoga', trainer: 'Sarah Mitchell' },
    { time: '3:00 PM', class: 'Kickboxing', trainer: 'David Okafor' },
    { time: '5:00 PM', class: 'Power Cardio', trainer: 'Lisa Chen' },
    { time: '7:00 PM', class: 'Spin Class', trainer: 'Lisa Chen' },
  ],
  saturday: [
    { time: '7:00 AM', class: 'HIIT Training', trainer: 'Marcus Johnson' },
    { time: '9:00 AM', class: 'Power Yoga', trainer: 'Sarah Mitchell' },
    { time: '11:00 AM', class: 'Kickboxing', trainer: 'David Okafor' },
    { time: '2:00 PM', class: 'Spin Class', trainer: 'Lisa Chen' },
    { time: '4:00 PM', class: 'Strength & Conditioning', trainer: 'Marcus Johnson' },
  ],
  sunday: [
    { time: '8:00 AM', class: 'Power Yoga', trainer: 'Sarah Mitchell' },
    { time: '10:00 AM', class: 'Power Cardio', trainer: 'Lisa Chen' },
    { time: '12:00 PM', class: 'HIIT Training', trainer: 'Marcus Johnson' },
    { time: '3:00 PM', class: 'Spin Class', trainer: 'Lisa Chen' },
  ],
}

const days = [
  { key: 'monday', label: 'Mon' },
  { key: 'tuesday', label: 'Tue' },
  { key: 'wednesday', label: 'Wed' },
  { key: 'thursday', label: 'Thu' },
  { key: 'friday', label: 'Fri' },
  { key: 'saturday', label: 'Sat' },
  { key: 'sunday', label: 'Sun' },
]

export default function Schedule() {
  const [activeDay, setActiveDay] = useState('monday')

  const handleBookClick = (e) => {
    e.preventDefault()
    const target = document.querySelector('#booking')
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="schedule section" id="schedule">
      <div className="container">
        <div className="section-header center">
          <div className="section-label center-label">
            <div className="label-line"></div>
            <span>Weekly Schedule</span>
            <div className="label-line"></div>
          </div>
          <h2 className="section-title">Class <span className="accent">Timetable</span></h2>
        </div>
        <div className="schedule-tabs">
          {days.map(day => (
            <button
              key={day.key}
              className={`schedule-tab${activeDay === day.key ? ' active' : ''}`}
              onClick={() => setActiveDay(day.key)}
            >
              {day.label}
            </button>
          ))}
        </div>
        <div className="schedule-content" id="scheduleContent">
          {(scheduleData[activeDay] || []).map((item, i) => (
            <div className="schedule-item fade-in visible" key={i}>
              <span className="schedule-time">{item.time}</span>
              <span className="schedule-class">{item.class}</span>
              <span className="schedule-trainer">
                <i className="fas fa-user" style={{ marginRight: '6px', fontSize: '0.75rem', color: 'var(--primary)' }}></i>
                {item.trainer}
              </span>
              <span className="schedule-book">
                <a href="#booking" onClick={handleBookClick}>Book &rarr;</a>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
