import React, { useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../redux/contactSlice';
import Filter from '../components/filter';
import { Button, Modal } from 'react-bootstrap';
import { selectVisibleContacts } from '../redux/selectors';

const ContactList = () => {
  const dispatch = useDispatch();
  const visibleContacts = useSelector(selectVisibleContacts);

  const [showModal, setShowModal] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  const handleShowModal = contact => {
    setSelectedContact(contact);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedContact(null);
    setShowModal(false);
  };

  // Сортування контактів
  const sortedContacts = [...visibleContacts].sort((a, b) => b.id - a.id);

  return (
    <div>
      <Filter />
      <ListGroup>
        {sortedContacts.map(contact => (
          <ListGroup.Item
            key={contact.id}
            className="d-flex align-items-center"
          >
            <img
              src={contact.avatar}
              alt="Avatar"
              style={{
                boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.8)',
                borderRadius: '12%',
                width: '50px',
                height: '50px',
                marginRight: '10px',
                cursor: 'pointer',
              }}
              onClick={() => handleShowModal(contact)}
            />
            <div className="flex-grow-1">
              {contact.name} - {contact.phone}
            </div>
            {contact.addToFavorites && (
              <span style={{ margin: '15px' }}>⭐</span>
            )}
            <Button
              variant="outline-danger"
              size="sm"
              onClick={() => handleDeleteContact(contact.id)}
            >
              Delete
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
      {/* Модалка */}
      <Modal centered show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Contact Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={selectedContact?.avatar}
            alt="Avatar"
            style={{
              width: '100%',
              marginBottom: '10px',
              borderRadius: '2%',
              boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.8)',
            }}
          />
          <p>Name: {selectedContact?.name}</p>
          <p>Phone: {selectedContact?.phone}</p>
          <p>Email: {selectedContact?.email}</p>
          <p>Favorite: {selectedContact?.addToFavorites ? 'Yes' : 'No'}</p>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ContactList;
