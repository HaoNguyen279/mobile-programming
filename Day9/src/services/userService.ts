import { api } from "../api/client";
import { User } from "../types";

export async function updateProfile(id: number, data: Pick<User, "name" | "phone">): Promise<User> {
  const res = await api.patch<User & { password?: string }>(`/users/${id}`, data);
  const { password, ...user } = res.data;
  void password; // Tránh cảnh báo biến 'password' không được sử dụng (unused variable) nếu bật strict lint
  return user;
}
