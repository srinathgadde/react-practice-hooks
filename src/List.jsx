import React, { useEffect, useState } from "react";

export default function List({ getItems }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(getItems());
    // console.log("updating Items"); // but when we click toggleTheme also, it is printing.. this is where we use 'useCallback'
  }, [getItems]);

  return items.map((item) => <div key={item}>{item}</div>);
}
