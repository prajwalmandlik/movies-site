"use client";
import { useState, createContext } from "react";
import { Toaster } from "react-hot-toast";

export const Context = createContext({ movieeList: "" });
export const ContextProvider = ({ children }) => {
  const [moviesList, setMoviesList] = useState([]);

  return (
    <Context.Provider
      value={{
        moviesList,
        setMoviesList,
      }}
    >
      {children}
      <Toaster />
    </Context.Provider>
  );
};
