import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Button = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate("Details")}>
      <Text>Button</Text>
    </TouchableOpacity>
  );
};

export default Button;
