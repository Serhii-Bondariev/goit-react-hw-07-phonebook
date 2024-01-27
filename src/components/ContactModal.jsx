import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const ContactModal = ({ contact }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <img
        src={contact.avatar}
        alt="Avatar"
        style={{
          width: '50px',
          height: '50px',
          marginRight: '10px',
          cursor: 'pointer',
        }}
        onClick={handleShow}
      />

      <Modal
        dialogClassName="modal-700w"
        centered
        show={show}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>{contact.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={contact.avatar} alt="Avatar" style={{ width: '100%' }} />
          <p>Name: {contact.name}</p>
          <p>Phone: {contact.phone} </p>
          <p>Email: {contact.email}</p>
          <p>Favorite: {contact.addToFavorites ? 'Yes' : 'No'}</p>
          <p>Company; {contact.company}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default <ContactModal />;
