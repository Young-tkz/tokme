
import React from 'react';

const PrivacyPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <div className="space-y-4 text-gray-700">
        <p>This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.</p>
        <h2 className="text-2xl font-semibold pt-4">Information We Collect</h2>
        <p>We do not collect any personal information from our users. The video URL you enter is sent to our servers for processing but is not stored. We may use cookies and similar tracking technologies to track the activity on Our Service and hold certain information for analytics purposes.</p>
        <h2 className="text-2xl font-semibold pt-4">Use of Your Personal Data</h2>
        <p>Since we do not collect personal data, we do not use it. We may use usage data for analytical purposes to improve our service.</p>
        <p>[...More content here...]</p>
      </div>
    </div>
  );
};

export default PrivacyPage;
