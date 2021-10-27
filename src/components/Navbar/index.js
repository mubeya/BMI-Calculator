import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import styles from "./styles.module.css";

function NavBar() {
  return (
    <Navbar className={styles.navCalc} expand='lg'>
      <Container>
        <Navbar.Brand href='/'>BMI Calculator</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav' className='justify-content-end'>
          <Nav>
            <Nav.Link href='/'>Home</Nav.Link>
            <Nav.Link href='/whatisbmi'>What is BMI?</Nav.Link>
            <Nav.Link href='/calculations'>Calculations</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
