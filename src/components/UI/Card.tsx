interface Props {
  title: string
  subtitle: string
  children?: JSX.Element|JSX.Element[]
}

export default function Card(props: Props) {
  const { title, subtitle, children } = props
  return (
    <div className="dashboard-card">
      <div className="card-header">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
      {children}
    </div>
  )
}
