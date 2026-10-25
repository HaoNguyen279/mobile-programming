
import React, { useEffect, useState } from "react";

import {
  SafeAreaView,
  View,
  Text,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
} from "react-native";

import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import type { ColorKey, Phone } from "../types";
import { colors, formatPrice } from "../theme";
import { PHONE_COLORS, COLOR_ORDER } from "../../data/phones";
import type { SelectPhoneParamList } from "./SelectPhoneApp";

type Props = NativeStackScreenProps<
  SelectPhoneParamList,
  "ChooseColor"
> & {
  phone: Phone;
};

export function ChooseColorScreen({
  navigation,
  route,
  phone,
}: Props) {
  // Màu hiện tại nhận từ màn hình Product.
  const [picked, setPicked] = useState<ColorKey | undefined>(
    route.params?.color
  );

  // Đồng bộ màu khi màn hình được mở lại với tham số mới.
  useEffect(() => {
    setPicked(route.params?.color);
  }, [route.params?.color]);

  // Tách tên sản phẩm thành hai dòng.
  const [line1, line2] = phone.name.split(" - ");

  return (
    <SafeAreaView style={styles.root}>
      {/* Phần thông tin sản phẩm */}
      <View style={styles.header}>
        <Image
          source={PHONE_COLORS[picked ?? phone.defaultColor].image}
          style={styles.thumb}
          resizeMode="contain"
        />

        <View style={styles.headerText}>
          <Text style={styles.small}>{line1}</Text>

          {line2 ? (
            <Text style={styles.small}>{line2}</Text>
          ) : null}

          {/* Chỉ hiển thị khi đã chọn màu */}
          {picked !== undefined && (
            <>
              <Text style={styles.detail}>
                Màu:{" "}
                <Text style={styles.bold}>
                  {PHONE_COLORS[picked].label}
                </Text>
              </Text>

              <Text style={styles.detail}>
                Cung cấp bởi{" "}
                <Text style={styles.bold}>{phone.supplier}</Text>
              </Text>

              <Text style={styles.price}>
                {formatPrice(phone.price)}
              </Text>
            </>
          )}
        </View>
      </View>

      {/* Phần chọn màu */}
      <View style={styles.body}>
        <Text style={styles.title}>Chọn một màu bên dưới:</Text>

        <ScrollView
          style={styles.colorList}
          contentContainerStyle={styles.swatches}
          showsVerticalScrollIndicator={false}
        >
          {COLOR_ORDER.map((key) => (
            <Pressable
              key={key}
              onPress={() => setPicked(key)}
              style={[
                styles.colorOption,
                picked === key && styles.colorOptionSelected,
              ]}
            >
              {/* Ô màu */}
              <View
                style={[
                  styles.swatch,
                  { backgroundColor: PHONE_COLORS[key].hex },
                ]}
              />

              {/* Tên màu */}
              <Text style={styles.colorName}>
                {PHONE_COLORS[key].label.toUpperCase()}
              </Text>

              {/* Đánh dấu màu đang chọn */}
              <View style={styles.checkArea}>
                {picked === key && (
                  <Text style={styles.check}>✓</Text>
                )}
              </View>
            </Pressable>
          ))}
        </ScrollView>

        {/* Nút hoàn tất */}
        <Pressable
          style={({ pressed }) => [
            styles.doneBtn,
            pressed && styles.pressed,
          ]}
          onPress={() => {
            navigation.navigate({
              name: "Product",
              params: { color: picked },
              merge: true,
            });
          }}
        >
          <Text style={styles.doneText}>XONG</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 16,
    paddingVertical: 18,
    minHeight: 150,
  },

  thumb: {
    width: 110,
    height: 120,
  },

  headerText: {
    flex: 1,
    marginLeft: 12,
    justifyContent: "center",
  },

  small: {
    fontSize: 14,
    color: colors.text,
    marginBottom: 4,
  },

  detail: {
    fontSize: 13,
    color: colors.text,
    marginTop: 5,
  },

  bold: {
    fontWeight: "bold",
  },

  price: {
    fontSize: 16,
    color: "#000000",
    fontWeight: "bold",
    marginTop: 7,
  },

  body: {
    flex: 1,
    backgroundColor: colors.grey,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 16,
  },

  title: {
    fontSize: 17,
    color: "#000000",
    fontWeight: "bold",
    marginBottom: 16,
  },

  colorList: {
    flex: 1,
  },

  swatches: {
    gap: 12,
    paddingBottom: 16,
  },

  colorOption: {
    minHeight: 64,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#FFFFFF",
    borderRadius: 4,
    paddingHorizontal: 14,
    paddingVertical: 8,
  },

  colorOptionSelected: {
    borderColor: "#000000",
    borderWidth: 2,
  },

  swatch: {
    width: 42,
    height: 42,
    borderWidth: 1,
    borderColor: "#D0D0D0",
    borderRadius: 3,
  },

  colorName: {
    flex: 1,
    marginLeft: 16,
    fontSize: 15,
    color: colors.text,
    fontWeight: "500",
  },

  checkArea: {
    width: 24,
    alignItems: "center",
    justifyContent: "center",
  },

  check: {
    fontSize: 22,
    fontWeight: "bold",
    color: colors.blue,
  },

  doneBtn: {
    height: 44,
    backgroundColor: colors.blue,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 12,
  },

  doneText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "bold",
  },

  pressed: {
    opacity: 0.75,
  },
});
