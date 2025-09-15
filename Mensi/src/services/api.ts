import axios from "axios";
import { Platform } from "react-native";

// O endereço IP da sua máquina, obtido do terminal do Expo.
const YOUR_LOCAL_IP = "192.168.0.72";
// A porta do seu servidor Express (geralmente 4000)
const BACKEND_PORT = 4000;

let baseURL;

// Verifica a plataforma para usar o endereço correto
if (Platform.OS === "android") {
  // Para Android, use o IP especial 10.0.2.2 para acessar o localhost da máquina
  baseURL = `http://10.0.2.2:${BACKEND_PORT}/api`;
} else {
  // Para iOS ou Android físico na mesma rede, use o IP local da sua máquina
  baseURL = `http://${YOUR_LOCAL_IP}:${BACKEND_PORT}/api`;
}

const api = axios.create({
  baseURL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;