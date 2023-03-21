import React from "react";
import SubParent from "./../SubParent/index";
import { ThemeContext } from "./../../../contexts";

const Parent = (props) => {
    const {theme} = props;
    console.log(theme);
    return <SubParent />;
};

const ParentWithTheme = (props) => {
  return <ThemeContext.Consumer>{(theme) => {return <Parent theme={theme}/>}}</ThemeContext.Consumer>;
};

export default ParentWithTheme;
