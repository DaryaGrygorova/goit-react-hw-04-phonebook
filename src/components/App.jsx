import { GlobalStyle } from './GlobalStyle';
import { Box } from './Box';
import { Component } from 'react';

import Filter from './Filter';
import ContactForm from './ContactForm';
import Notification from './Notification';
import ContactList from './ContactList';
import Section from './Section';

export class App extends Component {
  state = {
    contacts: [
      // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem('Contacts'));
    if (contacts) {
      this.setState({ contacts: contacts });
    }
  }

  componentDidUpdate(prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('Contacts', JSON.stringify(this.state.contacts));
    }
  }

  formSubmitHandler = data => {
    const { contacts } = this.state;
    const normalizedName = data.name.toLowerCase();

    contacts.find(({ name }) => name.toLowerCase().includes(normalizedName))
      ? alert(`${data.name} is already in contacts.`)
      : this.setState(prevState => ({
          contacts: [...prevState.contacts, data],
        }));
  };

  deleteContact = deleteId => {
    const { contacts } = this.state;
    const newContacts = contacts.filter(({ id }) => id !== deleteId);
    this.setState({ contacts: [...newContacts] });
  };

  onChangeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.getFilteredContacts();

    return (
      <Box>
        <h1>Phonebook</h1>

        <Section>
          <ContactForm formSubmitHandler={this.formSubmitHandler} />
        </Section>

        <Section title="Contacts">
          {this.state.contacts.length ? (
            <Box
              display="flex"
              flexDirection="column"
              gridGap="10px"
              padding="0"
              margin="0 auto"
              maxWidth="650px"
            >
              <Filter value={filter} onChangeFilter={this.onChangeFilter} />
              <ContactList
                contacts={filteredContacts}
                onDeleteClick={this.deleteContact}
              />
            </Box>
          ) : (
            <Notification message="There are no contacts." />
          )}
        </Section>
        <GlobalStyle />
      </Box>
    );
  }
}
