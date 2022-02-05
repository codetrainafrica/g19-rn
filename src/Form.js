import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        value={email}
        onChangeText={setEmail}
        style={{ borderWidth: 1, padding: 16, marginVertical: 5 }}
        keyboardType="email-address"
      />
      <TextInput
        value={password}
        onChangeText={setPassword}
        style={{ borderWidth: 1, padding: 16, marginVertical: 5 }}
        secureTextEntry={true}
      />

      <TouchableOpacity
        style={{
          width: "80",
          backgroundColor: "tomato",
          padding: 16,
          alignSelf: "center",
        }}
      >
        <Text>Submit</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
