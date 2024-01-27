// ContactList.js
import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../redux/contactSlice';
import Filter from './filter'; // Змінено імпорт
import { selectVisibleContacts } from '../redux/selectors';

function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectVisibleContacts);

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <div>
      <Filter /> {/* Додано компонент фільтрації */}
      <ListGroup>
        {contacts.map(contact => (
          <ListGroup.Item key={contact.id}>
            {contact.name} - {contact.number}
            <button onClick={() => handleDeleteContact(contact.id)}>
              Delete
            </button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

export default ContactList;
