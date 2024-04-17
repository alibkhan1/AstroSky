import React, { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress"; // Ensure imports are correct

const Calendar = () => {
  const [moonPhases, setMoonPhases] = useState([]);
  const [loading, setLoading] = useState(false);

  const applicationId = process.env.REACT_APP_ASTRONOMY_ID;
  const applicationSecret = process.env.REACT_APP_ASTRONOMY_SECRET;
  const authString = btoa(`${applicationId}:${applicationSecret}`);

  useEffect(() => {
    const fetchMoonPhases = async () => {
      setLoading(true);

      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          const daysInMonth = getDaysArray(new Date());

          try {
            const moonPhasesResults = await Promise.all(
              daysInMonth.map((date) =>
                fetchMoonPhase(date, latitude, longitude)
              )
            );
            setMoonPhases(moonPhasesResults);
          } catch (error) {
            console.error("Error fetching moon phases:", error);
          } finally {
            setLoading(false);
          }
        },
        (error) => {
          console.error("Geolocation error:", error);
          setLoading(false);
        }
      );
    };

    fetchMoonPhases();
  }, []);

  const fetchMoonPhase = async (date, latitude, longitude) => {
    const apiUrl = "https://api.astronomyapi.com/api/v2/studio/moon-phase";
    const data = {
      format: "png",
      style: {
        moonStyle: "sketch",
        backgroundStyle: "stars",
        backgroundColor: "black",
        headingColor: "white",
        textColor: "white",
      },
      observer: {
        latitude,
        longitude,
        date: date.toISOString().split("T")[0],
      },
      view: {
        type: "portrait-simple",
        orientation: "south-up",
      },
    };

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${authString}`,
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const responseData = await response.json();
      return {
        date: date.toISOString().split("T")[0],
        imageUrl: responseData.data.imageUrl,
      };
    } catch (error) {
      console.error("Error fetching moon phase for date:", date, error);
      return {
        date: date.toISOString().split("T")[0],
        error: "Failed to fetch",
      };
    }
  };

  const getDaysArray = (now) => {
    const month = now.getMonth();
    const year = now.getFullYear();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    return Array.from(
      { length: daysInMonth },
      (_, i) => new Date(year, month, i + 1)
    );
  };

  return (
    <div>
      <h2>Moon Phases This Month</h2>
      {loading ? (
        <div
          style={{ display: "flex", justifyContent: "center", margin: "20px" }}
        >
          <CircularProgress />
        </div>
      ) : (
        <table style={{ width: "100%", textAlign: "center" }}>
          <thead>
            <tr>
              <th>Moon Phase</th>
            </tr>
          </thead>
          <tbody>
            {moonPhases.map(({ date, imageUrl, error }, index) => (
              <tr key={index}>
                <td style={{ verticalAlign: "middle" }}>
                  {error ? (
                    <p>Error fetching data</p>
                  ) : (
                    <img
                      src={imageUrl}
                      alt={`Moon phase for ${date}`}
                      style={{
                        display: "block",
                        marginLeft: "auto",
                        marginRight: "auto",
                        width: "250px",
                        height: "250px",
                      }}
                    />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Calendar;
