import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <Container>
      <footer className="py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3"></ul>
        <p className="text-center text-body-secondary small">
          &copy; 2024 - 2025 Developed by Femilia Putri Mayranti | Contributions
          by Brigitha Dwinesti, Medical Physicist
        </p>
      </footer>
    </Container>
  );
};

export default Footer;
