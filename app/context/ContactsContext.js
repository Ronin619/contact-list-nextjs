import { createContext, useState, useContext } from "react";
import { contactAPI } from "../data/contactAPI";

const ContactsContext = createContext();

export const ContactsProvider = ({ children }) => {
  const [contacts, setContacts] = useState(contactAPI.contacts);

  const deleteContact = (id) => {
    setContacts(prev => prev.filter(c => c.id !== id));
  };

  return (
    <ContactsContext.Provider value={{ contacts, setContacts, deleteContact }}>
      {children}
    </ContactsContext.Provider>
  );
};

export const useContacts = () => useContext(ContactsContext);
