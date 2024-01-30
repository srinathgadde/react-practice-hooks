import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [resourceType, setResourceType] = useState("");

  const [items, setItems] = useState([]);

  // console.log("render");

  useEffect(() => {
    console.log("resource changed");

    return () => {
      console.log(
        "return from resouce change  or Component is about to unmount"
      );
    }; //clean up code.. when componemnt unmounts (Perform cleanup before the component is unmounted)
  }, [resourceType]);
  ``;

  // useEffect(() => {
  //   fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
  //     .then((response) => response.json())
  //     .then((json) => setItems(json));
  // }, [resourceType]);

  return (
    <>
      <div>
        <button
          className="p-4  border border-blue-700 mr-4"
          onClick={() => setResourceType("posts")}
        >
          Posts
        </button>
        <button
          className="p-4 border border-blue-700 mr-4"
          onClick={() => setResourceType("users")}
        >
          Users
        </button>
        <button
          className="p-4 border border-blue-700 mr-4"
          onClick={() => setResourceType("comments")}
        >
          Comments
        </button>
      </div>
      <h1>{resourceType}</h1>
      {items.map((item) => {
        return <pre>{JSON.stringify(item)}</pre>;
      })}
    </>
  );
}

export default App;