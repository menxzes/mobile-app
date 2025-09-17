// Mensi/src/screens/NewPostScreen.tsx

import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const { width, height } = Dimensions.get("window");

export default function NewPostScreen({ navigation }: any) {
  const [postText, setPostText] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      {/* Close Button */}
      <TouchableOpacity
        style={styles.closeButton}
        onPress={() => navigation.goBack()}
      >
        <MaterialCommunityIcons name="close" size={24} color="#000" />
      </TouchableOpacity>

      {/* Header */}
      <Text style={styles.headerTitle}>POST</Text>

      {/* Post Button */}
      <TouchableOpacity style={styles.postButton}>
        <Text style={styles.postButtonText}>POST</Text>
      </TouchableOpacity>

      {/* Username */}
      <Text style={styles.username}>fulano_de_town</Text>

      {/* Input Field */}
      <ScrollView style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Escreve aí, vai..."
          placeholderTextColor="#655B5B"
          multiline
          value={postText}
          onChangeText={setPostText}
        />
      </ScrollView>

      {/* Divider Lines */}
      <View style={styles.line1} />
      <View style={styles.line2} />

      {/* Action Icons */}
      <View style={styles.iconsContainer}>
        <TouchableOpacity>
          <MaterialCommunityIcons name="link" size={22} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialCommunityIcons name="file-gif-box" size={22} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialCommunityIcons name="image" size={22} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialCommunityIcons name="emoticon-outline" size={22} color="#000" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  closeButton: {
    position: "absolute",
    width: 32,
    height: 32,
    left: 24,
    top: 56,
    backgroundColor: "#D9D9D9",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
  },
  headerTitle: {
    position: "absolute",
    width: 48,
    height: 16,
    right: 24,
    top: 28,
    fontFamily: "IBM Plex Sans",
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 16,
    color: "#fff",
  },
  postButton: {
    position: "absolute",
    width: 48,
    height: 24,
    right: 24,
    top: 24,
    backgroundColor: "#000",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  postButtonText: {
    color: "#fff",
    fontFamily: "IBM Plex Sans",
    fontWeight: "500",
    fontSize: 14,
  },
  username: {
    position: "absolute",
    left: 56,
    top: 60,
    fontFamily: "IBM Plex Sans",
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 24,
    color: "#000",
  },
  inputContainer: {
    position: "absolute",
    top: 112,
    left: 24,
    right: 24,
    bottom: 0,
  },
  textInput: {
    fontFamily: "IBM Plex Sans",
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 24,
    color: "#655B5B",
    minHeight: 200,
    textAlignVertical: "top",
  },
  line1: {
    position: "absolute",
    width: 360,
    height: 1,
    left: 24,
    top: 320,
    backgroundColor: "#000",
  },
  line2: {
    position: "absolute",
    width: 360,
    height: 1,
    left: 24,
    top: 376,
    backgroundColor: "#000",
  },
  iconsContainer: {
    position: "absolute",
    top: 334,
    left: 56,
    width: 296,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
