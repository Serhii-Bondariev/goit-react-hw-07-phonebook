import React from 'react';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { addContact } from '../redux/contactSlice';

function Buttons() {
  const dispatch = useDispatch();

  const handleAddContact = () => {
    // Додайте логіку для відкриття модального вікна чи іншої дії перед відправленням екшену
    dispatch(addContact(/* дані нового контакту */));
  };

  return (
    <>
      <Button variant="outline-primary" onClick={handleAddContact}>
        Add contact
      </Button>
    </>
  );
}

export default Buttons;
