import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Details = (props) => {
  const item = props.route.params.item;

  return (
    <View style={styles.container}>
      <Text>{item.name}</Text>
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

export default Details;
