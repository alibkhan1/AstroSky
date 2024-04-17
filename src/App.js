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
import HelpIcon from '@mui/icons-material/Help';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import QuizIcon from '@mui/icons-material/Quiz';
import DarkModeIcon from "@mui/icons-material/DarkMode";
import MapPage from "./Views/Map/MapPage";
import Events from "./Views/Calendar/Calendar";
import About from "./Views/About/About";
import SponsorsPage from "./Views/Sponsors/SponsorsPage";
import QuizPage from "./Views/Quiz/QuizPage";
const App = () => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isTextToSpeech, setIsTextToSpeech] = useState(false);
  const [captionsEnabled, setCaptionsEnabled] = useState(0);
  const [readingLevel, setReadingLevel] = useState("regular");

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
                  pageTitle={"International Space Station Tracking"}
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
            <Route
              path="/about"
              element={
                <PageLayout
                  pageIcon={<HelpIcon />}
                  pageTitle={"About"}
                  isHighContrast={isHighContrast}
                >
                  <About isTextToSpeech={isTextToSpeech} />
                </PageLayout>
              }
            />
            <Route
              path="/sponsors"
              element={
                <PageLayout
                  pageIcon={<AttachMoneyIcon />}
                  pageTitle={"Our Sponsors"}
                  isHighContrast={isHighContrast}
                >
                  <SponsorsPage />
                </PageLayout>
              }
            />
            <Route
              path="/quiz"
              element={
                <PageLayout
                  pageIcon={<QuizIcon />}
                  pageTitle={"Astronomy Quiz"}
                  isHighContrast={isHighContrast}
                >
                  <QuizPage isTextToSpeech={isTextToSpeech} />
                </PageLayout>
              }
            />
            <Route
              path="/calendar"
              element={
                <PageLayout
                  pageIcon={<DarkModeIcon />}
                  pageTitle={"Events"}
                  isHighContrast={isHighContrast}
                >
                  <Events isTextToSpeech={isTextToSpeech} />
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
