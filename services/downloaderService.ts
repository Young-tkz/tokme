import { VideoDetails } from '../types';
import { processTikTokUrl } from '../api/tiktok';

const TIKTOK_URL_REGEX = /^(https?:\/\/)?(www\.)?(tiktok\.com\/.*|vm\.tiktok\.com\/.*)/;

export const fetchVideoDetails = (url: string): Promise<VideoDetails> => {
  return new Promise(async (resolve, reject) => {
    if (!TIKTOK_URL_REGEX.test(url)) {
      return reject(new Error("Invalid TikTok URL. Please paste a valid link."));
    }

    try {
      // The simulated network delay is removed as we now have a real API call with its own latency.
      
      // Call the "backend" API function
      const details = await processTikTokUrl(url);
      resolve(details);

    } catch (error: any) {
      console.error("API Error:", error);
      reject(new Error(error.message || "Could not connect to the download service. Please try again later."));
    }
  });
};
