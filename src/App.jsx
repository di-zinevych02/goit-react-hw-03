import { useState } from "react";
import ContactList from "./components/ContactList/ContactList";
import initialContacts from "./contacts.json";
import "./App.css";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";

export default function App() {
  const [contacts, setContacts] = useState(initialContacts);
  const [search, setSearch] = useState("");

  // const addContacts = (newContacts) => {
  //   setContacts((prevContacts) => {
  //     return [...prevContacts, newContacts];
  //   });
  // };

  const deleteContacts = (contactId) => {
    setContacts(prevContacts => {
      return prevContacts.filter((contact) => contact.id !== contactId);
    });
  };
  //При кожному оновленні двох станів(contacts or search) буде відфільтровуватись значення
  const visibleContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(search.toLowerCase())
);
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox value={search} onSearch={setSearch}/>
      <ContactList contacts={visibleContacts} onDelete={deleteContacts}/>
    </div>
  );
}
