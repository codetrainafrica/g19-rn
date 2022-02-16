import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Rating, AirbnbRating } from "react-native-ratings";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const [items, setItems] = React.useState([
    { name: "Jacket 1", price: "100", rating: 3 },
    { name: "Jacket 2", price: "200", rating: 5 },
  ]);

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text
          style={{
            fontSize: 25,
            fontWeight: "bold",
          }}
        >
          Woman Jacket
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            backgroundColor: "#fff",
            // margin: 16,
            padding: 16,
            borderRadius: 50,
          }}
        >
          <TextInput style={{}} placeholder="Search jacket" />
          <Text style={{ fontWeight: "bold", color: "blue" }}>Filter</Text>
        </View>
      </View>
      <View style={styles.list}>
        <FlatList
          data={items}
          keyExtractor={(item, index) => {
            return index;
          }}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Details", { item: item, test: false })
              }
              style={{ flex: 1, flexDirection: "row" }}
            >
              <View style={{ flex: 20, backgroundColor: "green" }}></View>
              <View style={{ flex: 80, backgroundColor: "yellow" }}>
                <Text>{item.name}</Text>
                <AirbnbRating ratingCount={5} count={item.rating} />
                <Text>{item.price}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
  },

  header: {
    flex: 30,
    justifyContent: "center",
    padding: 16,
  },

  list: {
    flex: 70,
  },
});

export default Home;
