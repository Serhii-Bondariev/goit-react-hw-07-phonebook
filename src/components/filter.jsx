// filter.jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectFilter } from '../redux/contactSlice'; // Змінено імпорт

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  return (
    <div>
      <h3>Find contacts by name </h3>
      {/* <input
        type="text"
        value={filter}
        onChange={e => {
          dispatch(changeFilter(e.target.value)); // Змінено setFilter на changeFilter
        }}
        placeholder="Enter name"
      /> */}
    </div>
  );
};

export default Filter;
