import { VideoDetails } from '../types';

// WARNING: This approach exposes your RapidAPI key on the frontend.
// This is a temporary solution due to platform limitations preventing the secure backend proxy from being created.
export const processTikTokUrl = async (url: string): Promise<VideoDetails> => {
  const apiKey = process.env.RAPIDAPI_KEY;

  if (!apiKey) {
    // This error will be shown to the user if the environment variable is not set.
    throw new Error("The API key is not configured. Please contact the site administrator.");
  }

  const encodedUrl = encodeURIComponent(url);
  const apiUrl = `https://tiktok-video-no-watermark2.p.rapidapi.com/feed/info?url=${encodedUrl}`;
  
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': apiKey,
      'x-rapidapi-host': 'tiktok-video-no-watermark2.p.rapidapi.com',
    },
  };

  try {
    const apiResponse = await fetch(apiUrl, options);
    
    // Check if the response is not ok (e.g., 4xx, 5xx status codes)
    if (!apiResponse.ok) {
        const errorData = await apiResponse.json().catch(() => ({ message: `API request failed with status: ${apiResponse.status}` }));
        throw new Error(errorData.message || 'Failed to fetch video details from the service.');
    }

    const responseData: any = await apiResponse.json();
    
    // The RapidAPI endpoint wraps the result in a `data` object.
    const data = responseData.data;

    if (!data) {
        throw new Error("Invalid response from the video service. Please try another link.");
    }

    // Map the response to our internal VideoDetails type for consistency
    const videoDetails: VideoDetails = {
      id: data.aweme_id,
      thumbnailUrl: data.cover,
      title: data.title || 'No title available',
      author: `@${data.author.nickname}`,
      downloads: {
        noWatermark: data.play,
        hd: data.wmplay, // Assuming wmplay is HD with watermark
        sd: data.play,     // Assuming play is SD without watermark
      },
    };

    return videoDetails;

  } catch (error: any) {
    console.error("RapidAPI Fetch Error:", error);
    // Re-throw a user-friendly error to be displayed in the UI
    throw new Error(error.message || "An unexpected error occurred while trying to download the video.");
  }
};