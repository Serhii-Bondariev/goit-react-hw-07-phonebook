/* eslint-disable */

import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectFilter } from '../redux/contactSlice'; // Змінено імпорт

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
};

export default Filter;
