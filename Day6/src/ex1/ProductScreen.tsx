
import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
} from "react-native";

import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import type { Phone } from "../types";
import { colors, formatPrice } from "../theme";
import { PHONE_COLORS } from "../../data/phones";
import { Stars } from "../Stars";
import type { SelectPhoneParamList } from "./SelectPhoneApp";

type Props = NativeStackScreenProps<SelectPhoneParamList, "Product"> & {
  phone: Phone;
};

export function ProductScreen({ navigation, route, phone }: Props) {
  const picked = route.params?.color;

  const shown = picked ?? phone.defaultColor;

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.imageWrap}>
        <Image
          source={PHONE_COLORS[shown].image}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <View style={styles.info}>
        <Text style={styles.name}>{phone.name}</Text>
        <View style={styles.row}>
          <Stars value={phone.rating} />
          <Text style={styles.review}>
            (Xem {phone.reviewCount} đánh giá)
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.price}>{formatPrice(phone.price)}</Text>
          <Text style={styles.oldPrice}>
            {formatPrice(phone.oldPrice)}
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.badge}>{phone.badge}</Text>

          <View style={styles.questionCircle}>
            <Text style={styles.question}>?</Text>
          </View>
        </View>
        <Pressable
          style={({ pressed }) => [
            styles.chooseBtn,
            pressed && styles.pressed,
          ]}
          onPress={() => {
            navigation.navigate("ChooseColor", {
              color: picked,
            });
          }}
        >
          <Text style={styles.chooseText}>
            4 MÀU-CHỌN {picked ? "LOẠI" : "MÀU"}
          </Text>

          <Text style={styles.arrow}>{">"}</Text>
        </Pressable>
      </View>

      <Pressable
        style={({ pressed }) => [
          styles.buyBtn,
          pressed && styles.pressed,
        ]}
        onPress={() => {
        }}
      >
        <Text style={styles.buyText}>CHỌN MUA</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 16,
  },

  imageWrap: {
    flex: 1,
    minHeight: 180,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 8,
  },

  image: {
    width: "100%",
    height: "100%",
  },

  info: {
    paddingTop: 8,
    paddingBottom: 12,
  },

  name: {
    fontSize: 15,
    color: colors.text,
    marginBottom: 8,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    marginBottom: 8,
  },

  review: {
    fontSize: 12,
    color: colors.text,
    marginLeft: 8,
  },

  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000000",
    marginRight: 12,
  },

  oldPrice: {
    fontSize: 12,
    color: colors.muted,
    textDecorationLine: "line-through",
  },

  badge: {
    color: "#FF0000",
    fontSize: 10,
    fontWeight: "bold",
  },

  questionCircle: {
    width: 15,
    height: 15,
    borderWidth: 1,
    borderColor: colors.muted,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 6,
  },

  question: {
    color: colors.muted,
    fontSize: 10,
    fontWeight: "bold",
  },

  chooseBtn: {
    height: 38,
    borderWidth: 1,
    borderColor: colors.line,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    marginTop: 4,
  },

  chooseText: {
    color: colors.text,
    fontSize: 12,
    fontWeight: "500",
  },

  arrow: {
    position: "absolute",
    right: 12,
    fontSize: 18,
    color: colors.text,
  },

  buyBtn: {
    height: 44,
    backgroundColor: colors.red,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },

  buyText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "bold",
  },

  pressed: {
    opacity: 0.75,
  },
});
