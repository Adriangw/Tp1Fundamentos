import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';


function NavBarFundamentos() {
  return (

    <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#home">TP N° 1 Fundamentos</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">

        <Nav className="mr-auto">
        <Nav.Link href="http://www.unp.edu.ar/">UNPSJ</Nav.Link>
        <Nav.Link href="http://www.dit.ing.unp.edu.ar/">DIT TRELEW</Nav.Link>
       
        </Nav>
      
    </Navbar.Collapse>
    </Navbar>

  );
}

export default NavBarFundamentos;