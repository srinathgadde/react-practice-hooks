import React from "react";
import { useTheme, useThemeUpdate } from "./ThemeContext";

export default function FunctionContextComponent() {
  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();
  const themeStyles = {
    backgroundColor: darkTheme ? "#333" : "#CCC",
    color: darkTheme ? "#CCC" : "#333",
    padding: "2rem",
    margin: "2rem",
  };
  return (
    <>
      <button className="p-4 border border-blue-600 " onClick={toggleTheme}>
        Toggle Theme
      </button>
      <div style={themeStyles}>Function Theme</div>
    </>
  );
}

// import React, { useContext } from "react";
// import { ThemeContext } from "./App";

// export default function FunctionContextComponent() {
//   const darkTheme = useContext(ThemeContext);
//   const themeStyles = {
//     backgroundColor: darkTheme ? "#333" : "#CCC",
//     color: darkTheme ? "#CCC" : "#333",
//     padding: "2rem",
//     margin: "2rem",
//   };
//   return <div style={themeStyles}>Function Theme</div>;
// }
