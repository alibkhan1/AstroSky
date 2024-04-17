import React, { useState, useEffect } from "react";

const Clock = () => {
  const [currentTime, setCurrentTime] = useState("");
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      let hours = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();
      const amPm = hours >= 12 ? "PM" : "AM";

      // Convert 24h to 12h format
      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'

      // Ensuring two digits for hours, minutes, and seconds
      const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}:${seconds.toString().padStart(2, "0")} ${amPm}`;
      setCurrentTime(formattedTime);
    };

    const intervalId = setInterval(updateClock, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getGreeting = () => {
    const currentHour = new Date().getHours();

    if (currentHour >= 6 && currentHour < 12) {
      return "Good Morning!";
    } else if (currentHour >= 12 && currentHour < 18) {
      return "Good Afternoon!";
    } else {
      return "Good Evening!";
    }
  };

  const clockStyle = {
    fontSize: isDesktop ? "3em" : "2em",
    fontWeight: "bold",
    textAlign: "center",
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "rgba(169, 169, 169, 0.5)",
    padding: "20px",
    borderRadius: "15px",
  };

  return (
    <div style={clockStyle}>
      <div>
        <span style={{ display: "block", color: "white" }}>{currentTime}</span>
        <span style={{ display: "block", color: "white" }}>
          {getGreeting()}
        </span>
      </div>
    </div>
  );
};

export default Clock;
