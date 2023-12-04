import ContactList from './contacts/Contacts';
import Form from './form/form';
import Section from './section/section';
import Filter from './filter/filter';

import { useDispatch, useSelector } from 'react-redux';
import { addContact, fetchContacts } from 'redux/operations';
import { useEffect } from 'react';
import { filterContacts } from 'redux/filterSlice';
import Notiflix from 'notiflix';

function Phonebook() {
  const contacts = useSelector(state => state.phonebook.contacts);
  const filter = useSelector(state => state.filter.filter);

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

  const handleDeleteContact = e => {
    const contactId = e.target.id;
    console.log(contactId);
    // dispatch(deleteContact(contactId));
  };

  const handleChange = e => {
    dispatch(filterContacts(e.target.value));
  };

  const filteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const preventSubmit = e => {
    e.preventDefault();
  };

  return (
    <div>
      <Section title="Phonebook">
        <Form onSubmit={addNewContact} />
      </Section>
      <Section title="Contacts">
        <ContactList
          contacts={filteredContacts()}
          onClick={handleDeleteContact}
        >
          <Filter onChange={handleChange} onSubmit={preventSubmit} />
        </ContactList>
      </Section>
    </div>
  );
}

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        fontSize: 25,
        color: '#010101',
      }}
    >
      <Phonebook />
    </div>
  );
};
