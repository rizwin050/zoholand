import site from '../../config/site';

export default function MapEmbed() {
  return (
    <div className="map">
      <iframe
        title="Map showing the Greenland Particle Boards factory in Perumbavoor"
        src={site.map.embedUrl}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
      <a className="text-link" href={site.map.linkUrl} target="_blank" rel="noopener noreferrer">
        Open in Google Maps for directions
      </a>
    </div>
  );
}
