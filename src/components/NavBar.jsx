// NavBar.jsx
import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter, changeFilter } from '../redux/contactSlice';

function NavBar() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  return (
    <Navbar sticky="top" expand="lg" className="bg-body-tertiary">
      <Container className="d-flex me-auto">
        <Navbar.Brand href="#home">PhoneBook</Navbar.Brand>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search contact"
            className="me-2"
            aria-label="Search"
            value={filter}
            onChange={e => dispatch(changeFilter(e.target.value))}
          />
        </Form>
      </Container>
    </Navbar>
  );
}

export default NavBar;
