import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../theme";

interface Props {
  value: number; // 0–5 (có thể lẻ, làm tròn khi vẽ)
  size?: number;
  onChange?: (v: number) => void; // có truyền → cho phép bấm chọn sao
}

export function RatingStars({ value, size = 18, onChange }: Props) {
  const filled = Math.round(value);

  return (
    <View style={styles.row}>
      {[1, 2, 3, 4, 5].map((star) => {
        const icon = <Text style={{ fontSize: size, color: star <= filled ? colors.warning : colors.line }}>★</Text>;
        return onChange ? (
          <Pressable key={star} onPress={() => onChange(star)} hitSlop={4} accessibilityLabel={`${star} sao`}>
            {icon}
          </Pressable>
        ) : <View key={star}>{icon}</View>;
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: "row", alignItems: "center" },
});
