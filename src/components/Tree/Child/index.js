import React from "react";
import UserProfile from "./../UserProfile/index";
import { LangContext, ThemeContext } from "./../../../contexts";
import styles from "./Child.module.scss";
import cx from "classnames";
import CONSTANTS from "../../../constants";

const { THEMES } = CONSTANTS;

const Child = () => {
  return (
    <LangContext.Consumer>
      {([lang, fnk]) => {
        return (
          <ThemeContext.Consumer>
            {([theme]) => {
              const childClasses = cx(styles.childDiv, {
                [styles.dark]: theme === THEMES.LIGHT,
                [styles.light]: theme === THEMES.DARK,
              });
              return (
                <div className={childClasses}>
                  {lang === "ENG" ? <h2>User profile</h2> : <h2>Профиль</h2>}
                  <UserProfile />
                </div>
              );
            }}
          </ThemeContext.Consumer>
        );
      }}
    </LangContext.Consumer>
  );
};

export default Child;
