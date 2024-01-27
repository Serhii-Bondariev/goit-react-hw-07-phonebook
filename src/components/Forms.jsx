import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Buttons from './Buttons';
import { useDispatch } from 'react-redux';
import { addContact } from '../redux/contactSlice';

function Forms() {
  const dispatch = useDispatch();
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

    // Відправляємо дані для додавання контакту через Redux Thunk
    dispatch(addContact(formData));

    // Скидаємо форму після відправки
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

      <Buttons />
    </Form>
  );
}

export default Forms;
