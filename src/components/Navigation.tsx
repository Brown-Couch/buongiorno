import { Link } from 'react-router-dom'
import './Navigation.css'

export default function Navigation() {
  return (
    <nav>
      <div className="main-links">
        <ul>
          <li>
            <i className="fa-solid fa-gauge-high"></i>
            <Link to="/dashboard/summary">Summary</Link>
          </li>
          <li>
            <i className="fa-solid fa-school"></i>
            <Link to="/dashboard/sessions">Sessions</Link>
          </li>
          <li>
            <i className="fa-solid fa-graduation-cap"></i>
            <Link to="/dashboard/students">Students</Link>
          </li>
          <li>
            <i className="fa-solid fa-message"></i>
            <Link to="/dashboard/messages">Messages</Link>
          </li>
          <li>
            <i className="fa-solid fa-money-bill-1-wave"></i>
            <Link to="/dashboard/payments">Payments</Link>
          </li>
          <li>
            <i className="fa-solid fa-gear"></i>
            <Link to="/dashboard/settings">Settings</Link>
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
