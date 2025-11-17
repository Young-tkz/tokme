// This is our secure backend function. It runs on Netlify's servers.

import { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";
import fetch from 'node-fetch'; // Use node-fetch for backend requests

// Define the structure of the data we expect from the frontend
interface RequestBody {
  url: string;
}

// Define the structure of the VideoDetails for type safety
interface VideoDetails {
  id: string;
  thumbnailUrl: string;
  title: string;
  author: string;
  downloads: {
    hd: string;
    sd: string;
    noWatermark: string;
  };
}

const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
  // 1. Check for the correct HTTP method
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method Not Allowed' }),
    };
  }

  // 2. Securely get the API key from environment variables
  const apiKey = process.env.RAPIDAPI_KEY;
  if (!apiKey) {
    console.error("RapidAPI key is not configured in server environment.");
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Server configuration error: Missing API key.' }),
    };
  }

  try {
    // 3. Parse the incoming request body
    const body: RequestBody = JSON.parse(event.body || '{}');
    const { url } = body;

    if (!url) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: 'Missing URL in request body' }),
      };
    }

    // 4. Make the secure request to the RapidAPI endpoint
    const encodedUrl = encodeURIComponent(url);
    const apiUrl = `https://tiktok-video-no-watermark2.p.rapidapi.com/feed/info?url=${encodedUrl}`;

    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': apiKey,
        'x-rapidapi-host': 'tiktok-video-no-watermark2.p.rapidapi.com',
      },
    };

    const apiResponse = await fetch(apiUrl, options);
    const responseData: any = await apiResponse.json();

    if (!apiResponse.ok) {
        // Forward the error from the external API
        return {
            statusCode: apiResponse.status,
            body: JSON.stringify({ message: responseData.message || 'Failed to fetch from RapidAPI.' }),
        };
    }

    const data = responseData.data;

    // 5. Map the response to our internal VideoDetails type
    const videoDetails: VideoDetails = {
      id: data.aweme_id,
      thumbnailUrl: data.cover,
      title: data.title || 'No title available',
      author: `@${data.author.nickname}`,
      downloads: {
        noWatermark: data.play,
        hd: data.wmplay,
        sd: data.play,
      },
    };

    // 6. Send the successful response back to the frontend
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(videoDetails),
    };

  } catch (error: any) {
    console.error('Proxy function error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: error.message || 'An internal server error occurred.' }),
    };
  }
};

export { handler };
