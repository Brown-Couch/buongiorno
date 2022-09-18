import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppConfigContextProvider from './contexts/AppConfigContext'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Buongiorno from './Buongiorno'
import SignUpRoute from './routes/sign_up'
import LoginRoute from './routes/login'

import Dashboard from './routes/dashboard'
import Summary from './routes/summary'
import Sessions from './routes/sessions'
import Students from './routes/students'
import Messages from './routes/messages'
import Payments from './routes/payments'
import Settings from './routes/settings'

import NotFound from './routes/not_found'

export default function App() {
  const jwt = localStorage.getItem('jwt')

  const [data, setData] = useState({
    jwt: jwt,
  })

  return (
    <AppConfigContextProvider value={{ data: data, setData: setData }}>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Buongiorno />}>
            <Route index element={<Dashboard />}></Route>
            <Route path="dashboard" element={<Dashboard />}>
              <Route index element={<Summary />}></Route>
              <Route path="summary" element={<Summary />}></Route>
              <Route path="sessions" element={<Sessions />}></Route>
              <Route path="students" element={<Students />}></Route>
              <Route path="messages" element={<Messages />}></Route>
              <Route path="payments" element={<Payments />}></Route>
              <Route path="settings" element={<Settings />}></Route>
            </Route>
          </Route>
          <Route path="/login" element={<LoginRoute />}></Route>
          <Route path="/sign_up" element={<SignUpRoute />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </AppConfigContextProvider>
  )
}
