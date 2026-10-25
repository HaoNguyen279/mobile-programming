import React, { useState } from "react";

import {
  View,
  Text,
  FlatList,
  TextInput,
  Image,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import {
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";

import { Ionicons } from "@expo/vector-icons";

import { PHONES, PHONE_COLORS } from "../../data/phones";
import { colors, formatPrice } from "../theme";
import { Stars } from "../Stars";

import type { ColorKey, Phone } from "../types";

type TabParamList = {
  Home: undefined;
  Search: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

const ICONS: Record<
  keyof TabParamList,
  [
    keyof typeof Ionicons.glyphMap,
    keyof typeof Ionicons.glyphMap
  ]
> = {
  Home: ["home", "home-outline"],
  Search: ["search", "search-outline"],
  Profile: ["person", "person-outline"],
};


function ProductRow({ phone }: { phone: Phone }) {
  const colorKey: ColorKey = phone.defaultColor;

  return (
    <View style={styles.card}>
      <Image
        source={PHONE_COLORS[colorKey].image}
        style={styles.productImage}
        resizeMode="contain"
      />

      <View style={styles.productInfo}>
        <Text style={styles.productName} numberOfLines={2}>
          {phone.name.split(" - ")[0]}
        </Text>

        <Stars value={phone.rating} size={15} />

        <Text style={styles.productPrice}>
          {formatPrice(phone.price)}
        </Text>

        <Text style={styles.supplier}>
          {phone.supplier}
        </Text>
      </View>
    </View>
  );
}

// ========================================
// TAB 1: HOME
// ========================================

function HomeTab() {
  return (
    <SafeAreaView style={styles.screen}>
      <Text style={styles.headerTitle}>Danh sách điện thoại</Text>

      <FlatList
        data={PHONES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductRow phone={item} />
        )}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <Text style={styles.emptyText}>
            Chưa có sản phẩm nào.
          </Text>
        }
      />
    </SafeAreaView>
  );
}

// ========================================
// TAB 2: SEARCH
// ========================================

function SearchTab() {
  const [keyword, setKeyword] = useState("");

  // TODO 1: Lọc sản phẩm theo từ khóa
  const filteredPhones = PHONES.filter((phone) => {
    const name = phone.name.toLowerCase();
    const searchKeyword = keyword.trim().toLowerCase();

    return name.includes(searchKeyword);
  });

  return (
    <SafeAreaView style={styles.screen}>
      <Text style={styles.headerTitle}>Tìm kiếm điện thoại</Text>

      <View style={styles.searchContainer}>
        <Ionicons
          name="search-outline"
          size={22}
          color={colors.muted}
        />

        <TextInput
          value={keyword}
          onChangeText={setKeyword}
          placeholder="Nhập từ khóa"
          placeholderTextColor={colors.muted}
          style={styles.input}
          autoCapitalize="none"
          clearButtonMode="while-editing"
        />
      </View>

      <Text style={styles.resultCount}>
        {filteredPhones.length} sản phẩm
      </Text>

      {filteredPhones.length > 0 ? (
        <FlatList
          data={filteredPhones}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ProductRow phone={item} />
          )}
          contentContainerStyle={styles.listContent}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <View style={styles.emptyContainer}>
          <Ionicons
            name="search-outline"
            size={48}
            color={colors.muted}
          />

          <Text style={styles.emptyText}>
            Không có kết quả cho "{keyword}"
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
}

// ========================================
// TAB 3: PROFILE
// ========================================

function ProfileTab() {
  // TODO 2: Avatar + tên + email
  const name = "Nguyễn Văn A";
  const email = "djawdjd@gmail.com";

  const initials = name
    .split(" ")
    .map((word) => word[0])
    .slice(-2)
    .join("")
    .toUpperCase();

  return (
    <SafeAreaView style={styles.profileScreen}>
      <View style={styles.profileContent}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>
            {initials}
          </Text>
        </View>

        <Text style={styles.profileName}>
          {name}
        </Text>

        <Text style={styles.profileEmail}>
          {email}
        </Text>

        <View style={styles.profileDivider} />
      </View>
    </SafeAreaView>
  );
}

// ========================================
// BOTTOM TAB NAVIGATION
// ========================================

export function BottomTabApp() {
  // TODO 3: Khởi tạo NavigationContainer và Tab.Navigator
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: true,

          headerStyle: {
            backgroundColor: "#FFFFFF",
          },

          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 18,
          },

          tabBarActiveTintColor: colors.red,
          tabBarInactiveTintColor: colors.muted,

          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: "500",
          },

          tabBarStyle: {
            height: 62,
            paddingTop: 5,
            paddingBottom: 5,
            backgroundColor: "#FFFFFF",
            borderTopColor: colors.line,
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
          name="Home"
          component={HomeTab}
          options={{
            title: "Trang chủ",
            tabBarLabel: "Trang chủ",
          }}
        />

        <Tab.Screen
          name="Search"
          component={SearchTab}
          options={{
            title: "Tìm kiếm",
            tabBarLabel: "Tìm kiếm",
          }}
        />

        <Tab.Screen
          name="Profile"
          component={ProfileTab}
          options={{
            title: "Cá nhân",
            tabBarLabel: "Cá nhân",
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// ========================================
// STYLES
// ========================================

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.bg,
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.text,
    marginHorizontal: 16,
    marginTop: 16,
    marginBottom: 12,
  },

  listContent: {
    paddingHorizontal: 16,
    paddingBottom: 20,
    gap: 12,
  },

  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 12,
    borderWidth: 1,
    borderColor: colors.line,
    gap: 12,
  },

  productImage: {
    width: 95,
    height: 115,
  },

  productInfo: {
    flex: 1,
    gap: 6,
  },

  productName: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.text,
  },

  productPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.red,
  },

  supplier: {
    fontSize: 12,
    color: colors.muted,
  },

  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 16,
    marginBottom: 12,
    paddingHorizontal: 12,
    height: 48,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: colors.line,
    borderRadius: 8,
  },

  input: {
    flex: 1,
    height: "100%",
    marginLeft: 8,
    fontSize: 15,
    color: colors.text,
  },

  resultCount: {
    fontSize: 13,
    color: colors.muted,
    marginHorizontal: 16,
    marginBottom: 12,
  },

  emptyContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
  },

  emptyText: {
    fontSize: 15,
    color: colors.muted,
    textAlign: "center",
    marginTop: 12,
  },

  profileScreen: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  profileContent: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 24,
    paddingTop: 40,
  },

  avatar: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: colors.blue,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 18,
  },

  avatarText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#FFFFFF",
  },

  profileName: {
    fontSize: 23,
    fontWeight: "bold",
    color: colors.text,
    marginBottom: 8,
  },

  profileEmail: {
    fontSize: 15,
    color: colors.muted,
  },

  profileDivider: {
    height: 1,
    width: "100%",
    backgroundColor: colors.line,
    marginVertical: 28,
  },

  profileItem: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    paddingVertical: 16,
    gap: 12,
  },

  profileItemText: {
    fontSize: 15,
    color: colors.text,
  },
});