import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Buttons from './Buttons';

function Forms() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="name" placeholder="Enter name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Number</Form.Label>
        <Form.Control type="number" placeholder="Number" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Add to favorites" />
      </Form.Group>
      <Buttons />
    </Form>
  );
}

export default Forms;
