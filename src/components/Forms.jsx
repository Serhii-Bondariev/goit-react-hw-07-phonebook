import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../redux/contactSlice';
import { Button } from 'react-bootstrap';
import { selectContacts } from '../redux/selectors';

function Forms() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const [formData, setFormData] = useState({
    name: '',
    number: '',
    addToFavorites: false,
  });

  const nameRegex = /^[a-zA-Zа-яА-ЯіІїЇєЄёЁ' -]+$/; // Регулярний вираз для імен
  const phoneRegex = /^[0-9]+$/; // Регулярний вираз для номерів

  const handleInputChange = e => {
    const { name, value, type, checked } = e.target;
    let inputValue = type === 'checkbox' ? checked : value;

    // Валідація для імен і номерів
    if (name === 'name' && !nameRegex.test(inputValue)) {
      inputValue = formData.name; // Не оновлюємо значення, якщо не відповідає регулярному виразу
    } else if (name === 'phone' && !phoneRegex.test(inputValue)) {
      inputValue = formData.phone; // Не оновлюємо значення, якщо не відповідає регулярному виразу
    }

    setFormData(prevData => ({
      ...prevData,
      [name]: inputValue,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    // Перевірка, чи існує контакт із таким ім'ям чи номером
    const existingContact = contacts.find(
      contact =>
        contact.name.toLowerCase() === formData.name.toLowerCase() ||
        contact.phone === formData.phone
    );

    if (existingContact) {
      alert('Цей контакт вже існує!');
      return; // Не додаємо контакт, якщо він вже існує
    }

    // Відправляємо дані для додавання контакту через Redux Thunk
    dispatch(addContact(formData));

    // Скидаємо форму після відправки
    setFormData({
      name: '',
      phone: '',
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
        <Form.Label>Phone</Form.Label>
        <Form.Control
          type="text"
          placeholder="Phone number"
          name="phone"
          value={formData.phone}
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

      <Button className="mb-3" variant="outline-primary" type="submit">
        Add contact
      </Button>

      {formData.addToFavorites}
    </Form>
  );
}

export default Forms;
