"use client";
import { useRouter } from 'next/navigation';
import { contactAPI } from "../data/contactAPI";
import ContactTable from "../components/ContactTable";

export default function ContactIndex() {
  const router = useRouter();

  const contacts = contactAPI.contacts;

  	const handleAddContactRoute = () => {
		  router.push('/contacts/new');
	};

	return (
		<main>
			<div className="header">
				<h1>All Contacts</h1>
        <button 
          type="button" 
          className="btn btn-primary"
          onClick={handleAddContactRoute}
          >
          ADD CONTACT
        </button>
        <div className="row justify-content-center  mt-3">
            <div className="col-md-8">
              <ContactTable contacts={contacts} showEdit={false}/>
            </div>
        </div>
      </div>
		</main>
	);
}