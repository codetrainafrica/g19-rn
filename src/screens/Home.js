import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Main from "./tabs/Main";
import Settings from "./tabs/Settings";
import About from "./tabs/About";
import History from "./tabs/History";
import { AntDesign } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const Home = (props) => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Main" component={Main} />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="setting" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen name="About" component={About} />
      <Tab.Screen name="History" component={History} />
    </Tab.Navigator>
  );
  // const navigation = useNavigation();

  // return (
  //   <View style={styles.container}>
  //     <TouchableOpacity onPress={() => navigation.navigate("Details")}>
  //       <Text>Go to Details</Text>
  //     </TouchableOpacity>
  //   </View>
  // );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Home;
