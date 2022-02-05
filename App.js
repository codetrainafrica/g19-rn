import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  FlatList,
  Image,
} from "react-native";
import {
  FontAwesome,
  MaterialCommunityIcons,
  Ionicons,
} from "@expo/vector-icons";
import React from "react";

const App = () => {
  const students = [
    {
      name: "Kofi",
      email: "kofi@email.com",
      profile: require("./assets/1.jpeg"),
    },

    {
      name: "Ama",
      email: "ama@email.com",
      profile: require("./assets/2.jpeg"),
    },

    {
      name: "James",
      email: "james@email.com",
      profile: require("./assets/3.jpeg"),
    },

    {
      name: "Mary",
      email: "mary@email.com",
      profile: require("./assets/4.jpeg"),
    },
  ];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={students}
        keyExtractor={(item, index) => item.name + index}
        renderItem={({ item }) => (
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              marginVertical: 4,
              padding: 16,
            }}
          >
            <View
              style={{
                flex: 20,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={item.profile}
                style={{ height: 70, width: 70, borderRadius: 35 }}
              />
            </View>
            <View
              style={{
                flex: 40,
                // alignItems: "center",
                justifyContent: "space-evenly",
                paddingHorizontal: 16,
              }}
            >
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                {item.name}
              </Text>
              <Text style={{ fontSize: 16 }}>{item.email}</Text>
            </View>
            <View
              style={{
                flex: 40,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              <FontAwesome name="phone" size={24} color="#45bcff" />
              <MaterialCommunityIcons
                name="message-processing"
                size={24}
                color="#45bcff"
              />
              <Ionicons name="ios-ellipsis-vertical" size={24} color="black" />
            </View>
          </View>
        )}
      />
      {/* <ScrollView>
        <Text>Hello</Text>
        <Text>Hello</Text>
        <Text>Hello</Text>
        <Text>Hello</Text>
        <Text>Hello</Text>
        <Text>Hello</Text>
        <Text>Hello</Text>
        <Text>Hello</Text>
        <Text>Hello</Text>
        <Text>Hello</Text>
        <Text>Hello</Text>
        <Text>Hello</Text>
        <Text>Hello</Text>
        <Text>Hello</Text>
        <Text>Hello</Text>
        <Text>Hello</Text>
        <Text>Hello</Text>
        <Text>Hello</Text>
        <Text>Hello</Text>
        <Text>Hello</Text>
        <Text>Hello</Text>
        <Text>Hello</Text>
        <Text>Hello</Text>
        <Text>Hello</Text>
        <Text>Hello</Text>
        <Text>Hello</Text>
        <Text>Hello</Text>
        <Text>Hello</Text>
        <Text>Hello</Text>
        <Text>Hello</Text>
        <Text>Hello</Text>
        <Text>Hello</Text>
        <Text>Hello</Text>
        <Text>Hello</Text>
        <Text>Hello</Text>
        <Text>Hello</Text>
        <Text>Hello</Text>
        <Text>Hello</Text>
        <Text>Hello</Text>
        <Text>Hello</Text>
        <Text>Hello</Text>
        <Text>Hello</Text>
        <Text>Hello</Text>
        <Text>Hello</Text>
      </ScrollView> */}
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});
