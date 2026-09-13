import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { CATEGORIES } from "../assets/data";



export function CategoryChips() {
  return (
    <View
      style={[
        styles.wrap
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
  wrap:{
    flex:1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap:8,
    paddingLeft : 16
  },
  chip:{
    borderRadius : 25,
    backgroundColor: 'lightgray',
    padding: 8
  },
  chipText:{
    fontSize: 14,
    color: 'black'
  }
});
