import axios from "axios";
import React, { createContext, useContext } from "react";
import { useEffect } from "react";

const AppContext = createContext();

const API = "https://api.pujakaitem.com/api/products";

const AppProvider = ({ children }) => {
  const getProducts = async (url) => {
    const res = await axios.get(url);
    const products = await res.data;
    console.log(
      "🚀 ~ file: productcontex.js ~ line 18 ~ getProducts ~ products",
      products
    );
  };

  useEffect(() => {
    getProducts(API);
  }, []);

  return (
    <AppContext.Provider value={{ myName: "Bharat Singh" }}>
      {children}
    </AppContext.Provider>
  );
};

//   Custom hook

const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };
