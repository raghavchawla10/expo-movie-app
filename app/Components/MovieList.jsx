import { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { getPopularMovies } from "../Service/Service";

export default function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function loadMovies() {
      const data = await getPopularMovies();
      if (data && data.results) {
        setMovies(data.results);
      }
    }
    loadMovies();
  }, []);
//   console.log(movies)

  return (
    
    <FlatList
      data={movies}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <Text>{item.title}</Text>}
    />
  );
}
