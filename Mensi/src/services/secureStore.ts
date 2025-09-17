import * as SecureStore from "expo-secure-store";

// Salva token seguro
export async function saveToken(token: string) {
  await SecureStore.setItemAsync("accessToken", token);
}

// Recupera token
export async function getToken() {
  return await SecureStore.getItemAsync("accessToken");
}

// Deleta token
export async function deleteToken() {
  await SecureStore.deleteItemAsync("accessToken");
}
