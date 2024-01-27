import { Card } from 'react-bootstrap';
import Forms from './Forms';
import Logo from '../Images/Phonebook_logo.png';
import { addContact } from '../redux/contactSlice';

const ContactCard = () => {
  return (
    <div>
      <Card>
        <Card.Img
          variant="top"
          src={Logo}
          alt="logo"
          style={{ width: '100px', height: '100px' }}
        />
        <Card.Body>
          <Card.Title>Add new contact</Card.Title>
          <Forms />
        </Card.Body>
      </Card>
    </div>
  );
};

export default ContactCard;
