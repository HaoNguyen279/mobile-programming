import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { CATEGORIES } from "../data";

const DEMO_EXTRA_HEIGHT = false;

export function CategoryChips() {
  return (
    <View
      style={[
        styles.wrap,
        DEMO_EXTRA_HEIGHT && { height: 220, alignContent: "flex-start" },
      ]}
    >
      {CATEGORIES.map((name) => (
        <View key={name} style={styles.chip}>
          <Text style={styles.chipText}>{name}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  chip: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 999,
    borderWidth: 2,
    borderColor: "#036ec5",
  },
  chipText: {
    color: "#036ec5",
    fontSize: 13,
    fontWeight: "700",
  },
});
