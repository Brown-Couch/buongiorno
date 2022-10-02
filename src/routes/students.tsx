import './students.css'

import CardHeader from '../components/dashboard/CardHeader'

export default function Students() {
  return (
    <div className="dashboard-card">
      <CardHeader title="Students" subtitle="30 students" />
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
              <td>
                <i className="fa-solid fa-graduation-cap"></i>Pansi Wan Kenobi
              </td>
              <td>panzas@perrosbonitos.com</td>
              <td>
                <a href="/students/edit">Edit</a>
              </td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>
                <i className="fa-solid fa-graduation-cap"></i>Pans Vader
              </td>
              <td>vader@perrosbonitos.com</td>
              <td>
                <a href="/students/edit">Edit</a>
              </td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>
                <i className="fa-solid fa-graduation-cap"></i>Luke Panswalker
              </td>
              <td>jedis@panswalker.dev</td>
              <td>
                <a href="/students/edit">Edit</a>
              </td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>
                <i className="fa-solid fa-graduation-cap"></i>Phansoka Tano
              </td>
              <td>phansoka@tano.test</td>
              <td>
                <a href="/students/edit">Edit</a>
              </td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>
                <i className="fa-solid fa-graduation-cap"></i>Very Long Name
                Pans Pons Jin
              </td>
              <td>pansponsjin@jedicouncil.com</td>
              <td>
                <a href="/students/edit">Edit</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
