import React from 'react';
import css from './App.module.css';
import NavBar from './NavBar';
import Footer from './Footer';
import ContactCard from './ContactCard';

const App = () => {
  return (
    <div className={css.App}>
      <NavBar />
      <ContactCard />
      <Footer />
    </div>
  );
};

export default App;
