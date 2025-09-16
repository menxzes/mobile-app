import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  StyleSheet,
  Dimensions,
} from "react-native";
import api from "../services/api";
import { saveToken } from "../services/secureStore";

const { width, height } = Dimensions.get("window");

export default function LoginScreen({ navigation }: any) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    try {
      const response = await api.post("/auth/login", { email, password });
      const { accessToken } = response.data;
      await saveToken(accessToken);
      navigation.replace("Home"); // Vai para Home e substitui a pilha
    } catch (err: any) {
      Alert.alert("Erro de Login", err.response?.data?.error || "Verifique suas credenciais.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Text style={styles.logo}>mEnSi</Text>

      {/* Card Branco */}
      <View style={styles.whiteCard}>
        <Text style={styles.loginTitle}>Login</Text>

        {/* Inputs */}
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#777" // Mais escuro para contraste no fundo branco
          autoCapitalize="none"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#777" // Mais escuro para contraste no fundo branco
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        {/* Botão Logar (Preto) */}
        <TouchableOpacity
          style={[styles.buttonPrimary, loading && styles.buttonDisabled]}
          onPress={handleLogin}
          disabled={loading}
        >
          {loading ? <ActivityIndicator color="#fff" /> : <Text style={styles.buttonPrimaryText}>Logar</Text>}
        </TouchableOpacity>

        {/* Botão Voltar/Cadastrar (Branco com borda) */}
        <TouchableOpacity
          style={styles.buttonSecondary}
          onPress={() => navigation.navigate("Home")} // Ajuste se precisar voltar para uma tela diferente
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
    backgroundColor: "#000", // Fundo preto para a parte superior
    alignItems: "center",
  },
  logo: {
    fontFamily: "IBM Plex Sans", // Certifique-se de que a fonte está carregada
    fontSize: 68,
    fontWeight: "500",
    color: "#fff",
    marginTop: height * 0.13, // Ajusta a posição do logo
    marginBottom: height * 0.1, // Adiciona espaço entre o logo e o card branco
  },
  whiteCard: {
    width: "100%",
    height: height * 0.6, // Ajuste a altura conforme necessário
    backgroundColor: "#fff",
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    paddingHorizontal: 24,
    paddingTop: 40, // Espaçamento interno superior
    alignItems: "center",
    position: 'absolute', // Permite posicionar o card na parte inferior
    bottom: 0,
  },
  loginTitle: {
    fontFamily: "IBM Plex Sans", // Certifique-se de que a fonte está carregada
    fontSize: 42,
    fontWeight: "300",
    color: "#000",
    textAlign: "center",
    marginBottom: 30, // Espaçamento abaixo do título
  },
  input: {
    width: "90%", // Mais largo para preencher o card
    backgroundColor: "#fff", // Fundo branco do input
    borderWidth: 1,
    borderColor: "#ccc", // Borda cinza clara
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    fontSize: 16,
    color: "#000", // Texto preto
  },
  buttonPrimary: {
    width: "90%", // Mais largo para preencher o card
    backgroundColor: "#000", // Botão preto
    padding: 15,
    borderRadius: 8, // Mais quadrado
    alignItems: "center",
    marginTop: 20, // Mais espaço antes do primeiro botão
  },
  buttonPrimaryText: {
    fontFamily: "IBM Plex Sans", // Certifique-se de que a fonte está carregada
    color: "#fff", // Texto branco
    fontSize: 16,
    fontWeight: "500",
  },
  buttonSecondary: {
    width: "90%", // Mais largo para preencher o card
    backgroundColor: "#fff", // Fundo branco
    borderWidth: 1,
    borderColor: "#000", // Borda preta
    padding: 15,
    borderRadius: 8, // Mais quadrado
    alignItems: "center",
    marginTop: 12,
  },
  buttonSecondaryText: {
    fontFamily: "IBM Plex Sans", // Certifique-se de que a fonte está carregada
    color: "#000", // Texto preto
    fontSize: 16,
    fontWeight: "500",
  },
  buttonDisabled: {
    backgroundColor: "#444", // Cor para quando o botão está desabilitado
  },
});