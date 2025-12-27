"use client";
import Link from "next/link";

export default function AddContact() {

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Hello!")
  }

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="border p-4 rounded">
        <h1>Add New Contact</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="formGroupExampleInput" className="form-label">Name</label>
              <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter name"/>
            </div>
          <div className="mb-3">
            <label htmlFor="formGroupExampleInput2" className="form-label">Email</label>
            <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Enter email"/>
          </div>
          <div className="mb-3">
            <label htmlFor="formGroupExampleInput3" className="form-label">Image URL</label>
            <input type="text" className="form-control" id="formGroupExampleInput3" placeholder="Enter image url"/>
          </div>
          <div className="mb-3">
            <label htmlFor="formGroupExampleInput4" className="form-label">Phone Number</label>
            <input type="text" className="form-control" id="formGroupExampleInput4" placeholder="Enter phone number"/>
          </div>
          <div className="d-flex align-items-center gap-5">
            <Link href="/contact_index">Back</Link>
            <button type="submit" className="btn btn-primary ms-5">Add New Contact</button>
          </div>
        </form>
      </div>
    </div>
  )
}