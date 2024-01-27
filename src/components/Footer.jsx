import { Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Footer() {
  return (
    <>
      <Navbar bg="primary" data-bs-theme="light" sticky="bottom">
        <Container>
          <Navbar.Brand href="#home">PhoneBook</Navbar.Brand>
          <Row className="d-flex justify-content-around me-space">
            <Nav className="my-2 my-lg-0 ">
              <Nav.Link
                target="_blank"
                rel="noreferrer noopener"
                href="https://github.com/Serhii-Bondariev"
              >
                GitHub
              </Nav.Link>
              <Nav.Link
                target="_blank"
                rel="noreferrer noopener"
                href="https://www.linkedin.com/in/serhii-bondariev-809622273/"
              >
                LinkedIn
              </Nav.Link>
            </Nav>
          </Row>
        </Container>
      </Navbar>
    </>
  );
}

export default Footer;
