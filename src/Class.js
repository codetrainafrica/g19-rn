import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";

const App = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handleSubmit = () => {
    console.log("Pressed");
  };

  return (
    <ScrollView style={{ flex: 1 }}>
      <TextInput
        value={email}
        onChangeText={handleEmailChange}
        style={{ borderWidth: 1, padding: 16 }}
      />

      <TextInput
        value={email}
        onChangeText={handleEmailChange}
        style={{ borderWidth: 1, padding: 16 }}
      />
      <TextInput
        value={email}
        onChangeText={handleEmailChange}
        style={{ borderWidth: 1, padding: 16 }}
      />
      <TextInput
        value={email}
        onChangeText={handleEmailChange}
        style={{ borderWidth: 1, padding: 16 }}
      />
      <TextInput
        value={email}
        onChangeText={handleEmailChange}
        style={{ borderWidth: 1, padding: 16 }}
      />
      <TextInput
        value={email}
        onChangeText={handleEmailChange}
        style={{ borderWidth: 1, padding: 16 }}
      />
      <TextInput
        value={email}
        onChangeText={handleEmailChange}
        style={{ borderWidth: 1, padding: 16 }}
      />
      <TextInput
        value={email}
        onChangeText={handleEmailChange}
        style={{ borderWidth: 1, padding: 16 }}
      />
      <TextInput
        value={email}
        onChangeText={handleEmailChange}
        style={{ borderWidth: 1, padding: 16 }}
      />
      <TextInput
        value={email}
        onChangeText={handleEmailChange}
        style={{ borderWidth: 1, padding: 16 }}
      />
      <TextInput
        value={email}
        onChangeText={handleEmailChange}
        style={{ borderWidth: 1, padding: 16 }}
      />
      <TextInput
        value={email}
        onChangeText={handleEmailChange}
        style={{ borderWidth: 1, padding: 16 }}
      />
      <TextInput
        value={email}
        onChangeText={handleEmailChange}
        style={{ borderWidth: 1, padding: 16 }}
      />
      <TextInput
        value={email}
        onChangeText={handleEmailChange}
        style={{ borderWidth: 1, padding: 16 }}
      />
      <TextInput
        value={email}
        onChangeText={handleEmailChange}
        style={{ borderWidth: 1, padding: 16 }}
      />
      <TextInput
        value={email}
        onChangeText={handleEmailChange}
        style={{ borderWidth: 1, padding: 16 }}
      />
      <TextInput
        value={email}
        onChangeText={handleEmailChange}
        style={{ borderWidth: 1, padding: 16 }}
      />
      <TextInput
        value={email}
        onChangeText={handleEmailChange}
        style={{ borderWidth: 1, padding: 16 }}
      />
      <TextInput
        value={email}
        onChangeText={handleEmailChange}
        style={{ borderWidth: 1, padding: 16 }}
      />
      <TextInput
        value={email}
        onChangeText={handleEmailChange}
        style={{ borderWidth: 1, padding: 16 }}
      />
      <TextInput
        value={email}
        onChangeText={handleEmailChange}
        style={{ borderWidth: 1, padding: 16 }}
      />
      <TextInput
        value={email}
        onChangeText={handleEmailChange}
        style={{ borderWidth: 1, padding: 16 }}
      />
      <TextInput
        value={email}
        onChangeText={handleEmailChange}
        style={{ borderWidth: 1, padding: 16 }}
      />
      <TextInput
        value={email}
        onChangeText={handleEmailChange}
        style={{ borderWidth: 1, padding: 16 }}
      />
      <TextInput
        value={email}
        onChangeText={handleEmailChange}
        style={{ borderWidth: 1, padding: 16 }}
      />
      <TextInput
        value={email}
        onChangeText={handleEmailChange}
        style={{ borderWidth: 1, padding: 16 }}
      />

      {/* <TouchableOpacity
        onPress={handleSubmit}
        style={{ backgroundColor: "red", padding: 16 }}
      >
        <Text>Submit</Text>
      </TouchableOpacity> */}
    </ScrollView>
    // <View style={styles.container}>
    //   <View style={styles.profileContainer}>
    //     <Image
    //       source={{
    //         uri: "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcRQnEA06hqnnZ4NEO8ffoik5d7jeJ0iAe50FDKh4OJmqzMgR-WoPDTzh39MJ5zm",
    //       }}
    //       style={styles.profileImg}
    //     />
    //   </View>
    //   <View style={styles.formContainer}>
    //     <Text style={{ fontSize: 20, color: "#999" }}>School</Text>
    //     <Text style={{ fontSize: 30 }}>Codetrain</Text>

    //     <Text style={{ fontSize: 20, color: "blue", marginTop: 16 }}>
    //       School
    //     </Text>
    //     <TextInput
    //       style={{ borderBottomWidth: 0.5, borderBottomColor: "#999" }}
    //     />
    //   </View>
    //   <View style={styles.btnContainer}>
    //     <TouchableOpacity
    //       style={{
    //         padding: 16,
    //         backgroundColor: "lightblue",
    //         alignItems: "center",
    //         justifyContent: "center",
    //         alignSelf: "center",
    //         width: "80%",
    //         borderRadius: 50,
    //       }}
    //     >
    //       <Text>UPDATE PROFILE</Text>
    //     </TouchableOpacity>
    //   </View>
    // </View>
  );
};

// const App = () => {
//   const foods = ["Waakye", "Kenkey", "Gorbe", "Fufu", "Rice"];
//   return (
//     <View style={{ flex: 1 }}>
//       <FlatList
//         data={foods}
//         keyExtractor={(item, index) => index}
//         renderItem={({ item }) => (
//           <View
//             style={{ padding: 16, backgroundColor: "red", marginVertical: 2 }}
//           >
//             <Text style={{ color: "white", fontSize: 30 }}>{item}</Text>
//           </View>
//         )}
//       />
//     </View>
//   );
// };

const styles = StyleSheet.create({
  container: {
    flex: 100,
  },

  profileContainer: {
    flex: 30,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "red",
  },

  formContainer: {
    flex: 50,
    paddingHorizontal: 16,

    // backgroundColor: "blue",
  },

  btnContainer: {
    flex: 20,
    // backgroundColor: "green",
  },

  profileImg: {
    height: 150,
    width: 150,
    borderRadius: 75,
  },
});

export default App;
