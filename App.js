import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { TextInput } from 'react-native-web';

export default function App() {
  const [count, setCount] = useState(0);

  const incrementCounter = () => {
    setCount(count + 1);
  };

  const decrementCounter = () => {
    setCount(count - 1);
  };

  const addItem = () => {
    if (text.trim() === '') {
      return;
    }
    const newItem = {
      id: Math.random().toString(),
      text: text.trim()
    }
    setitem([...items, newItem]);
    setText('');
    console.log(items);
  }


  return (
    <View style={styles.container}>
    <TextInput
    style={styles.input}
      value={text}
      onChangeText={setText}
      placeholder='Enter text item'
      />
      <button
      title='Add Item'
      onPress={addItem}
      />

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
