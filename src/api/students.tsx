import { apiUrl } from './constants'

export const studentsIndex = async (jwt: string) => {
  const request = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${jwt}`,
    },
  }

  return fetch(`${apiUrl}/students`, request).then(async (response) => {
    const payload = await response.json()

    if (!response.ok) return Promise.reject(payload.errors)

    return payload
  })
}
