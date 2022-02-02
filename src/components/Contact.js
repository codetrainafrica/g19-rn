import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import {
  FontAwesome,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";

const Contact = ({ item }) => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        paddingHorizontal: 16,
        marginVertical: 16,
      }}
    >
      <View
        style={{
          flex: 2,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image source={item.image} style={styles.image} />
      </View>
      <View
        style={{
          flex: 4,
          marginVertical: 2,
          justifyContent: "space-evenly",
          paddingHorizontal: 16,
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>{item.name}</Text>
        <Text style={{ color: "#999" }}>{item.phone}</Text>
      </View>
      <View
        style={{
          flex: 4,
          marginVertical: 2,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <FontAwesome name="phone" size={24} color="#45bcff" />
        <MaterialCommunityIcons
          name="message-processing"
          size={24}
          color="#45bcff"
        />
        <FontAwesome5 name="ellipsis-v" size={24} color="#999" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 70,
    width: 70,
    borderRadius: 35,
  },
});

export default Contact;
