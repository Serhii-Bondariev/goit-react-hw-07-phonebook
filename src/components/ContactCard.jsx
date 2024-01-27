import { Card } from 'react-bootstrap';
import Forms from './Forms';
import Logo from '../Images/Phonebook_logo.png';
import ContactList from './ContactList';

const ContactCard = () => {
  return (
    <div>
      <Card>
        <Card.Img
          variant="top"
          src={Logo}
          alt="logo"
          style={{
            width: '100px',
            height: '100px',
            margin: '10px',
            float: 'right',
          }}
        />
        <Card.Body>
          <Card.Title>Add new contact</Card.Title>
          <Forms />
          <ContactList />
        </Card.Body>
      </Card>
    </div>
  );
};

export default ContactCard;
