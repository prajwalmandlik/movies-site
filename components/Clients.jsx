import { useState, createContext, useContext, useEffect } from "react";
import { toast, Toaster } from "react-hot-toast";

export const Context = createContext({ user: {} });
export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  //   useEffect(() => {
  //     fetch("/api/auth/me")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         if (data.success) setUser(data.user);
  //       });
  //   }, []);

  return (
    <Context.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
      <Toaster />
    </Context.Provider>
  );
};

export const searchMovie = (data) => {
  console.log(data);
};

export const FilterMovie = (data) => {
  console.log(data)
}