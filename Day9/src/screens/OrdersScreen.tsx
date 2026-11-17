import React, { useCallback, useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { StatusBadge } from "../components/StatusBadge";
import { PrimaryButton } from "../components/PrimaryButton";
import { EmptyState } from "../components/EmptyState";
import { LoadingView } from "../components/LoadingView";
import { ErrorView } from "../components/ErrorView";
import { TodoBox } from "../components/TodoBox";
import { getOrdersByUser } from "../services/orderService";
import { getBooks } from "../services/bookService";
import { getErrorMessage } from "../api/client";
import { useAuth, useCart } from "../store/hooks";
import { formatDateTime } from "../utils/format";
import { showMessage } from "../utils/dialog";
import { RootScreenProps } from "../navigation/types";
import { Order } from "../types";
import { colors, formatPrice, radius } from "../theme";

export const PAYMENT_LABEL = { cod: "Thanh toán khi nhận hàng (COD)", bank: "Chuyển khoản ngân hàng" } as const;

export function OrdersScreen({ navigation }: RootScreenProps<"Orders">) {
  const { user, isLoggedIn } = useAuth();
  const { items: cartItems, add, setQty } = useCart();
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [openId, setOpenId] = useState<number | null>(null); // đơn đang mở rộng (xem chi tiết ngay tại màn này)

  const load = useCallback(async () => {
    // TODO BT9.3a: if (!user) return; bật loading, xoá error; gọi getOrdersByUser(user.id);
    // SẮP XẾP LẠI ở client: mới nhất lên đầu (b.createdAt.localeCompare(a.createdAt)); catch → setError(getErrorMessage(e)); finally tắt loading
    void getOrdersByUser; void getErrorMessage; void setOrders; void setError;
    getOrdersByUser(user!.id).then((data) => {
      const sorted = data.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
      setOrders(sorted);
    }).catch((e) => {
      setError(getErrorMessage(e));
    }).finally(() => {
      setLoading(false);
    });
  }, [user]);
  useEffect(() => {
    load();
  }, [load]);

  // TODO BT9.C1 (thử thách "Mua lại"): thêm lại toàn bộ sản phẩm của đơn vào giỏ hiện tại
  const reorder = async (order: Order) => {
    void order; void getBooks; void cartItems; void add; void setQty; void showMessage;
  };

  if (!isLoggedIn) {
    return <EmptyState emoji="🔒" title="Bạn cần đăng nhập" actionLabel="Đăng nhập" onAction={() => navigation.navigate("Login")} />;
  }
  if (loading) return <LoadingView />;
  if (error) return <ErrorView message={error} onRetry={load} />;

  void StatusBadge; void PrimaryButton; void formatDateTime; void formatPrice; void radius; void colors; void reorder; void setOpenId; void openId;
  return (
    <View style={styles.container}>
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text style={styles.orderId}>Đơn #{item.id}</Text>
            <Text style={styles.orderDate}>{formatDateTime(item.createdAt)}</Text>
            <Text style={styles.orderTotal}>{formatPrice(item.total)}</Text>
            <StatusBadge status={item.status} />
            <PrimaryButton title="Xem chi tiết" onPress={() => setOpenId(item.id)} />
              {openId === item.id && (
                <View style={{ marginTop: 8, padding: 8, borderRadius: radius.sm, gap: 6 }}>
                  <Text>Phương thức thanh toán: {PAYMENT_LABEL[item.paymentMethod]}</Text>
                  <Text>Địa chỉ giao hàng: {item.address.name}, {item.address.phone}, {item.address.address}</Text>
                  <Text>Sản phẩm:</Text>
                  {item.items.map((it) => (
                    <Text key={it.bookId}>- {it.title} x{it.quantity} = {formatPrice(it.price * it.quantity)}</Text>
                  ))}
                  <PrimaryButton title="Mua lại" onPress={() => reorder(item)} />
                </View>
              )}
          </View>
        )}
        
        ListEmptyComponent={<EmptyState emoji="🧾" title="Bạn chưa có đơn hàng nào" actionLabel="Mua sắm ngay"  />}
      />
    </View>
  );
}

const styles = StyleSheet.create({ container: { flex: 1, backgroundColor: colors.bg, padding: 12, gap: 10 }, orderId: { fontWeight: "700" }, orderDate: { color: colors.muted }, 
  orderTotal: { fontWeight: "700", color: colors.indigo } });
