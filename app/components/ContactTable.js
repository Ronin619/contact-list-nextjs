/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import PropTypes from "prop-types";
import "../globals.css";

export default function ContactTable({ 
  contacts, onDelete, 
  showEdit = false,
  showDelete = false 
}) {

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
            {contacts.map(contact => (
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
                  {showEdit && (
                    <button className="editBtn">Edit</button>
                  )}
                  </td>
                <td>
                  {showDelete && onDelete && (
                    <button 
                      type="button" 
                      className="deleteBtn" 
                      onClick={() => onDelete(contact.id)}>
                      Delete
                    </button>
                  )}
                  </td>
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
    onDelete: PropTypes.func,
    showEdit: PropTypes.bool,
    showDelete: PropTypes.bool,
}