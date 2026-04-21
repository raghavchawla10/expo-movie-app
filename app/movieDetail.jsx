import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";

export default function MovieDetail() {
  const { movie } = useLocalSearchParams();
  const parsedMovie = movie ? JSON.parse(movie) : null;
  const router = useRouter();

  if (!parsedMovie) return <Text>No movie data</Text>;

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        {/* Back button */}
        {/* <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Text style={styles.backText}>← Back</Text>
        </TouchableOpacity> */}

        <Image
          source={{ uri: `https://image.tmdb.org/t/p/w500${parsedMovie.poster_path}` }}
          style={styles.poster}
        />
        <Text style={styles.title}>{parsedMovie.title}</Text>
        <Text style={styles.overview}>
          {parsedMovie.overview}
          
        </Text>
        <Text style={styles.info}>Release date: {parsedMovie.release_date}</Text>
        <Text style={styles.info}>Rating: {parsedMovie.vote_average}
          {"\n\n"}
          {"\n\n"}
          {"\n\n"}
          {"\n\n"}
          {"\n\n"}{"\n\n"}
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
  },
  backButton: {
    alignSelf: "flex-start",
    marginBottom: 10,
  },
  backText: {
    fontSize: 16,
    color: "blue",
  },
  poster: {
    width: 300,
    height: 450,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  overview: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },
  info: {
    fontSize: 14,
    color: "gray",
  },
});
