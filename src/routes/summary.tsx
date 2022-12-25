import HeaderCard from '../components/dashboard/HeaderCard'
import { getSummary } from '../api/summary'
import { useRecoilValue } from 'recoil'
import { jwtState } from '../atoms/auth'
import { useState } from 'react'

interface DashboardSummary {
  sessionsLeft: number
  newMessages: number
  totalSessions: number
}

export default function Summary() {
  const jwt = useRecoilValue(jwtState)
  const [summary, setSummary] = useState<DashboardSummary | null>(null)

  if (jwt && !summary) {
    getSummary(jwt)
      .then((data) => {
        setSummary(data)
      })
      .catch((error: any) => {
        console.error(error)
      })
  }

  return (
    <>
      <div className="dashboard-card header-cards">
        <HeaderCard
          position={1}
          callout={summary?.sessionsLeft}
          description="Sessions Left"
        />
        <HeaderCard
          position={2}
          callout={summary?.newMessages}
          description="New messages"
        />
        <HeaderCard
          position={3}
          callout={summary?.totalSessions}
          description="Total sessions"
        />
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
