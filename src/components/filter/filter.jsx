import { useDispatch } from 'react-redux';
import css from './filter.module.css';

import PropTypes from 'prop-types';
import { filterContacts } from 'redux/filterSlice';

export default function Filter() {
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(filterContacts(e.target.value));
  };

  const preventSubmit = e => {
    e.preventDefault();
  };

  return (
    <form onSubmit={preventSubmit}>
      <label className={css.label}>
        <p>Find your contact by name</p>
        <input type="text" name="filter" onChange={handleChange} />
      </label>
    </form>
  );
}

Filter.propTypes = {
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
};
