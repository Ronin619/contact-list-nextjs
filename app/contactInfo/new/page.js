"use client";
import { useRouter } from "next/navigation";
import { contactAPI } from "../../data/contactAPI";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import "../../globals.css"

export default function AddContact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [image, setImage] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")

  const router = useRouter();

  const contacts = contactAPI.contacts;

  const handleSubmit = (e) => {
    e.preventDefault();

    const contactInfo = {
      id: uuid().slice(0, 8),
      name: name, 
      email: email, 
      imageURL: image, 
      phone_Number: phoneNumber 
    }

    contacts.push(contactInfo)

    setName("")
    setEmail("")
    setImage("")
    setPhoneNumber("")

    router.push("/contact_index");
  }

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="border p-4 rounded">
        <h1>Add New Contact</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="nameInput" className="form-label">Name</label>
              <input 
                type="text" 
                className="form-control" 
                id="nameInput" 
                placeholder="Enter name"
                value={name} 
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          <div className="mb-3">
            <label htmlFor="emailInput" className="form-label">Email</label>
            <input 
              type="email" 
              className="form-control" 
              id="emailInput" 
              placeholder="Enter email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="imageInput" className="form-label">Image URL</label>
            <input 
              type="text" 
              className="form-control" 
              id="imageInput" 
              placeholder="Enter image url"
              value={image} 
              onChange={(e) => setImage(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phoneNumberInput" className="form-label">Phone Number</label>
            <input 
              type="number" 
              className="form-control no-arrows" 
              id="phoneNumberInput" 
              placeholder="Enter phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div className="d-flex align-items-center gap-5">
            <button type="submit" className="btn btn-primary ms-5">Add New Contact</button>
          </div>
        </form>
      </div>
    </div>
  )
}