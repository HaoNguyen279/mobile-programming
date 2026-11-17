import React, { useCallback, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { NotificationItem } from "../components/NotificationItem";
import { EmptyState } from "../components/EmptyState";
import { LoadingView } from "../components/LoadingView";
import { ErrorView } from "../components/ErrorView";
import { TodoBox } from "../components/TodoBox";
import { getNotifications, markAsRead } from "../services/notificationService";
import { getErrorMessage } from "../api/client";
import { useAuth } from "../store/hooks";
import { RootScreenProps } from "../navigation/types";
import { AppNotification } from "../types";
import { colors } from "../theme";

export function NotificationsScreen({ navigation }: RootScreenProps<"Notifications">) {
  const { user, isLoggedIn } = useAuth();
  const [data, setData] = useState<AppNotification[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    // TODO BT9.5c: if (!user) return; loading=true, error=null; setData(await getNotifications(user.id)); catch/finally như các màn khác
    void getNotifications; void getErrorMessage; void setData; void setError;
    if (!user) return;
    setLoading(true);
    setError(null);
    try {
      const notifications = await getNotifications(user.id);
      setData(notifications);
    } catch (e) {
      setError(getErrorMessage(e));
    } finally {
      setLoading(false);
    }
  }, [user]);
  useEffect(() => {
    load();
  }, [load]);

  const open = async (n: AppNotification) => {
    if (!n.read) {
      // Cập nhật giao diện ngay lập tức (Optimistic UI)
      setData((prev) =>
        prev.map((item) => (item.id === n.id ? { ...item, read: true } : item))
      );

      // Gọi API, nếu lỗi thì hoàn lại read: false
      markAsRead(n.id).catch(() => {
        setData((prev) =>
          prev.map((item) => (item.id === n.id ? { ...item, read: false } : item))
        );
      });
    }

    if (n.target?.screen === "Orders") {
      navigation.navigate("Orders");
    } else if (n.target?.screen === "BookDetail") {
      navigation.navigate("BookDetail", { bookId: n.target.bookId! });
    }
  };

  if (!isLoggedIn) {
    return <EmptyState emoji="🔒" title="Bạn cần đăng nhập" actionLabel="Đăng nhập" onAction={() => navigation.navigate("Login")} />;
  }
  if (loading) return <LoadingView />;
  if (error) return <ErrorView message={error} onRetry={load} />;

  void NotificationItem; void open;
  return (
    <View style={styles.container}>
      {data.length === 0 ? (
        <EmptyState emoji="🔔" title="Bạn chưa có thông báo nào" actionLabel="Mua sắm ngay" onAction={() => navigation.navigate("Tabs", { screen: "Home" })} />
      ) : (
        data.map((n) => <NotificationItem key={n.id} item={n} onPress={() => open(n)} />)
      )}
    </View>
  );
}

const styles = StyleSheet.create({ container: { flex: 1, backgroundColor: colors.bg, padding: 12 } });
