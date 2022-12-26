const envApiUrl = () => {
  switch (process.env.NODE_ENV) {
    case 'development':
      return 'http://localhost:3000'
    case 'production':
      return 'https://api.browncouch.club'
  }
}

export const apiUrl = envApiUrl()
