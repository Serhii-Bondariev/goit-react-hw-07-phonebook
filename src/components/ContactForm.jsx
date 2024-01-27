import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { ErrorMessage, Field, Formik } from 'formik';
import { Form, FormGroup, FormLabel, Button } from 'react-bootstrap';
import { operationAddContact } from '../redux/operations';
import { selectContacts } from '../redux/selectors';
import * as Yup from 'yup';

const contactSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  number: Yup.string()
    .matches(/^\d+$/, 'Must be only digits')
    .required('Number is required'),
});

const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const addNewContact = newContact => {
    const hasContact = contacts.some(
      ({ name }) => name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (hasContact) {
      alert(`${newContact.name} is already in contacts`);
      return;
    }

    const finalContact = {
      ...newContact,
    };

    dispatch(operationAddContact(finalContact));
  };

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
        id: nanoid(),
      }}
      validationSchema={contactSchema}
      onSubmit={(values, { resetForm, setSubmitting }) => {
        addNewContact(values);
        resetForm({
          values: {
            name: '',
            number: '',
            id: nanoid(),
          },
        });
        setSubmitting(false);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <FormGroup controlId="name">
            <FormLabel>Name</FormLabel>
            <Field
              type="text"
              name="name"
              placeholder="Enter name"
              as={Form.Control}
              isInvalid={!!errors.name && !!touched.name}
            />
            <ErrorMessage
              name="name"
              component={Form.Control.Feedback}
              type="invalid"
            />
          </FormGroup>
          <FormGroup controlId="number">
            <FormLabel>Number</FormLabel>
            <Field
              type="text"
              name="number"
              placeholder="Enter number"
              as={Form.Control}
              isInvalid={!!errors.number && !!touched.number}
            />
            <ErrorMessage
              name="number"
              component={Form.Control.Feedback}
              type="invalid"
            />
          </FormGroup>
          <Button type="submit">Add contact</Button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
