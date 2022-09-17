interface Props {
  name: string
  label: string
  value: string
  handler: any
  placeholder: string
}

export default function InputText(props: Props) {
  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    props.handler(event.currentTarget.value)
  }

  return (
    <div className="control">
      <label htmlFor={props.name}>{props.label}</label>
      <input
        type="text"
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
        onChange={handleChange}
      />
    </div>
  )
}
