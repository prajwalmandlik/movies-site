"use client";
import { useState, createContext } from "react";
import { Toaster } from "react-hot-toast";

export const Context = createContext({ movieeList: "" });
export const ContextProvider = ({ children }) => {
  const [moviesList, setMoviesList] = useState(null);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState({
    id: 0,
    name: "All",
  });

  return (
    <Context.Provider
      value={{
        moviesList,
        setMoviesList,
        loading,
        setLoading,
        category,
        setCategory,
      }}
    >
      {children}
      <Toaster />
    </Context.Provider>
  );
};
