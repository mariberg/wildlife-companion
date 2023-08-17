import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Map = ({ coordinates }) => {
  const mapRef = useRef(null); // Reference to the map instance

  useEffect(() => {
    if (!mapRef.current) {
      // Create a map instance if it's not already initialized
      const map = L.map('map').setView([27.0, 67.0], 8); // Initial center and zoom level
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      }).addTo(map);
      mapRef.current = map; // Save the map instance in the ref
    }

    const circleOptions = { color: 'red', fillOpacity: 1, radius: 5 };

    coordinates.forEach((coord, index) => {
      L.circleMarker([coord.latitude, coord.longitude], circleOptions)
        .addTo(mapRef.current) // Use the saved map instance from the ref
        .bindPopup('Location ' + (index + 1));
    });
  }, [coordinates]);

  return <div id="map" style={{ width: '100%', height: '500px' }}></div>;
};

export default Map;
