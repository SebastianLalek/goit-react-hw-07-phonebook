import ContactList from './contacts/Contacts';
import Form from './form/form';
import Section from './section/section';
import Filter from './filter/filter';

import { useDispatch, useSelector } from 'react-redux';
import { addContact, fetchContacts } from 'redux/operations';
import { useEffect } from 'react';
import Notiflix from 'notiflix';
import { selectContacts } from 'redux/selectors';

function Phonebook() {
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
    <div>
      <Section title="Phonebook">
        <Form onSubmit={addNewContact} />
      </Section>
      <Section title="Contacts">
        <ContactList>
          <Filter />
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
