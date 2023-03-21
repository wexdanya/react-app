import React, { useContext } from "react";
import { UserContext, ThemeContext, LangContext } from "./../../contexts";
import styles from "./Header.module.scss";
import cx from "classnames";
import CONSTANTS from "../../constants";
import { DarkMode, WbSunny, Language } from "@mui/icons-material";
const { THEMES } = CONSTANTS;
const Header = () => {
  const [theme, setTheme] = useContext(ThemeContext);
  const [lang, setLang] = useContext(LangContext);
  const [{ firstName }] = useContext(UserContext);
  const headerClasses = cx(styles.header, {
    [styles.dark]: theme === THEMES.LIGHT,
    [styles.light]: theme === THEMES.DARK,
  });
  const buttonClasses = cx(styles.button, {
    [styles.dark]: theme === THEMES.LIGHT,
    [styles.light]: theme === THEMES.DARK,
  });
  return (
    <>
      <header className={headerClasses}>
        <h3>LOGO</h3>
        <div className={styles.rightSite}>
          {lang === "ENG" ? <>Hello,</> : <>Привет,</>}
          {firstName}
          <button
            className={buttonClasses}
            onClick={() => {
              theme === "LIGHT" ? setTheme("DARK") : setTheme("LIGHT");
            }}
          >
            {theme === "LIGHT" ? <DarkMode /> : <WbSunny />}
          </button>
          <span
            onClick={() => (lang === "ENG" ? setLang("UKR") : setLang("ENG"))}
          >
            <Language />
          </span>
        </div>
      </header>
    </>
  );
};

export default Header;
