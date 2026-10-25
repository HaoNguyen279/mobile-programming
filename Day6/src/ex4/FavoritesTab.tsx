
import React from "react";

import {
  View,
  Text,
  Image,
  FlatList,
  Pressable,
  StyleSheet,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

import { PHONES, PHONE_COLORS } from "../../data/phones";
import { colors, formatPrice } from "../theme";
import { Stars } from "../Stars";

import type { Phone } from "../types";
import type { TabProps } from "./types";

import { useFavorites } from "./FavoriteContext";

// Component hiển thị sản phẩm yêu thích
function FavoriteRow({
  phone,
  onPress,
}: {
  phone: Phone;
  onPress: () => void;
}) {
  const phoneColor = PHONE_COLORS[phone.defaultColor];

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.card,
        pressed && styles.pressed,
      ]}
    >
      <Image
        source={phoneColor.image}
        style={styles.image}
        resizeMode="contain"
      />

      <View style={styles.info}>
        <Text style={styles.name} numberOfLines={2}>
          {phone.name}
        </Text>

        <Stars value={phone.rating} size={14} />

        <Text style={styles.price}>
          {formatPrice(phone.price)}
        </Text>

        <Text style={styles.supplier}>
          {phone.supplier}
        </Text>
      </View>

      <Ionicons
        name="chevron-forward"
        size={20}
        color={colors.muted}
      />
    </Pressable>
  );
}

export function FavoritesTab({
  navigation,
}: TabProps<"Favorites">) {
  // Lấy danh sách ID yêu thích từ Context
  const { ids } = useFavorites();

  // Lọc sản phẩm theo các ID đã lưu
  const favoritePhones = PHONES.filter((phone) =>
    ids.includes(phone.id)
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        Sản phẩm yêu thích
      </Text>

      {favoritePhones.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Ionicons
            name="heart-outline"
            size={64}
            color={colors.muted}
          />

          <Text style={styles.emptyTitle}>
            Chưa có sản phẩm nào được lưu.
          </Text>

          <Text style={styles.emptyDescription}>
            Hãy vào tab Sản phẩm và bấm vào biểu tượng
            trái tim để lưu sản phẩm yêu thích.
          </Text>
        </View>
      ) : (
        <FlatList
          data={favoritePhones}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <FavoriteRow
              phone={item}
              onPress={() =>
                navigation.navigate("ProductDetails", {
                  id: item.id,
                })
              }
            />
          )}
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
  },

  heading: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.text,
    marginHorizontal: 16,
    marginTop: 16,
    marginBottom: 12,
  },

  list: {
    paddingHorizontal: 12,
    paddingBottom: 20,
    gap: 12,
  },

  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.line,
    padding: 12,
    gap: 10,
  },

  image: {
    width: 88,
    height: 112,
  },

  info: {
    flex: 1,
    gap: 6,
  },

  name: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.text,
  },

  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.red,
  },

  supplier: {
    fontSize: 12,
    color: colors.muted,
  },

  emptyContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 32,
  },

  emptyTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.text,
    textAlign: "center",
    marginTop: 18,
  },

  emptyDescription: {
    fontSize: 14,
    color: colors.muted,
    textAlign: "center",
    lineHeight: 22,
    marginTop: 10,
  },

  pressed: {
    opacity: 0.7,
  },
});
