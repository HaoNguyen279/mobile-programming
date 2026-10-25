
import React from "react";

import {
  View,
  Text,
  Image,
  ScrollView,
  Pressable,
  StyleSheet,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

import { PHONES, PHONE_COLORS } from "../../data/phones";
import { colors, formatPrice } from "../theme";
import { Stars } from "../Stars";

import type { RootProps } from "./types";
import { useFavorites } from "./FavoriteContext";

export function ProductDetailsScreen({
  route,
}: RootProps<"ProductDetails">) {
  // TODO 4: Nhận id từ màn hình trước
  const { id } = route.params;

  // Tìm sản phẩm theo id
  const phone = PHONES.find((item) => item.id === id);

  // Lấy trạng thái yêu thích từ Context
  const { has, toggle } = useFavorites();

  // TODO 5: Không tìm thấy sản phẩm
  if (!phone) {
    return (
      <View style={styles.center}>
        <Ionicons
          name="alert-circle-outline"
          size={56}
          color={colors.muted}
        />

        <Text style={styles.notFound}>
          Không tìm thấy sản phẩm #{id}
        </Text>
      </View>
    );
  }

  // Kiểm tra sản phẩm có trong danh sách yêu thích hay không
  const isFavorite = has(phone.id);

  // TODO 6: Hiển thị ảnh, tên, đánh giá, giá và nhà cung cấp
  const phoneColor = PHONE_COLORS[phone.defaultColor];

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      {/* Ảnh sản phẩm */}
      <View style={styles.imageContainer}>
        <Image
          source={phoneColor.image}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      {/* Thông tin sản phẩm */}
      <View style={styles.info}>
        <Text style={styles.name}>
          {phone.name}
        </Text>

        <View style={styles.ratingRow}>
          <Stars value={phone.rating} size={18} />

          <Text style={styles.review}>
            ({phone.reviewCount} đánh giá)
          </Text>
        </View>

        <View style={styles.priceRow}>
          <Text style={styles.price}>
            {formatPrice(phone.price)}
          </Text>

          {phone.oldPrice > phone.price && (
            <Text style={styles.oldPrice}>
              {formatPrice(phone.oldPrice)}
            </Text>
          )}
        </View>

        <View style={styles.divider} />

        <View style={styles.detailRow}>
          <Text style={styles.label}>
            Mã sản phẩm
          </Text>

          <Text style={styles.value}>
            {phone.id}
          </Text>
        </View>

        <View style={styles.detailRow}>
          <Text style={styles.label}>
            Nhà cung cấp
          </Text>

          <Text style={styles.value}>
            {phone.supplier}
          </Text>
        </View>

        <View style={styles.detailRow}>
          <Text style={styles.label}>
            Màu mặc định
          </Text>

          <Text style={styles.value}>
            {phoneColor.label}
          </Text>
        </View>

        <View style={styles.detailRow}>
          <Text style={styles.label}>
            Đánh giá
          </Text>

          <Text style={styles.value}>
            {phone.rating}/5 sao
          </Text>
        </View>

        <Text style={styles.badge}>
          {phone.badge}
        </Text>
      </View>

      {/* TODO 7: Nút thêm hoặc bỏ yêu thích */}
      <Pressable
        onPress={() => toggle(phone.id)}
        style={({ pressed }) => [
          styles.favoriteButton,
          isFavorite && styles.favoriteButtonActive,
          pressed && styles.pressed,
        ]}
      >
        <Ionicons
          name={isFavorite ? "heart" : "heart-outline"}
          size={22}
          color="#FFFFFF"
        />

        <Text style={styles.favoriteText}>
          {isFavorite
            ? "♥ Đã lưu"
            : "♡ Lưu vào yêu thích"}
        </Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
  },

  content: {
    padding: 16,
    paddingBottom: 32,
  },

  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 24,
  },

  notFound: {
    fontSize: 17,
    color: colors.text,
    textAlign: "center",
    marginTop: 16,
  },

  imageContainer: {
    height: 280,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    marginBottom: 16,
  },

  image: {
    width: "90%",
    height: "90%",
  },

  info: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 16,
  },

  name: {
    fontSize: 19,
    fontWeight: "bold",
    color: colors.text,
    lineHeight: 27,
    marginBottom: 12,
  },

  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    marginBottom: 14,
  },

  review: {
    fontSize: 12,
    color: colors.muted,
    marginLeft: 8,
  },

  priceRow: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 10,
    marginBottom: 12,
  },

  price: {
    fontSize: 23,
    fontWeight: "bold",
    color: colors.red,
  },

  oldPrice: {
    fontSize: 14,
    color: colors.muted,
    textDecorationLine: "line-through",
  },

  divider: {
    height: 1,
    backgroundColor: colors.line,
    marginVertical: 12,
  },

  detailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: 12,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },

  label: {
    flex: 1,
    fontSize: 14,
    color: colors.muted,
  },

  value: {
    flex: 1,
    fontSize: 14,
    fontWeight: "600",
    color: colors.text,
    textAlign: "right",
  },

  badge: {
    fontSize: 12,
    color: colors.red,
    fontWeight: "bold",
    marginTop: 16,
  },

  favoriteButton: {
    minHeight: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    backgroundColor: colors.red,
    borderRadius: 8,
    marginTop: 16,
  },

  favoriteButtonActive: {
    backgroundColor: colors.blue,
  },

  favoriteText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "bold",
  },

  pressed: {
    opacity: 0.75,
  },
});
