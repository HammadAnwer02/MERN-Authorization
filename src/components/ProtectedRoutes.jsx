import React from "react";
import { Navigate } from "react-router-dom";
import Cookies from "universal-cookie";
const cookie = new Cookies();

/**
 * this function will check for any given component if it should be returned ot the user or not
 * @param {*} param0
 * @returns
 */
export default function ProtectedRoutes({ children }) {
 
  const token = cookie.get("TOKEN");
  if (token) {
    return children;
  } else { 
    console.log("Not logged in");
    return <Navigate to="/" />;
  }
}
