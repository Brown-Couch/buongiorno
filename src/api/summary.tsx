export const getSummary = async (jwt: string) => {
  const request = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${jwt}`,
    },
  }

  return fetch('http://localhost:3000/dashboard/summary', request).then(
    async (response) => {
      const payload = await response.json()

      if (!response.ok) return Promise.reject(payload.errors)

      return payload
    }
  )
}
