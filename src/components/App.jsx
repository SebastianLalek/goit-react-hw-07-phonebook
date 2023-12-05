import ContactList from './contacts/Contacts';
import Form from './form/form';
import Section from './section/section';
import Filter from './filter/filter';

function Phonebook() {
  return (
    <div>
      <Section title="Phonebook">
        <Form />
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
