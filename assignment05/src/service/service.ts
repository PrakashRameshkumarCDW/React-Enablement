import { END_POINTS } from "../constants/API_CONSTANTS";

export const fetchJson = async <T>(url: string): Promise<T> => {
  try {
    const response = await fetch(url=="members"?END_POINTS.members:END_POINTS.blogs);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`Fetch error for ${url}:`, error);
    throw error;
  }
};

