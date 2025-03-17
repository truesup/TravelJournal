import locationMarker from '../assets/location-marker.svg'

export default function Entry({ countryData }) {
  return (
    <article className="entry-wrapper">
      <div className="entry-main-photo-container">
        <img
          src={countryData.img.src}
          alt={countryData.img.alt}
          className="entry-main-photo"
        />
      </div>
      <div className="entry-content">
        <div className="location-wrapper">
          <img
            src={locationMarker}
            alt="Location marker"
            className="location-marker"
          />
          <p className="location-country-name">{countryData.country}</p>
          <a
            href={countryData.googleMapsLink}
            target="blank"
            className="location-maps-link">
            View on Google Maps
          </a>
        </div>
        <h2 className="country-name">{countryData.title}</h2>
        <p className="visit-dates">{countryData.dates}</p>
        <p className="info-text">{countryData.text}</p>
      </div>
    </article>
  )
}
