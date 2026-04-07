export default function Modal({ active, onClose }) {
  return (
    <div
      className={`modal-overlay${active ? ' active' : ''}`}
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <div className="modal">
        <div className="modal-icon">
          <i className="fas fa-check-circle"></i>
        </div>
        <h3>Booking Confirmed!</h3>
        <p>Thank you for booking with Laguru Fitness Centre. We've sent a confirmation to your email. See you at the gym!</p>
        <button className="btn btn-primary" onClick={onClose}>Got It</button>
      </div>
    </div>
  )
}
