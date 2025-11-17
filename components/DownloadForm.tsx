
import React, { useState } from 'react';

interface DownloadFormProps {
  onSubmit: (url: string) => void;
  isLoading: boolean;
  error: string | null;
}

const DownloadForm: React.FC<DownloadFormProps> = ({ onSubmit, isLoading, error }) => {
  const [url, setUrl] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(url);
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-4">
      <div className="relative">
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Paste TikTok link here..."
          className="w-full h-16 pl-6 pr-12 text-lg text-gray-700 bg-gray-100 border-2 border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-[#00F2EA] focus:border-transparent transition"
          aria-label="TikTok video URL"
          disabled={isLoading}
        />
      </div>
      
      {error && <p className="text-red-500 text-sm">{error}</p>}
      
      <div className="pt-2">
        <button
          type="submit"
          className="w-full sm:w-auto px-12 py-4 text-xl font-bold text-white bg-gradient-to-r from-[#FF0050] to-[#00F2EA] rounded-full hover:scale-105 transform transition-transform duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100"
          disabled={isLoading}
          aria-live="polite"
        >
          {isLoading ? (
            <div className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Downloading...
            </div>
          ) : 'Download Now'}
        </button>
      </div>
    </form>
  );
};

export default DownloadForm;
