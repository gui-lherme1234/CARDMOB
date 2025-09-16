import React, { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet } from 'react-native';

import CatalogCard from "../catalog/catalogCard";
import { getCatalog } from '../services/catalogService'; 

const CatalogScreen = ({ navigation }: any) => {
  const [catalog, setCatalog] = useState<any[]>([]);

  useEffect(() => {
    const fetchCatalog = async () => {
      try {
        const data = await getCatalog();
        setCatalog(data);
      } catch (error) {
        console.error('Erro ao buscar o catálogo:', error);
      }
    };

    fetchCatalog();
  }, []);

  // Log atualizado sempre que o catálogo mudar
  useEffect(() => {
    console.log('Catálogo atualizado:', catalog);
  }, [catalog]);

  const handleBuyPress = (product: any) => {
    // 1 - Adicionar ao carrinho
    // 2 - Ir para a tela do carrinho
    console.log(product);
  };

  const renderItem = ({ item }: any) => (
    <CatalogCard
      product={item}
      onBuyPress={() => handleBuyPress(item)}
    />
  );

  return (
    <View style={styles.container}>
      <Text>Menu</Text>
      <FlatList
        data={catalog}
        renderItem={renderItem}
        keyExtractor={(item: any, index) =>
          item?.id?.toString() ?? index.toString()
        }
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
  }
});
