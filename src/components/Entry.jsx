import locationMarker from '../assets/location-marker.svg'

export default function Entry({
  imgInfo,
  country,
  title,
  googleMapsLink,
  dates,
  text,
}) {
  return (
    <article className="entry-wrapper">
      <div className="entry-main-photo-container">
        <img src={imgInfo.src} alt={imgInfo.alt} className="entry-main-photo" />
      </div>
      <div className="entry-content">
        <div className="location-wrapper">
          <img
            src={locationMarker}
            alt="Location marker"
            className="location-marker"
          />
          <p className="location-country-name">{country}</p>
          <a href={googleMapsLink} className="location-maps-link">
            View on Google Maps
          </a>
        </div>
        <h2 className="country-name">{title}</h2>
        <p className="visit-dates">{dates}</p>
        <p className="info-text">{text}</p>
      </div>
    </article>
  )
}
