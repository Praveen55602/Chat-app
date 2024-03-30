import React from "react";
import { Outlet, Link } from "react-router-dom";
import { Container } from "react-bootstrap";
function LandingPage() {
  return (
    <Container
      className="d-flex flex-column align-items-center justify-content-center w-100"
      style={{ minHeight: "100vh" }}
    >
      <span>Welcome to ChatApp</span>
      <div className="d-flex flex-column align-items-center justify-content-center">
        <Link to="/signup">Signup</Link>
        <Link to="/login">Login</Link>
      </div>
    </Container>
  );
}

export default LandingPage;
