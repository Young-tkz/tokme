
import React from 'react';

const TermsPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
      <div className="space-y-4 text-gray-700">
        <p>Welcome to TokMe! These terms and conditions outline the rules and regulations for the use of TokMe's Website.</p>
        <p>By accessing this website we assume you accept these terms and conditions. Do not continue to use TokMe if you do not agree to take all of the terms and conditions stated on this page.</p>
        <h2 className="text-2xl font-semibold pt-4">Intellectual Property Rights</h2>
        <p>TokMe does not host any copyrighted content on its servers. The service is designed to help users download their own content or content that is publicly available. Users are responsible for ensuring they have the right to download and use any content they access through our service.</p>
        <h2 className="text-2xl font-semibold pt-4">Limitation of Liability</h2>
        <p>In no event shall TokMe, nor any of its officers, directors and employees, be held liable for anything arising out of or in any way connected with your use of this Website whether such liability is under contract. TokMe, including its officers, directors and employees shall not be held liable for any indirect, consequential or special liability arising out of or in any way related to your use of this Website.</p>
        <p>[...More content here...]</p>
      </div>
    </div>
  );
};

export default TermsPage;
