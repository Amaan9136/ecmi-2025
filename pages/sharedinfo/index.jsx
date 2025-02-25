import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { database } from "../../server/firebase";

const SharedInfo = () => {
  const [contacts, setContacts] = useState([]);
  const [newsletters, setNewsletters] = useState([]);

  useEffect(() => {
    // Fetch contacts from Firebase
    const contactsRef = ref(database, "contacts");
    onValue(contactsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setContacts(Object.values(data));
      }
    });

    // Fetch newsletter subscriptions from Firebase
    const newsletterRef = ref(database, "newsletter");
    onValue(newsletterRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setNewsletters(Object.values(data));
      }
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation Bar */}
      <nav className="bg-gray-800 p-4 fixed w-full top-0 shadow-md">
        <div className="max-w-4xl mx-auto flex justify-center space-x-6">
          <a href="#contact" className="text-cyan-400 hover:text-cyan-300 transition">Contact</a>
          <a href="#newsletter" className="text-yellow-400 hover:text-yellow-300 transition">Newsletter</a>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto text-center pt-20 pb-6">
        <h1 className="text-4xl font-bold text-purple-400">Shared Information From DB</h1>
      </div>

      {/* Contact Information */}
      <div id="contact" className="max-w-4xl mx-auto bg-gray-800 rounded-lg p-6 shadow-lg mt-6">
        <h2 className="text-2xl font-semibold text-cyan-400 mb-4">Contact Details</h2>
        <ul className="space-y-3">
          {contacts.length > 0 ? (
            contacts.map((contact, index) => (
              <li key={index} className="p-4 bg-gray-700 rounded-md shadow">
                <p><strong>Name:</strong> {contact.name}</p>
                <p><strong>Email:</strong> {contact.email}</p>
                <p><strong>Subject:</strong> {contact.subject}</p>
                <p><strong>Message:</strong> {contact.message}</p>
              </li>
            ))
          ) : (
            <p className="text-gray-400">No contact details available.</p>
          )}
        </ul>
      </div>

      {/* Newsletter Subscriptions */}
      <div id="newsletter" className="max-w-4xl mx-auto bg-gray-800 rounded-lg p-6 shadow-lg mt-8">
        <h2 className="text-2xl font-semibold text-yellow-400 mb-4">Newsletter Subscribers</h2>
        <ul className="space-y-3">
          {newsletters.length > 0 ? (
            newsletters.map((subscriber, index) => (
              <li key={index} className="p-4 bg-gray-700 rounded-md shadow">
                <p><strong>Email:</strong> {subscriber.email}</p>
              </li>
            ))
          ) : (
            <p className="text-gray-400">No newsletter subscribers available.</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default SharedInfo;
