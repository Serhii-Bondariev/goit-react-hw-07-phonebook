// Navigation.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <div>
      <NavLink to="/register">register</NavLink>
      <NavLink to="/login">login</NavLink>
      <NavLink to="/contacts">contacts</NavLink>
    </div>
  );
}

export default Navigation;
