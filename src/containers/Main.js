import React, {useEffect, useState} from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Greeting from "./greeting/Greeting";
import About from "./about/About";
import Skills from "./skills/Skills";
import WorkExperience from "./workExperience/WorkExperience";
import StartupProject from "./StartupProjects/StartupProject";
import Education from "./education/Education";
import Contact from "./contact/Contact";
import SplashScreen from "./splashScreen/SplashScreen";
import {splashScreen} from "../portfolio";
import {StyleProvider} from "../contexts/StyleContext";
import {useLocalStorage} from "../hooks/useLocalStorage";
import "./Main.scss";

const Main = () => {
  const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDark, setIsDark] = useLocalStorage("isDark", true); // default dark
  const [isShowingSplashAnimation, setIsShowingSplashAnimation] = useState(true);

  useEffect(() => {
    // Apply body class for CSS custom property theme switching
    if (isDark) {
      document.body.classList.remove("light-mode");
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
      document.body.classList.add("light-mode");
    }
  }, [isDark]);

  useEffect(() => {
    if (splashScreen.enabled) {
      const splashTimer = setTimeout(
        () => setIsShowingSplashAnimation(false),
        splashScreen.duration
      );
      return () => clearTimeout(splashTimer);
    }
  }, []);

  const changeTheme = () => setIsDark(!isDark);

  return (
    <StyleProvider value={{isDark, changeTheme}}>
      <div className={isDark ? "dark-mode" : "light-mode"}>
        {isShowingSplashAnimation && splashScreen.enabled ? (
          <SplashScreen />
        ) : (
          <>
            <Header />
            <main>
              <Greeting />
              <About />
              <Skills />
              <WorkExperience />
              <StartupProject />
              <Education />
              <Contact />
            </main>
            <Footer />
          </>
        )}
      </div>
    </StyleProvider>
  );
};

export default Main;
