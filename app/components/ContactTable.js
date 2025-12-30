/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useState } from "react";
import PropTypes from "prop-types";
import "../globals.css";

export default function ContactTable({contacts}) {
  const [contactList, setContactList] = useState(contacts);

  const handleDelete = (id) => {
    const filteredList = contactList.filter((contact) => contact.id !== id);

    setContactList(filteredList);
  }

  return (
    <table className="table mt-5">
      <thead>
        <tr>
          <th scope="col">Profile Pic</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Phone</th>
          <th scope="col"></th>
        </tr>
      </thead>
         <tbody>
            {contactList.map(contact => (
              <tr key={contact.id}>
                <td>
                  <img
                    src={contact.imageURL}
                    alt={contact.name}
                    width={50}
                    height={50}
                    className="roundImage"
                    />
                </td>
                <td>
                  <Link href={`/contactInfo/${contact.id}`}>
                    {contact.name}
                   </Link>
                </td>
                <td>{contact.email}</td>
                <td>{contact.phone_Number}</td>
                <td>
                <Link href={`/contactInfo/${contact.id}/edit`}>
                  Edit
                </Link>
                  </td>
                <td><button type="button" className="deleteBtn" onClick={() => handleDelete(contact.id)}>Delete</button></td>
              </tr>))}
          </tbody>
     </table>
  )
}

ContactTable.propTypes = {
   contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string,
      imageURL: PropTypes.string,
      phone_Number: PropTypes.string,
    })
  ).isRequired,

    showEdit: PropTypes.bool,
}