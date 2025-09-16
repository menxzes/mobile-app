// src/screens/PreLoaderScreen.tsx
import React, { useEffect } from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types"; // Importe do arquivo de tipos

type PreLoaderScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "PreLoader"
>;

export default function PreLoaderScreen() {
  const navigation = useNavigation<PreLoaderScreenNavigationProp>();

  useEffect(() => {
    const timer = setTimeout(() => {
      // Simula a verificação de login.
      const isLoggedIn = false; // Mude para 'true' para testar a rota logada

      if (isLoggedIn) {
        // Se o usuário está logado, navegue para a HomePage
        navigation.replace("HomePage");
      } else {
        // Se não estiver logado, navegue para a Home (tela inicial antes do login/cadastro)
        navigation.replace("Home");
      }
    }, 2000); // Exibe o Preloader por 2 segundos

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#000" />
      <Text>Carregando...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
