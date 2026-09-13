
import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";


export function FloatingCartButton({ count, onPress }: { count: number; onPress: () => void }) {
  return (
    <Pressable onPress={onPress} style={styles.button}>
        <Text style={styles.buttonIcon}>🛒</Text>
        {count > 0 && (
        <View style={styles.badge}>
            <Text style={styles.badgeText}>{count}</Text>
        </View>
        )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
    button:{     
        position: 'absolute',
        bottom: 16,
        right: 16,
        backgroundColor: 'navy',
        borderRadius: 25,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonIcon: {
        fontSize: 22,
      },
      badge: {
        position: "absolute",
        top: -4,
        right: -4,
        minWidth: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: "#DC2626",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 4,
      },
      badgeText: {
        color: "#FFFFFF",
        fontSize: 11,
        fontWeight: "700",
      },
});
