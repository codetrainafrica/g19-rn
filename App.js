import { StyleSheet, Text, View, FlatList, SafeAreaView } from "react-native";
import React from "react";
import Contact from "./src/components/Contact";

const App = () => {
  const contacts = [
    {
      name: "Fatima",
      phone: "0555555555",
      image: require("./assets/1.jpeg"),
    },

    {
      name: "Ekow",
      phone: "022222222222",
      image: require("./assets/2.jpeg"),
    },

    {
      name: "Moise",
      phone: "066666666666",
      image: require("./assets/3.jpeg"),
    },

    {
      name: "Gabriel",
      phone: "0111111111111",
      image: require("./assets/4.jpeg"),
    },
  ];

  return (
    <SafeAreaView style={{ flex: 2 }}>
      <FlatList
        data={contacts}
        keyExtractor={(item, index) => `${item.name}-${index}`}
        renderItem={({ item }) => <Contact item={item} />}
      />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});
