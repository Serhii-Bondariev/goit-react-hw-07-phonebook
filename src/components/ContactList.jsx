// ContactList.js
import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, toggleFavorite } from '../redux/contactSlice';
import Filter from '../components/filter';
import { selectVisibleContacts } from '../redux/selectors';
import { Button, Image } from 'react-bootstrap';

// Ваш існуючий код

function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectVisibleContacts);

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <div>
      <Filter />

      <ListGroup>
        {contacts.map(contact => (
          <ListGroup.Item key={contact.id}>
            {contact.name} - {contact.number}
            {contact.addToFavorites && (
              <span style={{ marginRight: '5px' }}>⭐</span>
            )}
            <Button
              variant="danger"
              size="sm"
              style={{ marginRight: '10px' }}
              onClick={() => handleDeleteContact(contact.id)}
            >
              Delete
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

export default ContactList;
