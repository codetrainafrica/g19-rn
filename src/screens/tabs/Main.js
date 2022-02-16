import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Main = () => {
  const { navigate, goBack } = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() =>
          navigate("Details", {
            name: "Jane",
          })
        }
      >
        <Text>Details</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Main;
