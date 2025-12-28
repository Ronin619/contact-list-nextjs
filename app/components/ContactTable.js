/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export default function ContactTable({contacts, showEdit}) {
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
                              loading="lazy"
                            />
                          </td>
                          <td>
                            <Link href={`/contactInfo/${contact.id}`}>
                              {contact.name}
                            </Link>
                          </td>
                          <td>{contact.email}</td>
                          <td>{contact.phone_Number}</td>
                          {showEdit && (
                          <td><button type="button" className="editBtn">Edit</button>
                          </td>
                          )}
                        </tr>))}
                    </tbody>
                  </table>
  )
}