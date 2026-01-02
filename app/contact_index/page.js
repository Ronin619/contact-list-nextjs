"use client";
import { useRouter } from 'next/navigation';
import ContactTable from "../components/ContactTable";
import { useContacts } from '../context/ContactsContext'; 
import Link from "next/link";

export default function ContactIndex() {
  const router = useRouter();
    const { contacts } = useContacts();

  const handleAddContactRoute = () => {
		router.push('/contactInfo/new');
	};

	return (
		<main>
			<div className="header">
				<h1>All Contacts</h1>
        <div className="d-flex justify-content-center align-items-center gap-4">
          <Link href="/">Home</Link>
          <button 
            type="button" 
            className="btn btn-primary"
            onClick={handleAddContactRoute}
            >
            ADD CONTACT
          </button>
        </div>
        <div className="row justify-content-center  mt-3">
            <div className="col-md-8">
              <ContactTable 
                contacts={contacts}
                showEdit={false}
                showDelete={false}
             />
            </div>
        </div>
      </div>
		</main>
	);
}