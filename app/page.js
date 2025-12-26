"use client";
import React, { useState } from "react";
import Link from "next/link";
import { contactAPI } from "./data/contactAPI";
import Image from "next/image";
import "./globals.css";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredContacts, setFilteredContacts] = useState([]);

  const contacts = contactAPI.contacts;

  const handleSubmit = (e) => {
    e.preventDefault();

    const filteredResult= contacts.filter(contact => 
      contact.name.toLowerCase().includes(searchTerm.toLowerCase())
    )

    setFilteredContacts(filteredResult);
  }

  return (
    <div className="container mt-3">
      <div className="row justify-content-center text-center">
        <div className="col-md-8">
          <h1 className="mb-3">Welcome To Your Contact List!</h1>
            <Link href="/contact_index">All Contacts</Link>
            <div className="input-group mt-3">
              <input
                className="form-control"
                type="text"
                placeholder="Search Contacts"
                aria-label="Search Contacts"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)} 
              />
              <button type="button" className="btn btn-primary ms-2 rounded" onClick={handleSubmit}>Search</button>
            </div>
        </div>
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
   {filteredContacts.length > 0 ? (
    filteredContacts.map(contact => (
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
        <td>
          <Link href="/contacts">{contact.name}</Link> 
        </td>
        <td>{contact.email}</td>
        <td>{contact.Phone_number}</td>
        <td><button type="button" className="editBtn">Edit</button>
        </td>
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan="4" className="text-center">
        No results
      </td>
    </tr>
  )}
  </tbody>
</table>
      </div>
    </div>
  );
}