import React, { useCallback, useEffect, useRef } from "react";
const Map = () => {

  const mapRef = useRef(null);
  let infoWindow;

  const initMap = useCallback(() => {
    new window.google.maps.Map(mapRef.current, {
      center: { lat: 37.8715, lng: -122.2600 },
      zoom: 15,
    });
  }, [mapRef]);

  infoWindow = new window.google.maps.InfoWindow();
  const locationButton = document.createElement("button");

  locationButton.textContent = "Pan to Current Location";
  locationButton.classList.add("custom-map-control-button");
//   mapRef.controls[window.google.maps.ControlPosition.TOP_CENTER].push(locationButton);

  useEffect(() => {
    initMap();
  }, [initMap]);


  return (
    <div
      className="map"
      style={{ width: "100vw", height: "50vh"}}
      ref={mapRef}
    ></div>
  );
}

export default Map