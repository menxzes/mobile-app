import React, { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import HomeScreen from "../screens/HomeScreen";
import { getToken } from "../services/secureStore";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  const [loading, setLoading] = useState(true);
  const [userToken, setUserToken] = useState<string | null>(null);

  // Verifica se já existe token salvo no SecureStore
  useEffect(() => {
    const checkToken = async () => {
      try {
        const token = await getToken();
        setUserToken(token);
      } catch (error) {
        console.error("Erro ao obter o token:", error);
      } finally {
        setLoading(false);
      }
    };
    checkToken();
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
      // Remova o NavigationContainer daqui
      <Stack.Navigator
        initialRouteName={userToken ? "Home" : "Login"}
        screenOptions={{ headerShown: false }}
      >
        {!userToken ? (
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
          </>
        ) : (
          <Stack.Screen name="Home" component={HomeScreen} />
        )}
      </Stack.Navigator>
  );
}