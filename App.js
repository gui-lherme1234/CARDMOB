import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);

  const incrementCounter = () => {
    setCount(count + 1);
  };

  const decrementCounter = () => {
    setCount(count - 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Olá App React Native - Atualiza!</Text>
      <Image
        source={{ uri: "https://picsum.photos/200"}}
        style={{ width: 200, height: 200 }}
      />
      <Text style={styles.text}>Contador: {count}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Incrementar" onPress={incrementCounter} />
        <Button title="Decrementar" onPress={decrementCounter} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 20,
  },
});
