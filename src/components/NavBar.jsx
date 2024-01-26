import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container className="d-flex me-auto">
        <Navbar.Brand href="#">PhoneBook</Navbar.Brand>

        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search contact"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-primary">Search</Button>
        </Form>
      </Container>
    </Navbar>
  );
}

export default NavBar;
