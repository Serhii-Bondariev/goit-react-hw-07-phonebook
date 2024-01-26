import ListGroup from 'react-bootstrap/ListGroup';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors';

function ContactList() {
  const contacts = useSelector(selectVisibleContacts);

  return (
    <ListGroup as="ul" className="list-group-flush mt-4">
      <ListGroup.Item as="li" active>
        {contacts.map(item => ContactItem)}
      </ListGroup.Item>
    </ListGroup>
  );
}

export default ContactList;
