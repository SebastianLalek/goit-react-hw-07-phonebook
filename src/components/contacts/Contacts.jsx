import { useDispatch, useSelector } from 'react-redux';
import css from './Contacts.module.css';

import PropTypes from 'prop-types';
import { deleteContact } from 'redux/operations';
import { selectContacts, selectFilter } from 'redux/selectors';

export default function ContactList({ children }) {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();

  const handleDeleteContact = e => {
    const contactId = e.target.id;
    dispatch(deleteContact(contactId));
  };

  const filteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <>
      {children}
      <ul className={css.list}>
        {filteredContacts().map(contact => (
          <li key={contact.id}>
            {contact.name}: {contact.number}
            <button
              className={css.button}
              id={contact.id}
              onClick={handleDeleteContact}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.array,
  children: PropTypes.object,
  onClick: PropTypes.func,
};
