// src/screens/HomeScreen.tsx
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

type RootStackParamList = {
  Login: undefined;
  Register: undefined;
};

export default function HomeScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Text style={styles.logo}>mEnSi</Text>

      {/* Área preta com textos */}
      <View style={styles.contentBox}>
        <Text style={styles.welcome}>Boas-vindas!</Text>
        <Text style={styles.description}>
          A mEnSi tem a proposta de ser uma rede social diferente para o público amante de tecnologia. 
          Aqui você pode realizar seu Login, caso tenha uma conta, senão, realize seu cadastro.
        </Text>

        {/* Botões */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.buttonText}>Logar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Register")}
        >
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
  },
  logo: {
    fontSize: 68,
    fontWeight: "500",
    fontFamily: "IBM Plex Sans",
    color: "#000000",
    marginTop: 80,
  },
  contentBox: {
    marginTop: 60,
    width: "100%",
    flex: 1,
    backgroundColor: "#000000",
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    alignItems: "center",
    padding: 24,
  },
  welcome: {
    fontSize: 42,
    fontWeight: "300",
    color: "#FFFFFF",
    marginBottom: 12,
    textAlign: "center",
  },
  description: {
    fontSize: 14,
    color: "#FFFFFF",
    textAlign: "center",
    marginBottom: 40,
  },
  button: {
    width: "70%",
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    paddingVertical: 14,
    alignItems: "center",
    marginBottom: 16,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#000000",
  },
});
