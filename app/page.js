"use client";
import React, { useState } from "react";
import Link from "next/link";
import { contactAPI } from "./data/contactAPI";
import  ContactTable  from "./components/ContactTable";
import "./globals.css";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [allContacts] = useState(contactAPI.contacts);
  const [displayedContacts, setDisplayedContacts] = useState([]);


    const handleSubmit = (e) => {
    e.preventDefault();

    if (!searchTerm.trim()) {
      setDisplayedContacts([]);
      return;
    }

    const filtered = allContacts.filter(contact =>
      contact.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setDisplayedContacts(filtered);
    setSearchTerm("");
  };

    const handleDelete = (id) => {
      setDisplayedContacts(prev =>
      prev.filter(contact => contact.id !== id)
    );
  };

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
              <ContactTable contacts={displayedContacts} onDelete={handleDelete} />
        </div>
      </div>
    </div>
  );
}