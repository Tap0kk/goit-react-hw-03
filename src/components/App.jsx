import s from './App.module.css';
import ContactForm from './ContactForm/ContactForm';
import SearchBox from './SearchBox/SearchBox';
import ContactList from './ContactList/ContactList';
import { useEffect, useState } from 'react';
import contactsList from '../assets/contacts.json';
import { nanoid } from 'nanoid';

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem('contact');
    return savedContacts ? JSON.parse(savedContacts) : contactsList;
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contact', JSON.stringify(contacts));
  }, [contacts]);

  const filterContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const addNewNumber = (name, number) => {
    const newNumber = {
      id: nanoid(),
      name: name,
      number: number,
    };
    setContacts(prev => [...prev, newNumber]);
  };
  const deleteContact = id => {
    setContacts(prev => prev.filter(contact => contact.id !== id));
  };

  return (
    <div className={s.bodyWrapper}>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={addNewNumber} />
      <SearchBox filter={filter} setFilter={setFilter} />
      <ContactList onContacts={filterContacts} onDelete={deleteContact} />
    </div>
  );
};

export default App;
