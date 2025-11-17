
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-auto pb-20 sm:pb-0">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} TokMe. All Rights Reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link to="/terms-of-service" className="text-sm text-gray-600 hover:text-[#FF0050]">Terms</Link>
            <Link to="/privacy-policy" className="text-sm text-gray-600 hover:text-[#FF0050]">Privacy</Link>
            <Link to="/contact" className="text-sm text-gray-600 hover:text-[#FF0050]">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
