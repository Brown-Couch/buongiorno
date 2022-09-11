import HeaderCard from "../components/dashboard/HeaderCard"

export default function Summary() {
  return (
    <>
      <div className="dashboard-card header-cards">
        <HeaderCard
          position={1}
          callout={4}
          description="Sessions Left" />
        <HeaderCard
          position={2}
          callout={2}
          description="New messages" />
        <HeaderCard
          position={3}
          callout={15}
          description="Total sessions" />
      </div>
      <div className="dashboard-card">
        <p className="title">Today's classes</p>
        <ul className="upcoming-sessions">
          <li>
            <div className="session-details">
              <i className="fa-solid fa-chalkboard"></i>
              <span className="attendees">Sylvia Barreda</span>
              <span className="info">4:30 PM</span>
            </div>
            <div className="grade-details">
              <span className="grade-title">95/100</span>
              <span className="grade-number">Student Grade</span>
            </div>
            <div className="status-details">
              <span className="pill">Completed</span>
            </div>
          </li>
          <li>
            <i className="fa-solid fa-chalkboard"></i>
            <div className="session-details">
              <span className="attendees">Gerardo Galindez</span>
              <span className="info">5:30 PM</span>
            </div>
          </li>
          <li>
            <i className="fa-solid fa-chalkboard"></i>
            <div className="session-details">
              <span className="attendees">La Bais</span>
              <span className="info">6:30 PM</span>
            </div>
          </li>
        </ul>
      </div>
    </>
  )
}
