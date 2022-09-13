import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import Cookies from "universal-cookie";


const cookies = new Cookies();
const token = cookies.get("TOKEN");


export default function AuthComponent() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const configuration = {
      method: "get",
      url: "https://nodejs-mongo-authapp.herokuapp.com/auth-endpoint",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios(configuration)
      .then((result) => setMessage(result.data.message))
      .catch((e) => (e = new Error()));
  }, []);

  const logout = () => {
    //destroy the cookie
    cookies.remove("TOKEN", {path: "/"});
    window.location.href = "/";
  }

  return (
    <div className="text-center">
      <h1 >Auth Component</h1>
      <h3 className="text-danger">{message}</h3>
      <Button type="submit" variant="danger" onClick={() => logout()}>
        Logout
      </Button>
    </div>
  );
}
