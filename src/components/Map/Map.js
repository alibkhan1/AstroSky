import React, { useState, useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Polyline,
  useMap,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import customMarkerImg from "../../assets/logo.svg";

const CustomMarkerIcon = new L.Icon({
  iconUrl: customMarkerImg,
  iconSize: [50, 82],
  iconAnchor: [25, 50],
  popupAnchor: [1, -34],
});

const UpdateMapCenter = ({ coordinates }) => {
  const map = useMap();
  map.setView(coordinates);
  return null;
};

const OpenStreetMapWithLeaflet = () => {
  const [coordinates, setCoordinates] = useState({ lat: 51.505, lng: -0.09 });
  const [path, setPath] = useState([]);
  const [timestamp, setTimestamp] = useState("");
  const zoomLevel = 3;

  const fetchISSCoordinates = async () => {
    try {
      const response = await fetch("http://api.open-notify.org/iss-now.json");
      const data = await response.json();
      const { latitude, longitude } = data.iss_position;
      const newCoords = {
        lat: parseFloat(latitude),
        lng: parseFloat(longitude),
      };

      setCoordinates(newCoords);
      setPath((prevPath) => [...prevPath, newCoords]);
      setTimestamp(new Date().toISOString()); // Current time in GMT
    } catch (error) {
      console.error("Error fetching ISS coordinates:", error);
    }
  };

  useEffect(() => {
    fetchISSCoordinates();
    const intervalId = setInterval(fetchISSCoordinates, 3000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <MapContainer
        center={coordinates}
        zoom={zoomLevel}
        style={{ height: "70vh", width: "100%", top: "30" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={coordinates} icon={CustomMarkerIcon}></Marker>
        <Polyline positions={path} color="red" />
        <UpdateMapCenter coordinates={coordinates} />
      </MapContainer>
      <div
        style={{ textAlign: "center", marginTop: "20px", marginBottom: "70px" }}
      >
        <strong>Latitude:</strong> {coordinates.lat.toFixed(4)},{" "}
        <strong>Longitude:</strong> {coordinates.lng.toFixed(4)},{" "}
        <strong>Time (GMT):</strong> {timestamp}
      </div>
    </>
  );
};

export default OpenStreetMapWithLeaflet;
