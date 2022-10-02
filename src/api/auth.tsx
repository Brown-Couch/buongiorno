export const authenticationLogin = async (email: string, password: string) => {
  const request = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      auth: {
        email: email,
        password: password,
      },
    }),
  }

  return fetch('http://localhost:3000/authentication/login', request).then(
    async (response) => {
      const payload = await response.json()

      if (!response.ok) return Promise.reject(payload.errors)

      return payload
    }
  )
}

export const fetchUser = async (jwt: string) => {
  const request = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${jwt}`,
    },
  }

  return fetch('http://localhost:3000/user', request).then(async (response) => {
    const payload = await response.json()

    if (!response.ok) return Promise.reject(payload.errors)

    return payload
  })
}
