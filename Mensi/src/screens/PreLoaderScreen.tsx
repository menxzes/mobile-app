import React, { useEffect } from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types"; import { useNavigation } from "@react-navigation/native";

type PreLoaderScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "PreLoader"
>;

export default function PreLoaderScreen() {
  const navigation = useNavigation<PreLoaderScreenNavigationProp>();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("HomePage"); // agora vai funcionar porque existe
    }, 2000);

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
