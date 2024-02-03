// src/components/Contacts.jsx
import React from 'react';

const Contacts = () => {
  return;
  <div>
    <div>Contacts Component</div>;
    <ul>
      {Array.isArray(contacts) &&
        contacts.map(contact => <li key={contact.id}>{contact.name}</li>)}
    </ul>
  </div>;
};

export default Contacts;
