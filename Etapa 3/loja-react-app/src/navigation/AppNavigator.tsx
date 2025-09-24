import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from '@expo/vector-icons/FontAwesome';

// Tipagens das rotas
import { RootStackParamList, TabParamList } from './types';

// Telas do app - substitua quando necessário
import HomeScreen from "../screens/HomeScreen";
import RegisterScreen from "../screens/RegisterScreen";
import LoginScreen from "../screens/LoginScreen";
import CatalogScreen from "../screens/catalog/catalogScreen";
import CartScreen from "../screens/cart/CartScreen";

// Navegadores
const AppStack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<TabParamList>();

// Navegação por abas (Bottom Tabs)
function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName = "question"; // Ícone padrão

          switch (route.name) {
            case "Catalog":
              iconName = "tags";
              break;
            case "Cart":
              iconName = "shopping-cart";
              break;
            case "Settings":
              iconName = "cog";
              break;
            case "Register":
              iconName = "user-plus";
              break;
          }

          return <FontAwesome name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "red",
        tabBarInactiveTintColor: "grey",
        headerShown: false,
      })}
    >
      <Tab.Screen
        name="Catalog"
        component={CatalogScreen}
        options={{ title: 'Menu' }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{ title: 'Seu Carrinho' }}
      />
      <Tab.Screen
        name="Settings"
        component={HomeScreen} // Substitua por SettingsScreen futuramente
        options={{ title: 'Configurações' }}
      />
      <Tab.Screen
        name="Register"
        component={RegisterScreen}
        options={{ title: 'Registrar' }}
      />
    </Tab.Navigator>
  );
}

// Navegação principal por stack
function StackNavigator() {
  return (
    <AppStack.Navigator>
      <AppStack.Screen
        name="Tabs"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <AppStack.Screen
        name="Details"
        component={HomeScreen} // Substitua por DetailsScreen futuramente
        options={{ title: 'Detalhes' }}
      />
      <AppStack.Screen
        name="Login"
        component={LoginScreen}
        options={{ title: "Acessar" }}
      />
    </AppStack.Navigator>
  );
}

// Exporta o navegador raiz
export default function RootNavigator() {
  return <StackNavigator />;
}
