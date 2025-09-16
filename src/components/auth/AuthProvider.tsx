"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { useRouter, usePathname } from "next/navigation";

interface AuthContextType {
  isAuthenticated: boolean;
  login: (token: string) => void;
  logout: () => void;
  loading: boolean;
}

// AuthContext is currently only used for UI state management, not data fetching
const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      // In a real app, we would verify the token here
      setIsAuthenticated(true);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    if (!loading && pathname?.startsWith("/admin") && !isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated, loading, pathname, router]);

  const login = (token: string) => {
    localStorage.setItem("authToken", token);
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    setIsAuthenticated(false);
    router.push("/");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
