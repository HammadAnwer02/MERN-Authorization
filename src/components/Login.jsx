import { React, useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import Cookies from "universal-cookie";
const cookies = new Cookies();

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);

  function handleSubmit(e) {
    // to prevent webpage from reloading again and again

    e.preventDefault();

    const configution = {
      method: "post",
      url: "https://nodejs-mongo-authapp.herokuapp.com/login",
      data: {
        email,
        password,
      },
    };
    // post data to the server then once the user is logged in
    // the cookies will be made available to all pages
    axios(configution)
      .then((result) => {
        setLogin(true);
        cookies.set("TOKEN", result.data.token, {
          path: "/",
        });
        window.location.href = "/auth";
      })
      .catch((e) => new Error());
    alert("submitted");
  }

  return (
    <>
      <h2>Login</h2>

      <Form onSubmit={(e) => handleSubmit(e)}>
        {/* email */}
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
          />
        </Form.Group>

        {/* password */}
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </Form.Group>

        {/* submit button */}
        <Button
          variant="primary"
          type="submit"
          onClick={(e) => handleSubmit(e)}
        >
          Submit
        </Button>
        {login ? (
          <p className="text-success">You successfully logged in!</p>
        ) : (
          <p className="text-danger">Unable to login please try again!</p>
        )}
      </Form>
    </>
  );
}
