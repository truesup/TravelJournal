import logo from '../assets/globe.svg'

export default function Header() {
  return (
    <header>
      <nav>
        <img src={logo} alt="Journal Logo" />
        <h1>my travel journal.</h1>
      </nav>
    </header>
  )
}
