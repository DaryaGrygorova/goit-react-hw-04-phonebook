import { GlobalStyle } from './GlobalStyle';
import { Box } from './Box';
import { useState, useEffect } from 'react';
import useLocalStorage from './hooks/useLocalStorage';

import Filter from './Filter';
import ContactForm from './ContactForm';
import Notification from './Notification';
import ContactList from './ContactList';
import Section from './Section';

export const App = () => {
  const [filter, setFilter] = useState('');
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [contacts, setContacts] = useLocalStorage('Contacts', []);

  useEffect(() => {
    const normalizedFilter = filter.toLowerCase();
    const newfilteredContacts = contacts?.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );

    setFilteredContacts(newfilteredContacts);
  }, [filter, contacts]);

  const formSubmitHandler = data => {
    const normalizedName = data.name.toLowerCase();

    contacts?.find(({ name }) => name.toLowerCase().includes(normalizedName))
      ? alert(`${data.name} is already in contacts.`)
      : setContacts(state => [...state, data]);
  };

  const deleteContact = contactsId => {
    const newContacts = contacts.filter(({ id }) => id !== contactsId);
    setContacts(newContacts);
  };

  const onChangeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  return (
    <Box>
      <h1>Phonebook</h1>

      <Section>
        <ContactForm formSubmitHandler={formSubmitHandler} />
      </Section>

      <Section title="Contacts">
        {contacts?.length ? (
          <Box
            display="flex"
            flexDirection="column"
            gridGap="10px"
            padding="0"
            margin="0 auto"
            maxWidth="650px"
          >
            <Filter value={filter} onChangeFilter={onChangeFilter} />
            <ContactList
              contacts={filteredContacts}
              onDeleteClick={deleteContact}
            />
          </Box>
        ) : (
          <Notification message="There are no contacts." />
        )}
      </Section>
      <GlobalStyle />
    </Box>
  );
};
