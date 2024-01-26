import ContactsDropdown from 'react-bootstrap/Dropdown';
import ContactList from './ContactList';
import Dropdown from 'react-bootstrap/Dropdown';

function BasicExample() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <ContactList />
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default ContactsDropdown;
