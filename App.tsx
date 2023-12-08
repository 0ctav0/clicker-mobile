import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [radiusClickString, setRadiusClickString] = useState("");
  return (
    <View style={styles.container}>
      <Text style={styles.caption}>Анти-отслеживание</Text>
      <Text>Радиуса клика (px)</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={radiusClickString}
        onChangeText={setRadiusClickString}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  caption: {
    fontSize: 20,
  },
  container: {
    flex: 1,
    padding: 16,
    marginTop: 16,
    backgroundColor: "#fff",
    gap: 8,
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
  },
});
