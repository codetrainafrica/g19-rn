import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens2/Home";
import Profile from "./src/screens/Profile";
import Details from "./src/screens2/Details";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
    // <NavigationContainer>
    //   <Stack.Navigator
    //     initialRouteName="Home"
    //     screenOptions={{ headerShown: false }}
    //   >
    //     <Stack.Screen name="Home" component={Home} />
    //     <Stack.Screen name="Profile" component={Profile} />
    //     <Stack.Screen
    //       name="Details"
    //       component={Details}
    //       options={{ headerShown: true }}
    //     />
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
};

export default App;
