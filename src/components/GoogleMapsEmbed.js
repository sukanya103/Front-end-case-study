import React from 'react';

function GoogleMapsEmbed({ mapUrl }) {
  console.log('Google Maps Embed - mapUrl:', mapUrl); // Add this console log

  return (
    <div className="map-container">
      <iframe
        title="Google Maps Embed"
        width="600"
        height="450"
        loading="lazy"
        allowFullScreen
        frameBorder="0"
        src={mapUrl} // Use the mapUrl directly here
      />
    </div>
  );
}

export default GoogleMapsEmbed;
