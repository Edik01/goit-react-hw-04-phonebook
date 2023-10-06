import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Section } from './Section/Section';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    if (contacts) {
      this.setState({ contacts: JSON.parse(contacts) });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }
  onSubmit = newContact => {
    if (
      this.state.contacts.find(contact => {
        return contact.name === newContact.name;
      })
    ) {
      alert(`${newContact.name} is already in contacts`);
      return;
    }
    this.setState(prev => ({
      contacts: [...prev.contacts, newContact],
    }));
  };
  onDeleteContact = id => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(contact => {
        return contact.id !== id;
      }),
    }));
  };
  handleChange = value => {
    this.setState({ filter: value });
  };
  getVisibleContacts = () => {
    return this.state.contacts.filter(contact => {
      return contact.name
        .toLowerCase()
        .includes(this.state.filter.toLowerCase());
    });
  };
  render() {
    return (
      <>
        <Section title="Phonebook">
          <ContactForm onSubmit={this.onSubmit} />
        </Section>
        <Section title={'contacts'}>
          <Filter filter={this.state.filter} handleChange={this.handleChange} />
          <ContactList
            contacts={this.getVisibleContacts()}
            handleClick={this.onDeleteContact}
          />
        </Section>
      </>
    );
  }
}
