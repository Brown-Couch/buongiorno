import { Outlet } from "react-router-dom";
import './dashboard.css'
import Header from '../components/Header'
import Navigation from '../components/Navigation'
import Summary from '../components/Summary'

export default function Dashboard() {
  return (
    <>
      <Header />
      <div id="dashboard">
        <Navigation />
        <main>
          <Outlet />
        </main>
        <aside>
          {/* Secondary outlet goes here */}
          <h3>Your Calendar</h3>
        </aside>
      </div>
      <footer>
        This is the footer
      </footer>
    </>
  )
}
