import './HeaderCard.css'

interface Props {
  position: number;
  callout: number;
  description: string;
}

export default function HeaderCard(props: Props) {
  const {position, callout, description} = props

  return(
    <>
      <div className={`header-card card-${position}`}>
        <div className="callout">{callout}</div>
        <div className="description">{description}</div>
      </div>
    </>
  )
}
