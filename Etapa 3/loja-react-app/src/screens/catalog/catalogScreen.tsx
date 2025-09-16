import React, { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet } from 'react-native';

import CatalogCard from "../catalog/catalogCard";
import { getCatalog } from "../services/catalogService"; 
import { NavigationProp } from '@react-navigation/native';

type Product = {
  id: number;
  name: string;
  price: number;
  // adicione outros campos que seu produto possui
};

type Props = {
  navigation: NavigationProp<any>;
};

const CatalogScreen = ({ navigation }: Props) => {
  const [catalog, setCatalog] = useState<Product[]>([]);

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

  useEffect(() => {
    console.log('Catálogo atualizado:', catalog);
  }, [catalog]);

  const handleBuyPress = (product: Product) => {
    // Adicionar ao carrinho (implemente sua lógica aqui)
    console.log('Produto comprado:', product);

    // Navegar para a tela do carrinho
    navigation.navigate('CartScreen'); // Substitua 'CartScreen' pelo nome correto da sua tela de carrinho
  };

  const renderItem = ({ item }: { item: Product }) => (
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
  }
});
