import React, { useState, useEffect } from "react";

const Clock = () => {
    const [currentTime, setCurrentTime] = useState("");
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

    useEffect(() => {
        const updateClock = () => {
            const now = new Date();
            const hours = now.getHours();
            const minutes = now.getMinutes();
            const seconds = now.getSeconds();

            const formattedHours = hours % 12 || 12;

            const formattedTime = `${formattedHours}:${minutes}:${seconds}`;
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

        // Adjust the hour range based on the user's local time
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
        <div>
            {/* {!!isDesktop && ( */}
        <div style={clockStyle}>
                <div style={{ display: 'block' }}>
                    <span style={{ display: 'block', color:"white" }}>{currentTime}</span>
                    <span style={{ display: 'block', color:"white" }}>
                        {getGreeting()}
                    </span>
                </div>

                </div>
                 {/* )} */}
                </div>
    );
};

export default Clock;