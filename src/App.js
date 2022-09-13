import { Container, Col, Row } from "react-bootstrap";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import FreeComponent from "./components/FreeComponent";
import AuthComponent from "./components/AuthComponent";
import Account from "./components/Account";
import ProtectedRoutes from "./components/ProtectedRoutes";

function App() {
  return (

    <>
      <Container>
        <Row>
          <Col className="text-center">
            <h1>React Authentication Tutorial</h1>

            <section id="navigation">
              <a href="/">Home</a>
              <a href="/free">Free Component</a>
              <a href="/auth">Auth Component</a>
            </section>
          </Col>
        </Row>
      </Container>
      <Routes>
        <Route exact path="/" element={<Account />} />
        <Route exact path="/free" element={<FreeComponent />} />
        <Route
          exact
          path="/auth"
          element={
            <ProtectedRoutes>
              <AuthComponent />
            </ProtectedRoutes>
          }
        />
      </Routes>
    </>
  );
}

export default App;
