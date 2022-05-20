import { useState } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import useLocalStorage from 'hooks/useLocalStorage';

export default function App() {
  const [contacts, setContacts] = useLocalStorage('contacts', []);
  const [filter, setFilter] = useState('');

  const handleSubmit = (formData) => {
    if (contacts.find(contact => contact.name === formData.name)) {
      return alert(`${formData.name} is already in contacts`);
    }
    let id = nanoid();
    setContacts(prev => [...prev, {...formData, id}])
  }

  const handleFilter = event => {
    setFilter(event.target.value);
  }

  const handleDeleteItem = (contactId) => {
    setContacts(prev => prev.filter(item => item.id !== contactId))
  }
  
  const filterContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLocaleLowerCase())
  );
  
  return (
    <div style={{ alignItems: 'center', padding: '50px' }}>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={handleSubmit}/>
      <h2>Contacts</h2>
      <Filter value={filter} onFilterInput={handleFilter} />
      <ContactList formData={filterContacts} onDeleteBtnClick={handleDeleteItem}/>
    </div>
  );
}