import { FlatList, Image, StyleSheet, View, Text , TouchableOpacity} from "react-native";
import { useRouter } from "expo-router";
import Search from "../Components/Search";
import { searchMovies } from "../Service/Service"; // ✅ import correctly
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
export default function SearchPage() {
  const { title, movies } = useLocalSearchParams();
  const parsedMovies = movies ? JSON.parse(movies) : [];
  const router = useRouter();

  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState(parsedMovies); // start with passed movies

  useEffect(() => {
    async function loadMovies() {
      if (!searchText) return; // don’t fetch if empty
      const data = await searchMovies(searchText);
      if (data && data.results) {
        setSearchResults(data.results);
      }
    }
    loadMovies();
  }, [searchText]);

  return (
    <View style={styles.container}>
      <Image source={require("../../assets/images/icon.png")} style={styles.image} />
      <Search value={searchText} onChange={setSearchText} />
      <Text>your search result for: {searchText}</Text>

      <FlatList
        data={searchResults}
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              router.push({
                pathname: "/movieDetail",
                params: { movie: JSON.stringify(item) }, // ✅ pass movie object
              })
            }
          >
          <View style={styles.movieItem}>
            <Image
              source={{ uri: `https://image.tmdb.org/t/p/w200${item.poster_path}` }}
              style={styles.poster}
            />
            <Text style={styles.movieTitle}>{item.title}</Text>
          </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },
  image: {
    height: 50,
    width: 50,
    marginTop: 20,
  },
  movieItem: {
    marginBottom: 50,
    padding: 20,
    alignItems: "center",
  },
  poster: {
    width: 120,
    height: 180,
    borderRadius: 8,
  },
  movieTitle: {
    marginTop: 8,
    fontSize: 14,
    textAlign: "center",
    width: 120,
  },
});
