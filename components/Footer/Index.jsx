import { push, ref } from "firebase/database";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { database } from "../../server/firebase";
import { socialsMedia } from "./data";

const Footer = () => {
  const { register: registerNewsletter, handleSubmit: handleNewsletterSubmit, reset: resetNewsletter } = useForm();
  const { register: registerContact, handleSubmit: handleContactSubmit, reset: resetContact } = useForm();

  const [newsletterSent, setNewsletterSent] = useState(false);
  const [contactSent, setContactSent] = useState(false);

  const onSubmitNewsletter = async (data) => {
    try {
      await push(ref(database, "newsletter"), { email: data.newsletterEmail });
      setNewsletterSent(true);
      resetNewsletter();
      setTimeout(() => setNewsletterSent(false), 3000);
    } catch (error) {
      console.error("Error storing newsletter email: ", error);
    }
  };

  const onSubmitContact = async (data) => {
    try {
      await push(ref(database, "contacts"), {
        name: data.name,
        email: data.contactEmail,
        subject: data.subject,
        message: data.message,
      });
      setContactSent(true);
      resetContact();
      setTimeout(() => setContactSent(false), 3000);
    } catch (error) {
      console.error("Error storing contact message: ", error);
    }
  };

  return (
    <footer className="relative bg-gray-800 text-gray-200 py-16 px-8 md:px-16 mt-4">
      <div className="grid md:grid-cols-3 gap-12">
        <div>
          <h2 className="text-3xl font-bold text-purple-400">ECMI-2026</h2>
          <p className="my-2 text-gray-300">Adichunchanagiri Institute of Technology (AIT), Chikkamagaluru, Karnataka, India</p>
          <div className="my-2">
            {/* <p><strong>Phone:</strong> +91 7795361426 (Prof. Madhuprakash)</p>
            <p><strong>Phone:</strong> +91 8073552210 (Prof. Nagaveni C R)</p>
            <p><strong>Phone:</strong> +91 9164280757 (Prof. RaghuKumar B S)</p>
            <p><strong>Phone:</strong> +91 9035903549 (Prof. Rajappa H S)</p>
            <p><strong>Phone:</strong> +91 9448554971 (Dr. Goutham M A)</p> */}
            <p><strong>Email:</strong> ecmi2025@aitckm.in</p>
            <p><strong>Web:</strong> <a href="https://aitecmi.com" className="text-purple-400 hover:underline">aitecmi.com</a></p>
          </div>
          <div className="flex gap-4 mt-4 text-4xl">
            {socialsMedia.map((item, index) => (
              <a key={index} href={item.redirect} target="_blank" rel="noopener noreferrer">
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div>
          <h3 className="text-2xl font-semibold text-cyan-300">Stay Connected</h3>
          <p className="text-gray-400 mt-2">Subscribe to our newsletter for the latest updates.</p>
          <form onSubmit={handleNewsletterSubmit(onSubmitNewsletter)} className="mt-4 flex flex-col gap-3">
            <input {...registerNewsletter("newsletterEmail")} type="email" placeholder="Enter your email" className="p-3 rounded-md border border-cyan-400 bg-gray-700 text-white focus:outline-none" required />
            <button type="submit" className="p-3 bg-cyan-400 hover:bg-cyan-500 text-gray-900 rounded-md transition">Subscribe</button>
          </form>
          {newsletterSent && <p className="text-cyan-300 mt-2">Subscribed Successfully!</p>}
        </div>

        {/* Contact Form */}
        <div>
          <h3 className="text-2xl font-semibold text-green-300">Contact Us</h3>
          <form onSubmit={handleContactSubmit(onSubmitContact)} className="mt-4 space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <input {...registerContact("name")} type="text" placeholder="Your Name" className="p-3 border border-green-400 bg-gray-700 text-white rounded-md" required />
              <input {...registerContact("contactEmail")} type="email" placeholder="Your Email" className="p-3 border border-green-400 bg-gray-700 text-white rounded-md" required />
            </div>
            <input {...registerContact("subject")} type="text" placeholder="Subject" className="p-3 w-full border border-green-400 bg-gray-700 text-white rounded-md" required />
            <textarea {...registerContact("message")} placeholder="Message" className="p-3 w-full h-28 border border-green-400 bg-gray-700 text-white rounded-md" required></textarea>
            <button type="submit" className="w-full p-3 bg-green-400 hover:bg-green-500 text-gray-900 rounded-md transition">Send Message</button>
          </form>
          {contactSent && <p className="text-green-300 mt-2">Message Sent Successfully!</p>}
        </div>
      </div>
      <div className="mt-12 text-center text-gray-400">
        <p>© 2026 WeXCode. All Rights Reserved.</p>
        <p>For inquiries, contact us at <a href="tel:+918867305645">+91 8867305645</a>.</p>
      </div>
    </footer>
  );
};

export default Footer;