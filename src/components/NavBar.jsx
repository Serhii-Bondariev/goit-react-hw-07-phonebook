// NavBar.jsx
import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';
import {
  selectContacts,
  selectFilter,
  changeFilter,
} from '../redux/contactSlice';

// решта коду

function NavBar() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleSearch = () => {
    console.log('Searching for:', filter);
  };

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
            value={filter}
            onChange={e => dispatch(changeFilter(e.target.value))}
          />
          <Button variant="outline-primary" onClick={handleSearch}>
            Search
          </Button>
        </Form>
      </Container>
    </Navbar>
  );
}

export default NavBar;
