import React, { Component } from "react";
import "./App.css";
import { UserContext, ThemeContext ,LangContext} from "./contexts";
import Tree from "./components/Tree/index";
import Header from "./components/Header/index";
import CONSTANTS from "./constants";
const { THEMES, LANGUAGES } = CONSTANTS;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        id: 1,
        firstName: "Brad",
        lastName: "Pitt",
      },
      theme: THEMES.LIGHT,
      lang: LANGUAGES.ENG,
    };
  }
  setTheme = (value) => {
    this.setState({ theme: value });
  };
  changeLang = (value) =>{
    this.setState({ lang: value });
  }
  render() {
    const { user, theme ,lang} = this.state;
    return (
      <LangContext.Provider value={[lang,this.changeLang]}>
        <ThemeContext.Provider value={[theme, this.setTheme]}>
          <UserContext.Provider value={user}>
            <Header />
            <Tree />
          </UserContext.Provider>
        </ThemeContext.Provider>
      </LangContext.Provider>
    );
  }
}

export default App;
