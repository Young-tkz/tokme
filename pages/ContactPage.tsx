
import React from 'react';

const ContactPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <div className="space-y-4 text-gray-700">
        <p>If you have any questions, feel free to reach out to us. We're here to help!</p>
        <p>
          You can contact us:
        </p>
        <ul className="list-disc list-inside">
          <li>By email: support@tokme.example.com</li>
          <li>By visiting this page on our website: tokme.example.com/contact</li>
        </ul>
        <p>We try to respond to all inquiries within 48 hours.</p>
      </div>
    </div>
  );
};

export default ContactPage;
