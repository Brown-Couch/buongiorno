import { apiUrl } from './constants'

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

  return fetch(`${apiUrl}/authentication/login`, request).then(
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

  return fetch(`${apiUrl}/user`, request).then(async (response) => {
    const payload = await response.json()

    if (!response.ok) return Promise.reject(payload.errors)

    return payload
  })
}
