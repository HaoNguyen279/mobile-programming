import React, { useCallback, useEffect, useState } from "react";
import {
  ActivityIndicator,
  View,
  Text,
  Pressable,
  StyleSheet,
} from "react-native";

import type { Phone } from "../types";
import { colors } from "../theme";
import { fetchPhone } from "../api/phoneApi";
import { SelectPhoneApp } from "./SelectPhoneApp";

// Màn hình loading
function Loading() {
  return (
    <View style={styles.center}>
      <ActivityIndicator size="large" color={colors.blue} />
      <Text style={styles.loadingText}>Đang tải...</Text>
    </View>
  );
}

// Màn hình báo lỗi
function ErrorBox({
  message,
  onRetry,
}: {
  message: string;
  onRetry: () => void;
}) {
  return (
    <View style={styles.center}>
      <Text style={styles.errorTitle}>Đã xảy ra lỗi!</Text>

      <Text style={styles.errorMessage}>{message}</Text>

      <Pressable
        style={({ pressed }) => [
          styles.retryButton,
          pressed && styles.pressed,
        ]}
        onPress={onRetry}
      >
        <Text style={styles.retryText}>THỬ LẠI</Text>
      </Pressable>
    </View>
  );
}

export function SelectPhoneApi() {
  const [phone, setPhone] = useState<Phone | null>(null);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    setError(null);
    setPhone(null);

    try {
      const data = await fetchPhone("1");
      setPhone(data);
    } catch (e: unknown) {
      const message =
        e instanceof Error
          ? e.message
          : "Không thể tải dữ liệu điện thoại.";

      setError(message);
    }
  }, []);

  useEffect(() => {
    void load();
  }, [load]);

  if (error !== null) {
    return <ErrorBox message={error} onRetry={() => void load()} />;
  }

  if (phone === null) {
    return <Loading />;
  }

  return <SelectPhoneApp phone={phone} />;
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },

  loadingText: {
    fontSize: 16,
    color: colors.text,
    marginTop: 12,
  },

  errorTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#E53935",
    marginBottom: 12,
  },

  errorMessage: {
    fontSize: 14,
    color: colors.text,
    textAlign: "center",
    marginBottom: 20,
  },

  retryButton: {
    backgroundColor: colors.red,
    paddingHorizontal: 32,
    paddingVertical: 12,
    borderRadius: 6,
  },

  retryText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "bold",
  },

  pressed: {
    opacity: 0.7,
  },
});