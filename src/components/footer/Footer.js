import React from "react";
import { Container } from "react-bootstrap";
import "./Footer.css";

function Footer() {
  return (
    <footer className="bg-dark">
      <Container className="text-light d-flex justify-content-between flex-column flex-sm-row">
        <p>Author: Emam Al Mounqer </p>
        <a href="https://github.com/emammounqer">Emam github</a>
      </Container>
    </footer>
  );
}

export default Footer;
