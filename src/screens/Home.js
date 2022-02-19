import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const users = [
    { name: "Kofi", age: 12 },
    { name: "Kwame", age: 14 },
    { name: "Mary", age: 13 },
  ];

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        keyExtractor={(item, index) => index}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Details", {
                userInfo: item,
              })
            }
            style={{
              padding: 16,
              marginVertical: 2,
              backgroundColor: "tomato",
            }}
          >
            <Text>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Home;
