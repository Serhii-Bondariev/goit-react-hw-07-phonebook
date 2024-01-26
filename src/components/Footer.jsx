import { Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Footer() {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light" fixed="bottom">
        <Container>
          <Navbar.Brand href="#home">PhoneBook</Navbar.Brand>
          <Row className="d-flex justify-content-around me-space">
            <Nav className="my-2 my-lg-0 ">
              <Nav.Link href="#https://github.com/Serhii-Bondariev">
                GitHub
              </Nav.Link>
              <Nav.Link href="#features">LinkedIn</Nav.Link>
              {/* <p className="text-muted">© 2024 Created by Bondariev Serhii </p> */}
            </Nav>
          </Row>
        </Container>
      </Navbar>
    </>
  );
}

export default Footer;
