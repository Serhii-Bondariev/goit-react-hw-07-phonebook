// ContactList.jsx
import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from '../redux/selectors';

const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);

  return (
    <div>
      <h2>Contacts</h2>
      <ListGroup>
        {contacts.map(contact => (
          <ListGroup.Item key={contact.id}>
            {contact.name} - {contact.phone}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default ContactList;
