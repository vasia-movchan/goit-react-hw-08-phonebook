import { useState, useEffect } from 'react';
import Form from 'components/Form/Form';
import Contacts from 'components/Contacts/Contacts';
import Find from 'components/Find/Find';
import styled from 'styled-components';

const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = contact => {
    const repeatedContact = contacts.find(elem => elem.name === contact.name);
    if (repeatedContact) {
      alert(`${repeatedContact.name} is already in contacts`);
    } else {
      setContacts([contact, ...contacts]);
    }
  };

  const handleFindInput = event => {
    setFilter(event.currentTarget.value.toLowerCase());
  };

  const contactsList = contacts => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  };

  const deleteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  return (
    <Wrapper>
      <h1>Phonebook</h1>
      <Form onSubmit={addContact}></Form>
      <h2>Contacts</h2>
      <Find inputValue={filter} onFindInput={handleFindInput} />
      <Contacts
        contacts={contactsList(contacts)}
        onDelete={deleteContact}
      ></Contacts>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 8px;
  width: 400px;
  margin: 0 auto;
  background-color: #c2e0fa;
  border-radius: 4px;
  box-shadow: 2px 3px 13px 0px rgba(0, 0, 0, 0.73); ;
`;

export default App;
