export default function Navigation() {
  return (
    <nav>
      <div className="main-links">
        <ul>
          <li>
            <i className="fa-solid fa-gauge-high"></i>
            <span>Dashboard</span>
          </li>
          <li>
            <i className="fa-solid fa-school"></i>
            <span>Sessions</span>
          </li>
          <li>
            <i className="fa-solid fa-graduation-cap"></i>
            <span>Students</span>
          </li>
          <li>
            <i className="fa-solid fa-message"></i>
            <span>Messages</span>
          </li>
          <li>
            <i className="fa-solid fa-money-bill-1-wave"></i>
            <span>Payments</span>
          </li>
          <li>
            <i className="fa-solid fa-gear"></i>
            <span>Settings</span>
          </li>
        </ul>
      </div>
      <hr />
      <div className="quick-actions">
        <ul>
          <li>
            <i className="fa-solid fa-bolt"></i>
            <span>Add a Student</span>
          </li>
          <li>
            <i className="fa-solid fa-bolt"></i>
            <span>Reschedule a Class</span>
          </li>
          <li>
            <i className="fa-solid fa-bolt"></i>
            <span>Leave Feedback</span>
          </li>
        </ul>
      </div>
    </nav>
  )
}
