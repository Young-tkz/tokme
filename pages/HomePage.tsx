import React, { useState } from 'react';
import DownloadForm from '../components/DownloadForm';
import ResultsCard from '../components/ResultsCard';
import SeoContent from '../components/SeoContent';
import { VideoDetails } from '../types';
import { fetchVideoDetails } from '../services/downloaderService';

const HomePage: React.FC = () => {
  const [videoDetails, setVideoDetails] = useState<VideoDetails | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleDownload = async (url: string) => {
    if (!url.trim()) {
      setError("Please paste a TikTok link first.");
      return;
    }
    setIsLoading(true);
    setError(null);
    setVideoDetails(null);

    try {
      const details = await fetchVideoDetails(url);
      setVideoDetails(details);
    } catch (err: any) {
      setError(err.message || "An unexpected error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 md:py-16 text-center">
      
      {/* Top Banner Ad Placeholder */}
      <div className="mb-8 h-24 bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-400 rounded-lg">
        Top Banner Ad (728x90)
      </div>
      
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
          TikTok Video Downloader
        </h1>
        <p className="mt-2 text-lg md:text-xl text-gray-600">(No Watermark)</p>
        <p className="mt-4 text-base text-gray-500">
          Fast, free, HD downloads. Paste your TikTok link below.
        </p>

        <DownloadForm onSubmit={handleDownload} isLoading={isLoading} error={error} />
      </div>

      {videoDetails && (
        <div className="mt-12">
          <ResultsCard video={videoDetails} />
        </div>
      )}

      {/* In-content Banner Ad Placeholder */}
      <div className="mt-12 h-48 bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-400 rounded-lg max-w-2xl mx-auto">
          In-Content Banner Ad (300x250)
      </div>

      <SeoContent />

       {/* Bottom Sticky Ad Placeholder */}
       <div className="fixed bottom-0 left-0 right-0 h-16 bg-gray-100/90 backdrop-blur-sm border-t border-gray-200 flex items-center justify-center text-gray-500 z-50">
          Bottom Sticky Ad (320x50)
      </div>
    </div>
  );
};

export default HomePage;