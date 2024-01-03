import React, { useState, useCallback } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Views/Home/HomePage";
import News from "./Views/News/NewsPage";
import TechMissionsPage from "./Views/TechMissions/TechMissionsPage";
import { ThemeProvider } from "./theme";
import defaultTheme from "./theme/defaultTheme";
import highContrastTheme from "./theme/highContrastTheme";
import Settings from "./components/Settings/Settings";
import PageLayout from "./components/PageLayout/PageLayout";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";
import GpsFixedOutlinedIcon from "@mui/icons-material/GpsFixedOutlined";
import MapPage from "./Views/Map/MapPage";
const App = () => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isTextToSpeech, setIsTextToSpeech] = useState(false);
  const [captionsEnabled, setCaptionsEnabled] = useState(0);
  const [readingLevel, setReadingLevel] = useState("easy");

  const toggleIsHighContrast = useCallback((event) => {
    setIsHighContrast(event.target.checked ?? false);
  }, []);

  const toggleIsTextToSpeech = useCallback((event) => {
    setIsTextToSpeech(event.target.checked ?? false);
  }, []);

  const toggleCaptionsEnabled = useCallback((event) => {
    setCaptionsEnabled(event.target.checked ? 1 : 0);
  }, []);
  const handleReadingLevels = useCallback((newLevel) => {
    setReadingLevel(newLevel);
  }, []);

  return (
    <ThemeProvider theme={isHighContrast ? highContrastTheme : defaultTheme}>
      <Router>
        <div>
          <Settings
            isTextToSpeech={isTextToSpeech}
            toggleIsTextToSpeech={toggleIsTextToSpeech}
            isHighContrast={isHighContrast}
            toggleIsHighContrast={toggleIsHighContrast}
            captionsEnabled={captionsEnabled}
            toggleCaptionsEnabled={toggleCaptionsEnabled}
            readingLevel={readingLevel}
            handleReadingLevels={handleReadingLevels}
          />
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  captionsEnabled={captionsEnabled}
                  isTextToSpeech={isTextToSpeech}
                />
              }
            />
            <Route
              path="/map"
              element={
                <PageLayout
                  pageIcon={<GpsFixedOutlinedIcon />}
                  pageTitle={"Map"}
                  isHighContrast={isHighContrast}
                >
                  <MapPage />
                </PageLayout>
              }
            />
            <Route
              path="/space-news"
              element={
                <PageLayout
                  pageIcon={<NewspaperIcon />}
                  pageTitle={"Space News"}
                  isHighContrast={isHighContrast}
                >
                  <News
                    readingLevel={readingLevel}
                    isTextToSpeech={isTextToSpeech}
                  />
                </PageLayout>
              }
            />
            <Route
              path="/space-missions"
              element={
                <PageLayout
                  pageIcon={<RocketLaunchOutlinedIcon />}
                  pageTitle={"Space Missions"}
                  isHighContrast={isHighContrast}
                >
                  <TechMissionsPage
                    readingLevel={readingLevel}
                    isTextToSpeech={isTextToSpeech}
                  />
                </PageLayout>
              }
            />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
