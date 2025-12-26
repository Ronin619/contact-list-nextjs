import { contactAPI } from "../data/contactAPI";

export default function Contacts() {

  const contacts = contactAPI.contacts;
  
  return (
    <div>
      <h1>Hello!</h1>
    </div>
  )
}