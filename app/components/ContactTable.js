import Image from "next/image";

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
                            <Image
                              src={contact.imageURL}
                              alt={contact.name}
                              width={50}      
                              height={50} 
                              className="roundImage"
                            />
                          </td>
                          <td>{contact.name}</td>
                          <td>{contact.email}</td>
                          <td>{contact.Phone_number}</td>
                          {showEdit && (
                          <td><button type="button" className="editBtn">Edit</button>
                          </td>
                          )}
                        </tr>))}
                    </tbody>
                  </table>
  )
}