/* eslint-disable @next/next/no-img-element */
'use client';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { contactAPI } from "../../data/contactAPI";
import "../../globals.css";

export default function ContactInfo() {
  const params = useParams();
  const { id } = params;

  const contacts = contactAPI.contacts;
  const contact = contacts.filter(data => data.id === id);

  return (
      contact ? (
          <div className="d-flex justify-content-center align-items-center vh-100">
           <Link href="/contact_index" className="back-link">Back</Link>
            <div className="card p-4 shadow" style={{ maxWidth: "400px", width: "100%" }}>
              <h1 className="h4 mb-3 text-center">Contact Info</h1>
              <h2 className="text-center mb-3">{contact[0].name}</h2>
              <div className="text-center mb-3">
                <img
                  src={contact[0].imageURL}
                  alt={contact[0].name}
                  width="150"
                  height="150"         
                />
              </div>
              <p className="mb-1 text-center">{contact[0].email}</p>
              <p className="mb-1 text-center">{contact[0].phone_Number}</p>
            </div>
          </div>
      ) :
        <p>No Contact Found</p>
  )}
