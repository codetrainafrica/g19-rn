import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Details = (props) => {
  console.log(props.route.params.name);

  return (
    <View style={styles.container}>
      <Text>Details</Text>
      <TouchableOpacity onPress={() => props.navigation.goBack()}>
        <Text>Go back</Text>
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

export default Details;
