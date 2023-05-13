"use client";
import { useState, createContext } from "react";
import { Toaster } from "react-hot-toast";

export const Context = createContext({ user: {}, filter: 0, search: "" });
export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [filter, setFilter] = useState(0);
  const [search, setSearch] = useState("");

  return (
    <Context.Provider
      value={{
        user,
        setUser,
        filter,
        setFilter,
        search,
        setSearch,
      }}
    >
      {children}
      <Toaster />
    </Context.Provider>
  );
};

