import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back</Text>
      <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#A6A6A6" />
      <TextInput style={styles.input} placeholder="Password" placeholderTextColor="#A6A6A6" secureTextEntry />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8E8EE", // Pastel pembe
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 28,
    color: "#8B5E83",
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#FFF5F8",
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
    color: "#333",
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "#B8A4C9",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default LoginScreen;
