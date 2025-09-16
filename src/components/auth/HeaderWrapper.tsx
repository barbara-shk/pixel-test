"use client";

import { Header } from "../ui/Header";
import { useAuth } from "./AuthProvider";

export function HeaderWrapper() {
  const { isAuthenticated, logout } = useAuth();

  return <Header isAuthenticated={isAuthenticated} onLogout={logout} />;
}
