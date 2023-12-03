import React, { useState, useEffect } from "react";

const OpenStreetMapEmbed = () => {
  const [coordinates, setCoordinates] = useState({
    latitude: 51.505,
    longitude: -0.09,
  });

  useEffect(() => {
    const fetchCoordinates = async () => {
      try {
        const response = await yourApiCallToFetchCoordinates();
        setCoordinates({
          latitude: response.latitude,
          longitude: response.longitude,
        });
      } catch (error) {
        console.error("Error fetching coordinates: ", error);
      }
    };

    fetchCoordinates();
  }, []);

    const yourApiCallToFetchCoordinates = () => {
        return { latitude: 51.505, longitude: -0.09 };
    }

  const mapSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${
    coordinates.longitude - 0.01
  }%2C${coordinates.latitude - 0.01}%2C${coordinates.longitude + 0.01}%2C${
    coordinates.latitude + 0.01
  }&layer=mapnik&marker=${coordinates.latitude}%2C${coordinates.longitude}`;

  return (
    <div
      style={{
        width: "100%",
        height: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <iframe
        title="OpenStreetMap"
        width="100%"
        height="100%"
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
        src={mapSrc}
        style={{ border: "none" }}
      ></iframe>
    </div>
  );
};

export default OpenStreetMapEmbed;
