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
      <div className="table-view">
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>&nbsp;</td>
              <td>Pansi Wan Kenobi</td>
              <td>panzas@perrosbonitos.com</td>
              <td><a href="#">Edit</a></td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>Pans Vader</td>
              <td>vader@perrosbonitos.com</td>
              <td><a href="#">Edit</a></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
