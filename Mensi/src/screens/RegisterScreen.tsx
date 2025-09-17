import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, Alert, StyleSheet } from "react-native";
import api from "../services/api";

export default function RegisterScreen({ navigation }: any) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    setLoading(true);
    try {
      await api.post("/auth/register", { name, email, password });
      Alert.alert("Sucesso", "Conta criada com sucesso! Agora você pode fazer login.");
      navigation.replace("Login");
    } catch (err: any) {
      Alert.alert("Erro de Cadastro", err.response?.data?.error || "Verifique os dados e tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Text style={styles.logo}>mEnSi</Text>

      {/* Caixa branca */}
      <View style={styles.whiteBox}>
        <Text style={styles.title}>Cadastro</Text>

        {/* Inputs */}
        <TextInput
          style={styles.input}
          placeholder="Nome"
          placeholderTextColor="#49454F"
          value={name}
          onChangeText={setName}
        />

        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#49454F"
          autoCapitalize="none"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#49454F"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        {/* Botão cadastrar - Não funciona*/}
        <TouchableOpacity
          style={[styles.buttonPrimary, loading && styles.buttonDisabled]}
          onPress={ () => navigation.navigate("HomePage")}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.buttonPrimaryText}>Cadastrar</Text>
          )}
        </TouchableOpacity>

        {/* Botão voltar - Não funciona*/}
      <TouchableOpacity
        style={styles.buttonSecondary}
        onPress={() => navigation.navigate("Home")}
      >
      <Text style={styles.buttonSecondaryText}>Voltar</Text>
      </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
  },
  logo: {
    fontFamily: "IBM Plex Sans",
    fontSize: 68,
    fontWeight: "500",
    color: "#fff",
    marginTop: 120,
  },
  whiteBox: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 517,
    backgroundColor: "#fff",
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    paddingHorizontal: 24,
    paddingTop: 32,
  },
  title: {
    fontFamily: "IBM Plex Sans",
    fontSize: 42,
    fontWeight: "300",
    color: "#000",
    textAlign: "center",
    marginBottom: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: "#79747E",
    borderRadius: 4,
    padding: 15,
    marginBottom: 15,
    fontSize: 16,
    fontFamily: "Roboto",
    color: "#000",
  },
  buttonPrimary: {
    backgroundColor: "#000",
    padding: 15,
    borderRadius: 16,
    alignItems: "center",
    marginTop: 20,
  },
  buttonPrimaryText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "IBM Plex Sans",
  },
  buttonSecondary: {
    backgroundColor: "#fff",
    borderWidth: 3,
    borderColor: "#000",
    padding: 15,
    borderRadius: 16,
    alignItems: "center",
    marginTop: 12,
  },
  buttonSecondaryText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "IBM Plex Sans",
  },
  buttonDisabled: {
    backgroundColor: "#444",
  },
});
