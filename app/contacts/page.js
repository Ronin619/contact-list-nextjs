import { contactAPI } from "../data/contactAPI";

export default function Contacts() {

  const contacts = contactAPI.contacts;
  
  return (
    <div>
      {contacts.map((contact) => (
        <p key={contact.phoneNumber}>{contact.name}</p>
    ))}
    </div>
  )
}