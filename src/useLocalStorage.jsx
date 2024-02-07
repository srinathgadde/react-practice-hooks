import React, { useEffect, useState } from "react";

function getSavedValue(key, intialValue) {
  const savedValue = JSON.parse(localStorage.getItem(key));
  if (savedValue) return savedValue;

  if (intialValue instanceof Function) return intialValue();
  return intialValue;
}

export default function useLocalStorage(key, intialValue) {
  const [value, setValue] = useState(() => {
    return getSavedValue(key, intialValue);
  });
  // reason for using fucntion inside is we dont always call JSON.parse(localStorage.getItem(key));
  // - every time we render our component cz its slow
  // so only for initial value(first time our component renders)

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
}
