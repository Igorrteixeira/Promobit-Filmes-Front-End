import React, { useState } from "react";
import { GlobalStateContext } from "./GlobalStateContext";

export const GlobalState = (props) => {
  const [page,setPage] = useState([]);
  const [genre,setGenre] = useState([])

  return (
    <div>
      <GlobalStateContext.Provider value={{ genre, setGenre,page,setPage }}>
        {props.children}
      </GlobalStateContext.Provider>
    </div>
  );
};
