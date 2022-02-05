import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image source={require("./assets/1.jpeg")} style={styles.profileImg} />
      </View>

      <View style={styles.formContainer}>
        <View>
          <Text style={{ color: "#999", fontSize: 20, marginVertical: 2 }}>
            School
          </Text>
          <Text style={{ fontSize: 30, marginVertical: 2 }}>Codetrain</Text>
        </View>

        <View>
          <Text style={{ color: "#999", fontSize: 20, marginVertical: 2 }}>
            Email
          </Text>
          <Text style={{ fontSize: 30, marginVertical: 2 }}>
            Codetrain@email.com
          </Text>
        </View>

        <View>
          <Text style={{ color: "#45bcff", fontSize: 20, marginVertical: 2 }}>
            Name
          </Text>
          <TextInput
            style={{ fontSize: 30, marginVertical: 2, borderBottomWidth: 1 }}
          />
        </View>
      </View>

      <View style={styles.submitContainer}>
        <TouchableOpacity style={styles.btn}>
          <Text style={{ color: "#FFF" }}>UPDATE PROFILE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 100,
  },

  profileContainer: {
    flex: 30,
    alignItems: "center",
    justifyContent: "center",
  },

  formContainer: {
    flex: 50,
    paddingHorizontal: 16,
  },

  submitContainer: {
    flex: 20,
    alignItems: "center",
    justifyContent: "center",
  },

  profileImg: {
    height: 150,
    width: 150,
    borderRadius: 75,
  },

  btn: {
    padding: 16,
    width: "60%",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#45bcff",
  },
});

export default App;
