import React from "react";
import { View, Text, FlatList, StyleSheet } from 'react-native';

import CatalogCard from "../catalog/catalogCard";

// TODO: importar o serviço real de catálogo
const mockCatalog = [
  { id: '1', name: 'Produto A', price: 10.99 },
  { id: '2', name: 'Produto B', price: 15.49 },
];

const CatalogScreen = ({ navigation }: any) => {

  const handleBuyPress = (product: any) => {
    // 1 - Adicionar ao carrinho
    // 2 - Ir para a tela do carrinho
    console.log('Produto selecionado:', product);
  };

  const renderItem = ({ item }: { item: any }) => (
    <CatalogCard
      product={item}
      onBuyPress={() => handleBuyPress(item)}
    />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu</Text>
      <FlatList
        data={mockCatalog} // Substituir por dados reais
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default CatalogScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#F8F8F8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
