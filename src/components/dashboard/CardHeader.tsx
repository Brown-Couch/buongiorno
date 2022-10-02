interface Props {
  title: string
  subtitle: string
}

export default function CardHeader(props: Props) {
  const { title, subtitle } = props

  return (
    <div className="card-header">
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  )
}
