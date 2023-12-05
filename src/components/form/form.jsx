import css from './form.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectContacts } from 'redux/selectors';
import { addContact, fetchContacts } from 'redux/operations';

import Notiflix from 'notiflix';
import PropTypes from 'prop-types';

export default function Form() {
  const contacts = useSelector(selectContacts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const addNewContact = e => {
    e.preventDefault();
    const newName = e.target.name.value;
    const newNumber = e.target.number.value;

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === newName.toLowerCase()
      )
    ) {
      return Notiflix.Report.failure(
        'Error',
        `${newName} is already in contacts`,
        'OK'
      );
    }

    const newContact = {
      name: newName,
      number: newNumber,
    };

    dispatch(addContact(newContact));
  };

  return (
    <form className={css.form} onSubmit={addNewContact}>
      <label className={css.label}>
        <p>Name</p>
        <input
          type="text"
          name="name"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={css.label}>
        <p>Number</p>
        <input
          type="tel"
          name="number"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={css.button}>Add contact</button>
    </form>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
};
