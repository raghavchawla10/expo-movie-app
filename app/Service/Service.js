// service.js
import { TMDB_API_KEY} from "../../config";
const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_BEARER = TMDB_API_KEY; // put your v4 token here (keep it secret!)

async function fetchFromTMDB(endpoint) {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${TMDB_BEARER}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("TMDB fetch error:", error);
    return null;
  }
}

// Example: discover movies
export async function discoverMovies() {
  return fetchFromTMDB(
    "/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc"
  );
}

// Example: search movies
export async function searchMovies(query) {
  return fetchFromTMDB(`/search/movie?query=${encodeURIComponent(query)}`);
}

// Example: popular movies
export async function getPopularMovies() {
  return fetchFromTMDB("/movie/popular");
}
