import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../redux/contactSlice';
import ContactCard from './ContactCard';
import Footer from './Footer';
import NavBar from './NavBar';
import Loader from './Loader';
import { Card } from 'react-bootstrap';

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
      <Card
        style={{ maxWidth: '38rem' }}
        border="primary"
        bg="light"
        text="dark"
        className="m-3 p-2 lh-base "
      >
        <NavBar />
        <ContactCard />
        <Footer />
      </Card>
    </div>
  );
};

export default App;
