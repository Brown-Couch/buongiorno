interface Props {
  headers: string[]
  rows: JSX.Element[]
}

export default function TableView(props: Props) {
  const { headers, rows } = props

  return (
    <>
      <div className="table-view">
        <table>
          <thead>
            <tr>
              <th></th>
              {headers.map(header => <th>{header}</th>)}
            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
        </table>
      </div>
    </>
  )
}
