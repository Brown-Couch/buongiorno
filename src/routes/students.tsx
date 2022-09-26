import './students.css'

export default function Students() {
  return (
    <div className="dashboard-card">
      <div className="card-header">
        <h1>Users</h1>
        <p>30 users</p>
      </div>
      <div className="search-box">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input type="text" placeholder="Search by name" />
      </div>
    </div>
  )
}
