import React from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import reportWebVitals from './reportWebVitals'

import App from "./App"
import SignUpRoute from "./routes/sign_up"
import LoginRoute from "./routes/login"
import Dashboard from "./routes/dashboard"

import Summary from "./routes/summary"
import Sessions from "./routes/sessions"
import Students from "./routes/students"
import Messages from "./routes/messages"
import Payments from "./routes/payments"
import Settings from "./routes/settings"

import NotFound from "./routes/not_found"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="dashboard" element={<Dashboard />}>
            <Route index element ={<Summary />}></Route>
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
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
