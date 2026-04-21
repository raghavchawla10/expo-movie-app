import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import { useRouter } from "expo-router";
import Search from "../Components/Search";
import { getPopularMovies } from "../Service/Service";
import { useEffect, useState } from "react";

export default function Index() {
  const [movies, setMovies] = useState([]);
  const router = useRouter();

  useEffect(() => {
    async function loadMovies() {
      const data = await getPopularMovies();
      if (data && data.results) {
        setMovies(data.results);
      }
    }
    loadMovies();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList numColumns={2}
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.movieItem}>
            <Image
              source={{ uri: `https://image.tmdb.org/t/p/w200${item.poster_path}` }}
              style={styles.poster}
            />
            <Text style={styles.movieTitle}>{item.title}</Text>
          </View>
        )}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View style={styles.header}>
            <Image
              source={require("../../assets/images/icon.png")}
              style={styles.image}
            />
            {/* <Search onPress={() => router.push({pathname:"/searchPage" , params: { movies: JSON.stringify(movies)}})} /> */}
            <Search onPress={() => router.push({pathname:"/searchPage" , params:{title:"trending movies , bhen di lan ennadi" , movies: JSON.stringify(movies)}})} />
            <Text style={styles.text}>Trending Movies..</Text>
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // ✅ fill screen
    marginTop: 100,
    padding:20

  },
  header: {
    alignItems: "center",
    marginBottom: 20,
  },
  image: {
    height: 200,
    width: 200,
    marginBottom: 0,
    marginLeft:30
    
  },
  text: {
    marginTop: 20,
    fontSize: 30,
    fontFamily: "Raleway-Italic",
  },
  movieItem: {
    marginBottom: 20,
    alignItems: "center",
    padding:25
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
