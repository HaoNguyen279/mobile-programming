
import { View, Text, StyleSheet } from "react-native";

export function DiscountBadge({ discountPercent, isNew }: { discountPercent?: number; isNew?: boolean }) {
  if (!discountPercent && !isNew) return null;

  return (
    <View style={[styles.badge, isNew && styles.badgeNew]}>
      <Text style={styles.badgeText}>{isNew ? "Mới" : `-${discountPercent}%`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    backgroundColor: "#FF0000",
    borderRadius: 4,
    paddingHorizontal: 4,
    paddingVertical: 2,
    position: "absolute",
    top: 4,
    right: 4,
  },
  badgeNew: {
    backgroundColor: "#00FF00",
  },
  badgeText: {
    color: "#FFFFFF",
    fontSize: 11,
    fontWeight: "700",
  },
});
