interface Props {
  id: number
  name: string
  email: string
}

export default function StudentRow(props: Props) {
  const { id, name, email } = props
  return (
    <>
      <tr>
        <td>&nbsp;</td>
        <td>
          <i className="fa-solid fa-graduation-cap"></i>{name}
        </td>
        <td>{email}</td>
        <td>
          <a href={`/students/${id}/edit`}>Edit</a>
        </td>
      </tr>
    </>
  )
}
