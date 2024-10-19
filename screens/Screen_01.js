import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
const Screen_01 = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  const objects = [
    {
      email: "thaison@gmail.com",
      password: "270603",
    },
    {
      email: "songnuyen@gmail.com",
      password: "1111",
    },
    {
      email: "hungnguyen@gmail.com",
      password: "27062003",
    },
    {
      email: "son@gmail.com",
      password: "20030627",
    },
    {
      email: "sonthai@gmail.com",
      password: "thaison",
    },
  ];

  const handleLogin = () => {
    for (let i = 0; i < objects.length; i++) {
      if (email === objects[i].email && password === objects[i].password) {
        alert("Login successfully");
        navigation.navigate("Screen_02");
        return;
      }
    }
    alert("Login failed");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonBack}>
        <Image
          source={require("../assets/Data/iconback.png")}
          style={styles.iconBack}
        />
      </TouchableOpacity>

      <Image source={require("../assets/Data/icon.png")} style={styles.logo} />

      <Text style={styles.title}>Hello Again!</Text>
      <Text style={styles.subTitle}>Log into your account</Text>

      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/Data/mailicon.png")}
          style={styles.icon}
        />
        <TextInput
          placeholder="Enter your email address"
          style={styles.input}
          value={email}
          onChangeText={(email) => setEmail(email)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/Data/lock.png")}
          style={styles.icon}
        />
        <TextInput
          placeholder="Enter your password"
          style={styles.input}
          secureTextEntry={true}
          value={password}
          onChangeText={(password) => setPassword(password)}
        />
        <Image source={require("../assets/Data/eye.png")} style={styles.icon} />
      </View>

      <TouchableOpacity
        style={{
          fontSize: 15,
          marginVertical: 20,
          alignSelf: "flex-end",
          paddingRight: 50,
        }}
      >
        <Text style={{ color: "#00bdd6" }}>Forgot password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonContinue} onPress={handleLogin}>
        <Text style={styles.textBtn}>Continue</Text>
      </TouchableOpacity>

      <View style={styles.orContainer}>
        <View style={styles.line} />
        <Text style={styles.orText}>or</Text>
        <View style={styles.line} />
      </View>

      <View style={{ flexDirection: "row", alignSelf: "center" }}>
        <Image
          source={require("../assets/Data/google.png")}
          style={{
            width: 50,
            height: 50,
            alignSelf: "center",
            resizeMode: "contain",
          }}
        />
        <Image
          source={require("../assets/Data/face.png")}
          style={{
            width: 50,
            height: 50,
            alignSelf: "center",
            marginHorizontal: 5,
            resizeMode: "contain",
          }}
        />
        <Image
          source={require("../assets/Data/apple.png")}
          style={{
            width: 50,
            height: 50,
            alignSelf: "center",
            resizeMode: "contain",
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonBack: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  iconBack: {
    width: 40,
    height: 40,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
  },
  title: {
    fontSize: 31,
    fontWeight: "bold",
    alignSelf: "center",
    marginTop: 20,
  },
  subTitle: {
    fontSize: 14,
    alignSelf: "center",
    fontWeight: "400",
    color: "gray",
    marginTop: 10,
    marginBottom: 50,
  },
  inputContainer: {
    alignSelf: "center",
    width: "80%",
    borderWidth: 1,
    borderRadius: 12,
    borderColor: "gray",
    marginTop: 30,
    flexDirection: "row",
    height: 50,
  },
  icon: {
    width: 20,
    height: 20,
    marginHorizontal: 10,
    alignSelf: "center",
    resizeMode: "contain",
  },
  input: {
    width: "100%",
    height: 50,
    fontSize: 17,
  },
  buttonContinue: {
    width: "80%",
    height: 50,
    backgroundColor: "#00bdd6",
    borderRadius: 12,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  textBtn: {
    color: "white",
    fontSize: 20,
    fontWeight: "400",
  },
  orContainer: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    marginVertical: 20,
    width: "80%",
  },
  line: {
    flex: 3,
    height: 1,
    backgroundColor: "#ccc",
  },
  orText: {
    marginHorizontal: 10,
    fontSize: 16,
    color: "gray",
  },
});

export default Screen_01;
