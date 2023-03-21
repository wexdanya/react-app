import React, { useState } from "react";
import "./App.css";

import { UserContext, ThemeContext, LangContext } from "./contexts/index";
import Header from "./components/Header";

const App = () => {
  const [theme, setTheme] = useState("LIGHT");
  const [lang, setLang] = useState("ENG");
  const [user, setUser] = useState({
    firstName: "Brad",
    id: 20,
    age: 40,
  });
  return (
    <LangContext.Provider value={[lang, setLang]}>
      <ThemeContext.Provider value={[theme, setTheme]}>
        <UserContext.Provider value={[user, setUser]}>
          <Header />
        </UserContext.Provider>
      </ThemeContext.Provider>
    </LangContext.Provider>
  );
};

export default App;
