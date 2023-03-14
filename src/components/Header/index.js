import React from "react";
import { UserContext, ThemeContext, LangContext } from "./../../contexts";
import styles from "./Header.module.scss";
import cx from "classnames";
import CONSTANTS from "../../constants";
import { DarkMode, WbSunny,Language  } from "@mui/icons-material";
const { THEMES } = CONSTANTS;
const Header = () => {
  return (
    <LangContext.Consumer>
      {([lang,func]) => {
        return (
          <ThemeContext.Consumer>
            {([theme, funct]) => {
              const headerClasses = cx(styles.header, {
                [styles.light]: theme === THEMES.LIGHT,
                [styles.dark]: theme === THEMES.DARK,
              });
              const buttonClasses = cx(styles.button, {
                [styles.light]: theme === THEMES.LIGHT,
                [styles.dark]: theme === THEMES.DARK,
              });
              return (
                <UserContext.Consumer>
                  {(value) => (
                    <header className={headerClasses}>
                      <h3>LOGO</h3>
                      <div className={styles.rightSite}>
                      {lang==='ENG'?<>Hello,</>:<>Привет,</>}
                        {value.lastName}
                        <button
                          className={buttonClasses}
                          onClick={() => {
                            theme === "LIGHT" ? funct("DARK") : funct("LIGHT");
                          }}
                        >
                          {theme === "LIGHT" ? <DarkMode /> : <WbSunny />}
                        </button>
                        <span onClick={()=>lang === "ENG"?func("UKR"):func("ENG")}><Language/></span>
                      </div>
                    </header>
                  )}
                </UserContext.Consumer>
              );
            }}
          </ThemeContext.Consumer>
        );
      }}
    </LangContext.Consumer>
  );
};

export default Header;
