import React from "react";
import { Pressable, StyleSheet, Text, ViewStyle } from "react-native";
import { colors } from "../theme";
import { useWishlist } from "../store/hooks";

interface Props {
  bookId: number;
  size?: number;
  style?: ViewStyle;
}

// TODO BT8.8a: nút tim đọc/ghi CHUNG store wishlist (hook useWishlist() → { isFavorite, toggle })
//   - fav = isFavorite(bookId); hiện ♥ (đỏ colors.heart) nếu fav, ♡ (colors.muted) nếu chưa
//   - onPress → toggle(bookId); accessibilityLabel "Yêu thích" / "Bỏ yêu thích"
// Hiện tại tim chỉ là hình — bấm không có tác dụng.
export function HeartButton({ bookId, size = 34, style }: Props) {
  const { isFavorite, toggle } = useWishlist();
  const favorite = isFavorite(bookId);

  return (
    <Pressable
      style={[styles.btn, { width: size, height: size, borderRadius: size / 2 }, style]}
      onPress={() => toggle(bookId)}
      accessibilityRole="button"
      accessibilityLabel={favorite ? "Bỏ yêu thích" : "Yêu thích"}
    >
      <Text style={{ fontSize: size * 0.55, color: favorite ? colors.heart : colors.muted }}>{favorite ? "♥" : "♡"}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btn: { position: "absolute", top: 8, right: 8, backgroundColor: "rgba(255,255,255,0.92)", alignItems: "center", justifyContent: "center", zIndex: 2 },
});
