import Header from './components/Header'
import Entry from './components/Entry'
import countriesData from './utils/data'

// imgInfo country title googleMapsLink dates text

export default function App() {
  return (
    <div className="wrapper">
      <Header />
      {countriesData.map(countryData => (
        <Entry key={countryData.id} countryData={countryData} />
      ))}
    </div>
  )
}
