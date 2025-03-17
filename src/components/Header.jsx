import logo from '../assets/globe.svg'

export default function Header() {
  return (
    <header>
      <nav>
        <img src={logo} alt="Journal Logo" />
        <span>my travel journal.</span>
      </nav>
    </header>
  )
}
