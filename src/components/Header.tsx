import './Header.css'

export default function Header() {
  return (
    <header>
      <div id="app-badge">
        <img src={`${process.env.PUBLIC_URL}/assets/general/logo.png`} alt="The Brown Couch" />
        <h2>Your Brown Couch</h2>
      </div>
    </header>
  )
}
