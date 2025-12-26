"use client";
import { useRouter } from 'next/navigation';

export default function ContactIndex() {
  const router = useRouter();

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
            <input
              className="form-control"
              type="text"
              placeholder="Search Contacts"
              aria-label="Search Contacts"
            />
          </div>
        </div>
			</div>
		</main>
	);
}