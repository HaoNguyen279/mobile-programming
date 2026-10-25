
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

// Component hiển thị một sản phẩm
function ProductRow({
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

        <View style={styles.ratingRow}>
          <Stars value={phone.rating} size={14} />

          <Text style={styles.review}>
            ({phone.reviewCount} đánh giá)
          </Text>
        </View>

        <Text style={styles.price}>
          {formatPrice(phone.price)}
        </Text>

        <Text style={styles.oldPrice}>
          {formatPrice(phone.oldPrice)}
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

export function ProductsTab({
  navigation,
}: TabProps<"Products">) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        Danh sách sản phẩm
      </Text>

      <FlatList
        data={PHONES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductRow
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
        ListEmptyComponent={
          <Text style={styles.empty}>
            Chưa có sản phẩm nào.
          </Text>
        }
      />
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
  },

  name: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.text,
    marginBottom: 6,
  },

  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    marginBottom: 5,
  },

  review: {
    fontSize: 10,
    color: colors.muted,
    marginLeft: 5,
  },

  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.red,
    marginBottom: 2,
  },

  oldPrice: {
    fontSize: 12,
    color: colors.muted,
    textDecorationLine: "line-through",
  },

  supplier: {
    fontSize: 11,
    color: colors.muted,
    marginTop: 5,
  },

  empty: {
    fontSize: 15,
    textAlign: "center",
    color: colors.muted,
    marginTop: 40,
  },

  pressed: {
    opacity: 0.7,
  },
});
