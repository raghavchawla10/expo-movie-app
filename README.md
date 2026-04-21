# 🎬 Expo Movie App

A React Native app built with [Expo Router](https://expo.github.io/router/) that lets users browse, search, and view details of movies using the [TMDB API](https://developers.themoviedb.org/3).

---

## 🚀 Features
- Home screen with popular movies
- Search screen with live TMDB API integration
- Movie detail page with poster, overview, release date, and rating
- Tab navigation with custom styling
- Clean architecture: reusable components separated from routes

---

## 📂 Project Structure
app/
_layout.js        # Tab navigation layout
index.js          # Home tab
searchPage.js     # Search tab
movieDetail.js    # Movie detail page
components/
Search.js         # Reusable search bar component
MovieCard.js      # Reusable movie card component
Service/
Service.js        # TMDB API service functions
assets/
images/           # App icons and images
