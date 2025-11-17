import React from 'react';
import { VideoDetails } from '../types';
import DownloadIcon from './icons/DownloadIcon';

interface ResultsCardProps {
  video: VideoDetails;
}

const ResultsCard: React.FC<ResultsCardProps> = ({ video }) => {

  // The download buttons are now real anchor tags that link directly to the video files.
  // The 'download' attribute tells the browser to download the file instead of navigating to it.
  // The filename is suggested based on the video author and ID.

  return (
    <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg overflow-hidden animate-fade-in-up">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img className="h-48 w-full object-cover md:w-48" src={video.thumbnailUrl} alt="Video thumbnail" />
        </div>
        <div className="p-6 text-left w-full">
          <div className="uppercase tracking-wide text-sm text-[#FF0050] font-semibold">
            {video.author}
          </div>
          <p className="block mt-1 text-lg leading-tight font-medium text-black">
            {video.title}
          </p>
          <div className="mt-4 space-y-3">
             <a href={video.downloads.noWatermark} download={`${video.author}-${video.id}-no-watermark.mp4`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full px-4 py-3 border border-transparent text-base font-medium rounded-md text-white bg-black hover:bg-gray-800 transition">
              <DownloadIcon />
              Download (No Watermark)
            </a>
            <a href={video.downloads.hd} download={`${video.author}-${video.id}-hd.mp4`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full px-4 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition">
              <DownloadIcon />
              MP4 (HD)
            </a>
            <a href={video.downloads.sd} download={`${video.author}-${video.id}-sd.mp4`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full px-4 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition">
              <DownloadIcon />
              MP4 (SD)
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsCard;
