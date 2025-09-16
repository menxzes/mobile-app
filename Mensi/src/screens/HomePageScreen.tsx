// src/screens/HomePageScreen.tsx
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default function HomePageScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      {/* Título */}
      <Text style={styles.title}>home</Text>

      {/* Botão circular no canto inferior direito */}
      <TouchableOpacity
        style={styles.circleButton}
        onPress={() => navigation.navigate("NewPost")}
      >
        <Text style={styles.plus}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#9A9A9A",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontFamily: "IBM Plex Sans",
    fontSize: 68,
    fontWeight: "500",
    color: "#000",
    position: "absolute",
    top: height * 0.2,
    textAlign: "center",
  },
  circleButton: {
    position: "absolute",
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    bottom: 40,
    right: 30,
  },
  plus: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
  },
});
