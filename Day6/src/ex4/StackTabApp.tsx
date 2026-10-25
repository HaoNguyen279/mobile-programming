
import React from "react";

import { NavigationContainer } from "@react-navigation/native";

import {
  createNativeStackNavigator,
} from "@react-navigation/native-stack";

import {
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";

import { Ionicons } from "@expo/vector-icons";

import { colors } from "../theme";

import type {
  RootStackParamList,
  TabParamList,
} from "./types";

import { FavoritesProvider } from "./FavoriteContext";
import { ProductsTab } from "./ProductsTab";
import { FavoritesTab } from "./FavoritesTab";
import { ProductDetailsScreen } from "./ProductDetailScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<TabParamList>();

// Icon cho từng tab
const ICONS: Record<
  keyof TabParamList,
  [
    keyof typeof Ionicons.glyphMap,
    keyof typeof Ionicons.glyphMap
  ]
> = {
  Products: ["phone-portrait", "phone-portrait-outline"],
  Favorites: ["heart", "heart-outline"],
};

// Tab Navigator nằm bên trong màn hình Home
function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,

        tabBarActiveTintColor: colors.red,
        tabBarInactiveTintColor: colors.muted,

        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "500",
        },

        tabBarIcon: ({ focused, color, size }) => (
          <Ionicons
            name={ICONS[route.name][focused ? 0 : 1]}
            size={size}
            color={color}
          />
        ),
      })}
    >
      <Tab.Screen
        name="Products"
        component={ProductsTab}
        options={{
          title: "Sản phẩm",
          tabBarLabel: "Sản phẩm",
        }}
      />

      <Tab.Screen
        name="Favorites"
        component={FavoritesTab}
        options={{
          title: "Yêu thích",
          tabBarLabel: "Yêu thích",
        }}
      />
    </Tab.Navigator>
  );
}

// Stack Navigator chính
export function StackTabApp() {
  return (
    <FavoritesProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerTitleAlign: "center",
            headerTintColor: colors.text,
            headerStyle: {
              backgroundColor: "#FFFFFF",
            },
          }}
        >
          <Stack.Screen
            name="Home"
            component={HomeTabs}
            options={{
              title: "Cửa hàng",
            }}
          />

          <Stack.Screen
            name="ProductDetails"
            component={ProductDetailsScreen}
            options={{
              title: "Chi tiết sản phẩm",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </FavoritesProvider>
  );
}
