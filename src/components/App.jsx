import ContactList from './contacts/Contacts';
import Form from './form/form';
import Section from './section/section';
import Filter from './filter/filter';

import { useDispatch, useSelector } from 'react-redux';
// import {
//   addContact,
//   deleteContact,
//   filterContacts,
// } from 'redux/contactsSlice';
import { nanoid } from '@reduxjs/toolkit';
import { addContact } from 'redux/operations';
import { useEffect } from 'react';

function Phonebook() {
  const contacts = useSelector(state => state.phonebook.contacts);
  const filter = useSelector(state => state.phonebook.filter);

  const dispatch = useDispatch();

  const addNewContact = e => {
    e.preventDefault();
    const newName = e.target.name.value;
    const newNumber = e.target.number.value;

    const newContact = {
      // id: nanoid(),
      name: newName,
      number: newNumber,
    };

    dispatch(addContact(newContact));
  };

  const handleDeleteContact = e => {
    const contactId = e.target.id;
    console.log(contactId)
    // dispatch(deleteContact(contactId));
  };

  const handleChange = e => {
    console.log(e)
    // dispatch(filterContacts(e.target.value));
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
          contacts={contacts}
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
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 25,
        color: '#010101',
      }}
    >
      <Phonebook />
    </div>
  );
};
