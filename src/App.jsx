// -------------------------------------- useMemo -------------------------------------------------------
import React, { useEffect, useMemo, useState } from "react";

export default function App() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  const themeStyles = useMemo(() => {
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
    };
  }, [dark]);

  useEffect(() => {
    console.log("Theme changed");
  }, [themeStyles]);
  // but this will be printed even when we change the number, because when the component rendered again, themeStyles values is same but reference is different
  // so for the reference equality, we use use Memo

  return (
    <>
      <input
        className="border border-black"
        type="number"
        value={number}
        onChange={(e) => {
          setNumber(parseInt(e.target.value));
        }}
      />
      <button
        className="border border-black"
        onClick={() => setDark((prevDark) => !prevDark)}
      >
        Change theme
      </button>
      <div style={themeStyles}>{doubleNumber}</div>
      {/* this function will be called/rendered whenever there is a change in the component. so to solve this, we use the hook 'useMemo'.. Memo= Memoization */}
    </>
  );
}

function slowFunction(num) {
  // console.log("Calling Slow function");
  for (let i = 0; i < 1000000000; i++) {}
  return num * 2;
}

// --------------------------------------- useCallback -----------------------------------------------------------------

// import React, { useState } from "react";
// import List from "./List";

// export default function App() {
//   const [number, setNumber] = useState(1);
//   const [dark, setDark] = useState(false);

//   const getItems = () => {
//     return [number, number + 1, number + 2];
//   };
//   const theme = {
//     backgroundColor: dark ? "#333" : "#FFF",
//     color: dark ? "#FFF" : "#333",
//   };
//   return (
//     <>
//       <div style={theme}>
//         <input
//           type="number"
//           className="border border-black"
//           value={number}
//           onChange={(e) => setNumber(parseInt(e.target.value))}
//         />
//         <button onClick={() => setDark((prevDark) => !prevDark)}>
//           Toggle theme
//         </button>
//         <List getItems={getItems} />
//       </div>
//     </>
//   );
// }

//  ------------------------------- useRef ----------------------------------------------------------------------------
// import React, { useEffect, useState, useRef } from "react";

// export default function App() {
//   const [name, setName] = useState("");
//   // const [renderCount, setRenderCount] = useState(0);
//   // useEffect(() => {
//   //   // setRenderCount((prevRenderCount) => prevRenderCount + 1); this will create an infinite loop
//   // });

//   // const renderCount = useRef(1);
//   // returns an object like {current:1}

//   // useEffect(() => {
//   //   renderCount.current = renderCount.current + 1;
//   // });

//   // const inputRef = useRef();

//   // function focus() {
//   //   inputRef.current.focus();
//   //   // inputRef.current.value = "some value"; // we shouldn't do this in react, everything in react should be updated through states.. it's a good practice
//   // }

//   const prevName = useRef("");

//   useEffect(() => {
//     prevName.current = name;
//   }, [name]);
//   return (
//     <>
//       <input
//         // ref={inputRef}
//         className="p-4 border border-blue-500"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />
//       <div>
//         My name is {name} <br />
//         previously it was {prevName.current}
//       </div>
//       {/* <div>I rendered {renderCount.current} times</div> */}

//       {/* <button onClick={focus} className="p-4 border border-blue-500">
//         Focus
//       </button> */}
//     </>
//   );
// }

// -------------------------------- useContext another way -------------------------------------------------------------
// import React from "react";
// import FunctionContextComponent from "./FunctionContextComponent";
// import { ThemeProvider } from "./ThemeContext";

// export default function App() {
//   return (
//     <ThemeProvider>
//       <FunctionContextComponent />
//     </ThemeProvider>
//   );
// }

// -------------------------------- useContext -------------------------------------------------------------
// import React, { useState, useContext } from "react";
// import ClassContextComponent from "./ClassContextComponent";
// import FunctionContextComponent from "./FunctionContextComponent";

// // creating the context
// export const ThemeContext = React.createContext();

// export default function App() {
//   const [darkTheme, setDarkTheme] = useState(true);

//   function toggleTheme() {
//     setDarkTheme((prevDarkTheme) => !prevDarkTheme);
//   }
//   return (
//     <>
//       <ThemeContext.Provider value={darkTheme}>
//         <button
//           onClick={toggleTheme}
//           className="p-4 border border-blue-600 font-bold"
//         >
//           Toggle Theme
//         </button>
//         <FunctionContextComponent />
//         <ClassContextComponent />
//       </ThemeContext.Provider>
//     </>
//   );
// }

// -------------------------------- useEffect ---------------------------------------------------------------

// import { useState, useEffect } from "react";
// import "./App.css";

// function App() {
//   const [resourceType, setResourceType] = useState("");

//   const [items, setItems] = useState([]);

//   // console.log("render");

//   useEffect(() => {
//     console.log("resource changed");

//     return () => {
//       console.log(
//         "return from resouce change  or Component is about to unmount"
//       );
//     }; //clean up code.. when componemnt unmounts (Perform cleanup before the component is unmounted)
//   }, [resourceType]);
//   ``;

//   // useEffect(() => {
//   //   fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
//   //     .then((response) => response.json())
//   //     .then((json) => setItems(json));
//   // }, [resourceType]);

//   return (
//     <>
//       <div>
//         <button
//           className="p-4  border border-blue-700 mr-4"
//           onClick={() => setResourceType("posts")}
//         >
//           Posts
//         </button>
//         <button
//           className="p-4 border border-blue-700 mr-4"
//           onClick={() => setResourceType("users")}
//         >
//           Users
//         </button>
//         <button
//           className="p-4 border border-blue-700 mr-4"
//           onClick={() => setResourceType("comments")}
//         >
//           Comments
//         </button>
//       </div>
//       <h1>{resourceType}</h1>
//       {items.map((item) => {
//         return <pre>{JSON.stringify(item)}</pre>;
//       })}
//     </>
//   );
// }

// export default App;
