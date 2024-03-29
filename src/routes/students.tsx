import './students.css'

import StudentRow from '../components/Students/StudentRow'
import Card from '../components/UI/Card'
import TableView from '../components/TableView'

export default function Students() {
  const students = [
    {
      id: 1,
      name: 'Pansi Wan Kenobi',
      email: 'panzas@perrosbonitos.com'
    },
    {
      id: 2,
      name: 'Pans Vader',
      email: 'vader@perrosbonitos.com'
    },
    {
      id: 3,
      name: 'Luke Panswalker',
      email: 'jedis@panswalker.dev'
    },
    {
      id: 4,
      name: 'Phansoka Tano',
      email: 'phansoka@tano.test'
    },
    {
      id: 5,
      name: 'Very Long Name Pans Pons Jin',
      email: 'pansponsjin@jedicouncil.com'
    }
  ]

  return (
    <Card title="Students" subtitle="30 students">
      <div className="search-box">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input type="text" placeholder="Search by name" />
      </div>
      <TableView
        headers={['Name', 'Email', 'Actions']}
        rows={students.map((student) => {
          return <StudentRow
            id={student.id}
            name={student.name}
            email={student.email}
          />
        })}
      />
    </Card>
  )
}
