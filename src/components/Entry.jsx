import locationMarker from '../assets/location-marker.svg'

export default function Entry(props) {
  return (
    <article className="entry-wrapper">
      <div className="entry-main-photo-container">
        <img
          src={props.img.src}
          alt={props.img.alt}
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
          <p className="location-country-name">{props.country}</p>
          <a
            href={props.googleMapsLink}
            target="blank"
            className="location-maps-link">
            View on Google Maps
          </a>
        </div>
        <h2 className="country-name">{props.title}</h2>
        <p className="visit-dates">{props.dates}</p>
        <p className="info-text">{props.text}</p>
      </div>
    </article>
  )
}
