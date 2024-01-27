import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, selectFilter } from '../redux/contactSlice';
import { Button } from 'react-bootstrap';

// Оновлений селектор для ефективного вибору відфільтрованих контактів
import { createSelector } from 'reselect';
import { selectContacts } from '../redux/contactSlice';

const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    )
);

function Forms() {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);

  const [formData, setFormData] = useState({
    name: '',
    number: '',
    addToFavorites: false,
  });

  const handleInputChange = e => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === 'checkbox' ? checked : value;

    setFormData(prevData => ({
      ...prevData,
      [name]: inputValue,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(addContact(formData));

    setFormData({
      name: '',
      number: '',
      addToFavorites: false,
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Number</Form.Label>
        <Form.Control
          type="text"
          placeholder="Number"
          name="number"
          value={formData.number}
          onChange={handleInputChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check
          type="checkbox"
          label="Add to favorites"
          name="addToFavorites"
          checked={formData.addToFavorites}
          onChange={handleInputChange}
        />
      </Form.Group>

      <Button variant="outline-primary" type="submit">
        Add contact
      </Button>
    </Form>
  );
}

export default Forms;
