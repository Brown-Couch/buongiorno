import React, { useState, useEffect } from 'react'

interface Props {
  handler: any
}

export default function Password(props: Props) {
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')

  const handlePasswordChange = (event: React.FormEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value)
  }

  const handlePasswordConfirmationChange = (
    event: React.FormEvent<HTMLInputElement>
  ) => {
    setPasswordConfirmation(event.currentTarget.value)
  }

  const acceptPasswordIfMatching = () => {
    if (password === passwordConfirmation) props.handler(password)
  }

  useEffect(() => {
    acceptPasswordIfMatching()
  })

  return (
    <>
      <div className="control">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          placeholder="********"
          onChange={handlePasswordChange}
        />
      </div>
      <div className="control">
        <label htmlFor="passwordConfirmation">Password Confirmation</label>
        <input
          type="password"
          name="passwordConfirmation"
          placeholder="********"
          onChange={handlePasswordConfirmationChange}
        />
      </div>
    </>
  )
}
