import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../redux/contactSlice';
import ContactList from './ContactList';
import ContactForm from './ContactForm';
import ContactCard from './ContactCard';
import Footer from './Footer';
import NavBar from './NavBar';
import Loader from './Loader';

const App = () => {
  const isLoading = useSelector(state => state.contacts.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="App">
      <NavBar />

      <ContactForm />
      {/* <ContactCard /> */}
      <ContactList />
      {/* <Footer /> */}
    </div>
  );
};

export default App;
